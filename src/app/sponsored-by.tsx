"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const SPONSORS = [
  { name: "Đoàn thanh niên - hội sinh viên SOICT", source: "doan.jpg" },
  { name: "SOICT", source: "soict.png" },
  { name: "HUST", source: "hust.png" },
];

export function SponsoredBy() {
  return (
    <section className="py-8 px-8 lg:py-20" id="Đơn vị đồng hành">
      <div className="container mx-auto text-center">
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Được tài trợ và đồng hành bởi
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <img src="/image/logovip.png" style={{ width: "500px" }} />
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
