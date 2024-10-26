"use client";

import React, { useState } from "react";
import {
  Tab,
  Tabs,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";

const EVENT_CONTENT_IMAGE = [
  {
    title: "Hành Trình Tìm Kiếm Phương Pháp Học Tập Hiệu Quả",
    des: "Khám phá hành trình của một sinh viên khi tìm ra cách học tập hiệu quả để vượt qua các môn đại cương. Câu chuyện này sẽ truyền cảm hứng cho những ai đang gặp khó khăn trong quá trình học tập tại HUST.",
    name: "Nguyễn Văn A",
    position: "Sinh viên ngành CNTT, HUST",
    panel: "Ảnh",
    img: "/image/avatar1.jpg",
  },
  {
    title: "Khoảnh Khắc Thư Viện - Nơi Tập Trung và Sáng Tạo",
    des: "Một bộ ảnh ghi lại những khoảnh khắc của sinh viên tại thư viện trường, nơi họ cùng nhau học tập, nghiên cứu và sáng tạo. Đây là không gian không thể thiếu trong đời sống học tập của sinh viên HUST.",
    name: "Lê Thị B",
    position: "Sinh viên Khoa Kỹ thuật Điện, HUST",
    panel: "Ảnh",
    img: "/image/avatar2.jpg",
  },
  {
    title: "Bí Quyết Chinh Phục Môn Học Khó",
    des: "Câu chuyện về một nhóm bạn đã cùng nhau vượt qua những môn học khó nhằn tại HUST. Với sự hỗ trợ lẫn nhau và tìm ra phương pháp học tập độc đáo, họ đã đạt được những kết quả ấn tượng.",
    name: "Nhóm Sinh viên C",
    position: "Sinh viên ngành Cơ Khí, HUST",
    panel: "Ảnh",
    img: "/image/avatar3.png",
  },
];

const EVENT_CONTENT_VIDEO = [
  {
    title: "Thực Hành Tại Phòng Thí Nghiệm",
    des: "Video ghi lại quá trình làm việc nhóm và thực hành tại phòng thí nghiệm, mang đến cho người xem góc nhìn chân thực về môi trường học tập tại HUST.",
    name: "Nhóm Sinh viên E",
    position: "Sinh viên ngành Hóa học, HUST",
    panel: "Video",
    img: "/image/video.gif",
  },
  {
    title: "Video Kinh Nghiệm Học Tập",
    des: "Video này chia sẻ những kinh nghiệm học tập hữu ích từ một sinh viên HUST, giúp các bạn khác học hỏi và cải thiện phương pháp học tập của mình.",
    name: "Trần Văn D",
    position: "Sinh viên ngành Kỹ thuật Điện, HUST",
    panel: "Video",
    img: "/image/video3.gif",
  },
  {
    title: "Thực Hành Tại Phòng Thí Nghiệm",
    des: "Video ghi lại quá trình làm việc nhóm và thực hành tại phòng thí nghiệm, mang đến cho người xem góc nhìn chân thực về môi trường học tập tại HUST.",
    name: "Nhóm Sinh viên E",
    position: "Sinh viên ngành Hóa học, HUST",
    panel: "Video",
    img: "/image/video2.gif",
  },
];

export function EventContent() {
  const [activeTab, setActiveTab] = useState("Image");

  const contentToDisplay = activeTab === "Image" ? EVENT_CONTENT_IMAGE : EVENT_CONTENT_VIDEO;

  return (
    <section className="py-8 px-8 lg:py-20">
      <Tabs value={activeTab} className="mb-8" onChange={(value) => setActiveTab(value)}>
        <div className="w-full flex mb-8 flex-col items-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Câu hỏi thường gặp
          </Typography>
          <Typography variant="lead" className="mb-4  !text-gray-500">
            Chào mừng bạn đến với phần một số ví dụ về các bài dự thi có thể nộp về sự kiện Lights of HUST.
          </Typography>
          <TabsHeader className="h-12 w-72 md:w-96">
            <Tab value="Image" className="font-medium" onClick={() => setActiveTab("Image")}>
              Ảnh
            </Tab>
            <Tab value="Video" className="font-medium" onClick={() => setActiveTab("Video")}>
              Video
            </Tab>
          </TabsHeader>
        </div>
      </Tabs>
      <div className="mx-auto container">
        {contentToDisplay.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;