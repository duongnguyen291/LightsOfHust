"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Khơi nguồn cảm hứng!",
    description:
      "Tham gia để chia sẻ những câu chuyện độc đáo về hành trình học tập và nghiên cứu của bạn tại HUST. Những tác phẩm dự thi không chỉ là cách để bạn thể hiện niềm đam mê mà còn góp phần lan tỏa tinh thần học hỏi đến cộng đồng sinh viên. ",
    subTitle: "Trình bày",
  },
  {
    title: "Kỹ năng thực tế!",
    description:
      "Cuộc thi đi kèm với các tài liệu hướng dẫn về cách quay video, chụp ảnh và viết câu chuyện sao cho truyền cảm hứng. Những buổi chia sẻ này sẽ giúp bạn nâng cao kỹ năng sáng tạo nội dung để có bài dự thi ấn tượng.",
    subTitle: "Tài liệu liên quan",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography
        variant="h6"
        className="text-center mb-2"
        color="orange"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        Về cuộc thi
      </Typography>


      <Typography variant="h3" className="text-center" color="blue-gray"   placeholder=""onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        Tại sao nên tham gia?
      </Typography>

      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500" placeholder=""onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
      >
        Chào mừng bạn đến với cuộc thi Lights of HUST! Đây là sân chơi đầy cảm hứng dành cho các bạn sinh viên Đại học Bách khoa Hà Nội, nơi các bạn có thể chia sẻ câu chuyện học tập, nghiên cứu và những khoảnh khắc đáng nhớ trong cuộc sống sinh viên. Cuộc thi được tổ chức nhằm kết nối, khích lệ và tạo nên cộng đồng học tập sôi nổi.
      </Typography>

      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Kết nối và chia sẻ!"
            subTitle="Cộng đồng"
            description="Đây là cơ hội để bạn kết nối với các bạn sinh viên cùng sở thích, học hỏi kinh nghiệm từ nhau và xây dựng mối quan hệ trong cộng đồng học tập tại HUST. Hãy cùng nhau chia sẻ và lan tỏa tinh thần học tập!"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;