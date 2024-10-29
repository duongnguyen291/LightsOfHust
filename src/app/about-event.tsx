"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Khơi nguồn cảm hứng!",
    description:
      "Tham gia để chia sẻ những câu chuyện độc đáo về hành trình học tập và nghiên cứu của bạn tại HUST. Những tác phẩm dự thi không chỉ là cách để bạn thể hiện niềm đam mê mà còn góp phần lan tỏa tinh thần học hỏi đến cộng đồng sinh viên. ",
    subTitle: "Trình bày",
    moreDetails: `Tham gia để chia sẻ những câu chuyện độc đáo về hành trình học tập và nghiên cứu của bạn tại HUST. Những tác phẩm dự thi không chỉ là cơ hội để bạn bộc lộ niềm đam mê mà còn góp phần lan tỏa tinh thần học hỏi trong cộng đồng sinh viên.
    Chủ đề "A Flame in Every Frame" khẳng định mong muốn của Ban Tổ Chức rằng mỗi tác phẩm gửi đi sẽ chứa đựng ngọn lửa nhiệt huyết và đam mê học tập mạnh mẽ của các thí sinh. Những ngọn lửa ấy không chỉ truyền cảm hứng cho người xem mà còn đặc biệt hướng đến sinh viên HUST, khơi dậy tinh thần khám phá tri thức.
Hy vọng rằng mỗi tác phẩm tham dự cuộc thi sẽ như một ngọn lửa nhỏ, góp phần tạo nên một bầu nhiệt huyết lớn, thắp sáng Bách khoa bằng những kiến thức và sáng tạo mới mẻ. Hãy để những tác phẩm của bạn trở thành biểu tượng cho sự nỗ lực và khát vọng vươn lên trong học tập, cùng nhau xây dựng một môi trường học tập sôi nổi và đầy cảm hứng.
`,
    imageUrl: "/image/inspiration.png",
  },
  {
    title: "Kỹ năng thực tế!",
    description:
      "Cuộc thi đi kèm với các tài liệu hướng dẫn về cách quay video, chụp ảnh và viết câu chuyện sao cho truyền cảm hứng. Những buổi chia sẻ này sẽ giúp bạn nâng cao kỹ năng sáng tạo nội dung để có bài dự thi ấn tượng.",
    subTitle: "Tài liệu liên quan",
    moreDetails: `Cuộc thi đi kèm với các tài liệu hướng dẫn về cách quay video, chụp ảnh và viết câu chuyện sao cho truyền cảm hứng. Những buổi chia sẻ này sẽ giúp bạn nâng cao kỹ năng sáng tạo nội dung để có bài dự thi ấn tượng.
Khi tham gia cuộc thi, bạn sẽ có cơ hội phát triển nhiều kỹ năng quý giá. Đầu tiên, kỹ năng quay video và chụp ảnh sẽ được cải thiện thông qua việc thực hành trực tiếp, từ việc lựa chọn góc quay đến chỉnh sửa hình ảnh. Bạn sẽ học cách kể chuyện một cách hiệu quả, giúp nội dung trở nên sống động và cuốn hút hơn.
Tham gia theo hình thức cá nhân hoặc nhóm tối đa 6 người sẽ giúp bạn rèn luyện kỹ năng làm việc nhóm, giao tiếp và phối hợp với nhau để tạo ra một sản phẩm hoàn chỉnh. Đặc biệt, khi tất cả thành viên cùng có mặt trong video, bạn sẽ có cơ hội thể hiện cá tính và phong cách riêng của mình.
Ngoài ra, việc viết câu chuyện kèm theo hình ảnh và video sẽ giúp bạn trau dồi kỹ năng viết lách, biết cách diễn đạt ý tưởng và cảm xúc một cách rõ ràng và truyền cảm hứng. Mỗi trải nghiệm này không chỉ giúp bạn có một bài dự thi ấn tượng mà còn trang bị cho bạn những kỹ năng hữu ích cho tương lai. Hãy để ngọn lửa đam mê và sáng tạo bùng cháy trong bạn!
`,
    imageUrl: "/image/training.png",
  },
];

export function AboutEvent() {
  return (
    <section
      className="container mx-auto flex flex-col items-center px-4 py-10"
      id="Về cuộc thi"
    >
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

      <Typography
        variant="h3"
        className="text-center"
        color="blue-gray"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        Tại sao nên tham gia?
      </Typography>

      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        Chào mừng bạn đến với cuộc thi Lights of HUST! Đây là sân chơi đầy cảm
        hứng dành cho các bạn sinh viên Đại học Bách khoa Hà Nội, nơi các bạn có
        thể chia sẻ câu chuyện học tập, nghiên cứu và những khoảnh khắc đáng nhớ
        trong cuộc sống sinh viên. Cuộc thi được tổ chức nhằm kết nối, khích lệ
        và tạo nên cộng đồng học tập sôi nổi.
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
            moreDetails="Đây là cơ hội để bạn kết nối với các bạn sinh viên HUST cùng sở thích, học hỏi kinh nghiệm từ nhau và xây dựng mối quan hệ trong cộng đồng học tập. Tham gia cuộc thi theo hình thức cá nhân hoặc nhóm, bạn sẽ có dịp hợp tác để tạo ra những sản phẩm sáng tạo mang đậm dấu ấn riêng.
Với sự tham gia của thí sinh đến từ tất cả các ngành học, cuộc thi sẽ mang đến nhiều góc nhìn phong phú và đa dạng. Bạn sẽ không chỉ chia sẻ câu chuyện của mình mà còn lắng nghe những trải nghiệm quý báu từ các bạn khác, từ đó mở rộng hiểu biết và tư duy sáng tạo.
Hãy cùng nhau chia sẻ và lan tỏa tinh thần học tập! Mỗi tác phẩm không chỉ là câu chuyện cá nhân mà còn là sự kết nối giữa các sinh viên, góp phần tạo nên một môi trường học tập sôi nổi và đầy cảm hứng. Cùng nhau, chúng ta sẽ thắp sáng những ngọn lửa đam mê và xây dựng những kỷ niệm đáng nhớ trong hành trình học tập tại HUST!
"
            imageUrl="/image/collab.png"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
