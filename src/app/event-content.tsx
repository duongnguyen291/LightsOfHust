"use client";

import React, { useState } from "react";
import { Tab, Tabs, TabsHeader, Typography } from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";

const EVENT_CONTENT_IMAGE = [
  {
    title: "Hành Trình Tìm Kiếm Phương Pháp Học Tập Hiệu Quả",
    des: "Khám phá hành trình của một sinh viên khi tìm ra cách học tập hiệu quả để vượt qua các môn đại cương. Câu chuyện này sẽ truyền cảm hứng cho những ai đang gặp khó khăn trong quá trình học tập tại HUST.",
    name: "Nguyễn Văn A",
    position: "Sinh viên ngành CNTT, HUST",
    panel: "Ảnh",
    img: "/image/study.png",
  },
  {
    title: "Khoảnh Khắc Thư Viện - Nơi Tập Trung và Sáng Tạo",
    des: "Một bộ ảnh ghi lại những khoảnh khắc của sinh viên tại thư viện trường, nơi họ cùng nhau học tập, nghiên cứu và sáng tạo. Đây là không gian không thể thiếu trong đời sống học tập của sinh viên HUST.",
    name: "Lê Thị B",
    position: "Sinh viên Khoa Kỹ thuật Điện, HUST",
    panel: "Ảnh",
    img: "/image/library.png",
  },
  {
    title: "Bí Quyết Chinh Phục Môn Học Khó",
    des: "Câu chuyện về một nhóm bạn đã cùng nhau vượt qua những môn học khó nhằn tại HUST. Với sự hỗ trợ lẫn nhau và tìm ra phương pháp học tập độc đáo, họ đã đạt được những kết quả ấn tượng.",
    name: "Nhóm Sinh viên C",
    position: "Sinh viên ngành Cơ Khí, HUST",
    panel: "Ảnh",
    img: "/image/strategy.png",
  },
];

const EVENT_CONTENT_VIDEO = [
  {
    title: "Học tập và Nghiên cứu 📚",
    des: `Quá trình vượt qua một môn học khó: Ghi lại hành trình học tập và những phương pháp bạn sử dụng để vượt qua các môn học thử thách. Có thể là cách quản lý thời gian, phương pháp ghi chú, học nhóm.
Quá trình ôn tập cho các kì thi: Quá trình chuẩn bị, ôn tập và các khoảnh khắc căng thẳng hay thư giãn trước kỳ thi.
Dự án lớn hoặc đồ án tốt nghiệp: Ghi lại các giai đoạn hoàn thành dự án, từ việc lên ý tưởng, thực hiện, cho đến khi hoàn thành. 
`,
    name: "Nhóm Sinh viên E",
    position: "Sinh viên ngành Hóa học, HUST",
    panel: "Video",
    img: "/image/video1.png",
  },
  {
    title: "Cuộc sống sinh viên 🌱",
    des: `Thói quen học tập: Ghi lại những khoảnh khắc học tập hàng ngày của sinh viên, từ việc tự học trong thư viện, làm dự án nhóm đến tham gia các buổi nghiên cứu khoa học. 
Sự kiện học thuật và nghiên cứu khoa học trong trường: Ghi lại các sự kiện học thuật như hội thảo, tọa đàm, hội nghị nghiên cứu khoa học do trường hoặc các câu lạc bộ học thuật trong trường tổ chức. 
Cuộc sống ký túc xá với tinh thần học tập: Ghi lại các khoảnh khắc học tập chung trong ký túc xá, từ việc ôn bài cùng nhau, thảo luận về đề tài nghiên cứu đến những buổi tự học nhóm. 
`,
    name: "Trần Văn D",
    position: "Sinh viên ngành Kỹ thuật Điện, HUST",
    panel: "Video",
    img: "/image/video3.png",
  },
  {
    title: "Hoạt động ngoại khóa 🌍",
    des: `Các chuyến đi thực tế hoặc tham quan: Chia sẻ những hình ảnh hoặc video từ các chuyến đi thực tế đến công ty, nhà máy, hoặc các địa điểm nghiên cứu khác.
Tham gia các cuộc thi hoặc sự kiện học thuật: Ghi lại quá trình chuẩn bị và sự cố gắng trong từng phần thi của các cuộc thi nghiên cứu, công nghệ hoặc cuộc thi học thuật nói chung.
`,
    name: "Nhóm Sinh viên E",
    position: "Sinh viên ngành Hóa học, HUST",
    panel: "Video",
    img: "/image/video2.png",
  },
];

export function EventContent() {
  const [activeTab, setActiveTab] = useState("Image");

  const contentToDisplay =
    activeTab === "Image" ? EVENT_CONTENT_IMAGE : EVENT_CONTENT_VIDEO;

  return (
    <section className="py-8 px-8 lg:py-20" id="Hướng dẫn">
      <Tabs
        value={activeTab}
        className="mb-8"
        onChange={(value: string) => setActiveTab(value)}
      >
        <div className="w-full flex mb-8 flex-col items-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Những Topic Gợi Ý!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4  !text-gray-500"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Chào mừng bạn đến với phần một số ví dụ về các bài dự thi có thể nộp
            về sự kiện Lights of HUST.
          </Typography>
          <TabsHeader
            className="h-12 w-72 md:w-96"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <Tab
              value="Image"
              className="font-medium"
              onClick={() => setActiveTab("Image")}
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Ảnh
            </Tab>
            <Tab
              value="Video"
              className="font-medium"
              onClick={() => setActiveTab("Video")}
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
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
