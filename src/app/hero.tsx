"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

function Hero() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2024-12-01T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[url('/image/logo.jpg')] bg-cover bg-no-repeat overflow-x-hidden">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-4 sm:px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center w-full max-w-full">
          <Typography
            variant="h3"
            color="white"
            className="mb-2 text-base sm:text-xl md:text-2xl lg:text-3xl"
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            placeholder=""
          >
            04-11-2024 @ Đại học Bách Khoa Hà Nội
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="lg:max-w-3xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Sự kiện phát động phong trào học tập: Lights of HUST
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Nhanh tay đăng ký tham gia sự kiện để nhận về vô vàn phần quà hấp
            dẫn
          </Typography>
          <div className="bg-black bg-opacity-60 rounded-lg p-4 sm:p-6 mb-8 w-full max-w-lg sm:max-w-xl lg:max-w-3xl mx-auto text-white">
            <Typography
              variant="h4"
              className="text-base sm:text-lg md:text-xl lg:text-2xl"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Thời gian còn lại:
            </Typography>
            <div className="flex justify-center space-x-4 sm:space-x-6 mt-4">
              {Object.entries(countdown).map(([key, value], index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="rounded-full h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: "#FFDB00" }}
                  >
                    <Typography
                      variant="h3"
                      className="text-white font-bold text-sm sm:text-lg md:text-xl lg:text-2xl"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      {String(value).padStart(2, "0")}
                    </Typography>
                  </div>
                  <Typography
                    variant="h3"
                    className="text-white mt-2 text-xs sm:text-sm md:text-base lg:text-lg"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    {key === "days"
                      ? "Ngày"
                      : key === "hours"
                      ? "Giờ"
                      : key === "minutes"
                      ? "Phút"
                      : "Giây"}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1flM-keHYnbWwgJZhczrBlzNMxJkI_yah/view?fbclid=IwY2xjawGN5nJleHRuA2FlbQIxMAABHVBMV83p_mlxCAziKnMep-sGbuuILQVmxcfoKju-l8NQRLPMNPStBUoFgw_aem_sAN-MS-EvGA4mltPGNm0hQ"
              target="_blank"
            >
              <Button
                variant="gradient"
                color="yellow"
                className="text-xs sm:text-sm md:text-base lg:text-lg"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Đọc thêm
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
