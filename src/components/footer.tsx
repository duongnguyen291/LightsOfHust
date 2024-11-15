import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = [
  "Đơn vị đồng hành",
  "Về cuộc thi",
  "Hướng dẫn",
  "Tài liệu",
  "Fanpage",
];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div
          className="relative flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center max-w-6xl mx-auto bg-center bg-cover rounded-2xl p-5"
          style={{ backgroundImage: `url("/image/avatar2.jpg")` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

          <Typography
            className="text-2xl md:text-3xl text-center font-bold relative z-10"
            color="white"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            THAM GIA NGAY SỰ KIỆN NÀO!
          </Typography>
          <Typography
            color="white"
            className="md:w-7/12 text-center my-3 !text-base relative z-10"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Đừng ngại ngần tham gia sự kiện ngằm thúc đẩy phong trào học tập của
            Đại học Bách Khoa Hà Nội.
          </Typography>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row relative z-10">
            <Button
              style={{ backgroundColor: "#FFDB00", color: "black" }}
              size="md"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScZzpmRHuPVeevldFKOeUa7uQxphm5480ovp5kr_QNHe86Ufw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tham gia ngay
              </a>
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="https://www.facebook.com/soict.hust"
            target="_blank"
            variant="h6"
            className="text-gray-900"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            SOICT
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href={`#${link}`}
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <a
              href="https://www.facebook.com/soict.hust"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                size="sm"
                color="gray"
                variant="text"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <i className="fa-brands fa-facebook text-lg" />
              </IconButton>
            </a>
            <IconButton
              size="sm"
              color="gray"
              variant="text"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <i className="fa-brands fa-tiktok text-lg" />
            </IconButton>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          &copy; {CURRENT_YEAR} Thực{" "}
          <a href="https://www.material-tailwind.com" target="_blank">
            hiện
          </a>{" "}
          bởi{" "}
          <a href="https://www.creative-tim.com" target="_blank">
            Ban HT-NCKH&HN SOICT
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
