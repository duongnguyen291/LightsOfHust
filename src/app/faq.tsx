"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FAQS = [
  {
    title: "1. Ai có thể tham gia cuộc thi Lights of HUST ?",
    desc: " Cuộc thi mở rộng cho tất cả các sinh viên thuộc Đại học Bách khoa Hà Nội. Các bạn có thể tham gia theo hình thức cá nhân hoặc theo nhóm tối đa 6 người, miễn là đáp ứng các tiêu chí về nội dung và hình thức của cuộc thi.",
  },
  {
    title: "2. Quy định về định dạng và thời lượng cho các bài dự thi là gì?",
    desc:  "Ảnh: Mỗi bài dự thi cần tối thiểu 5 ảnh và một câu chuyện kèm theo với nội dung từ 200 từ trở lên. Video: Thời lượng video từ 1 đến 3 phút, định dạng MP4 với chất lượng tối thiểu 720p, đảm bảo nội dung liên quan đến quá trình học tập và đời sống sinh viên tại HUST, đồng thời không vi phạm bản quyền.",
  },
  {
    title: "3. Làm thế nào để đảm bảo tác phẩm không vi phạm bản quyền?",
    desc: "Tất cả ảnh và video phải do chính thí sinh thực hiện. Nếu sử dụng nhạc nền, hình ảnh hoặc nội dung từ bên thứ ba, thí sinh cần phải có sự cho phép hợp lệ và gửi tài liệu xác nhận bản quyền cho Ban Tổ Chức. Ban Tổ Chức sẽ không chịu trách nhiệm đối với bất kỳ tranh chấp bản quyền nào, và bài dự thi vi phạm sẽ bị loại.",
  },
  {
    title: "4. Làm thế nào để bài dự thi lọt vào vòng chung kết?",
    desc: "Những bài dự thi xuất sắc nhất sẽ được Ban Tổ Chức chọn lọc trong vòng sơ loại và tiến vào vòng chung kết. 10% số lượng video có điểm cao nhất sẽ được đăng tải lên trang sự kiện để bình chọn. Kết quả cuối cùng sẽ được quyết định dựa trên tổng điểm từ Ban Giám Khảo và điểm tương tác (lượt like, reaction, comment, và share) từ khán giả trong 48 giờ đầu tiên sau khi bài được đăng",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Những câu hỏi thường gặp
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500"
          >
            Chào mừng bạn đến với phần Câu hỏi thường gặp về sự kiện Lights of HUST. Chúng tôi ở đây để
            giải quyết các câu hỏi phổ biến nhất của bạn và cung cấp cho bạn
            thông tin bạn cần để tận dụng tối đa trải nghiệm với sự kiện.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Faq;
