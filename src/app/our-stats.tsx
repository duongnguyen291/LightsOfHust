"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "1,000+",
    title: "Người tham gia",
  },
  {
    count: "13",
    title: "Đơn vị",
  },
  {
    count: "2",
    title: "Hình thức: Video và Ảnh",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <Typography
          variant="h6"
          color="orange"
          className="mb-6 font-medium"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Sự kiện của chúng tôi
        </Typography>
        <Typography
          className="text-5xl font-bold leading-tight lg:w-3/4"
          color="blue-gray"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Điểm nhấn của Cuộc thi Lights of HUST
        </Typography>
        <Typography
          variant="lead"
          className="mt-3 w-full !text-gray-500 lg:w-9/12"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Sự kiện đặc biệt này khuyến khích sinh viên chia sẻ những câu chuyện
          truyền cảm hứng, trải nghiệm học tập và khoảnh khắc đáng nhớ trong đời
          sống sinh viên tại Đại học Bách khoa Hà Nội.
        </Typography>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
