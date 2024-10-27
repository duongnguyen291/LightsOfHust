import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Đơn vị đồng hành", "Về chúng tôi", "Hướng dẫn", "Tài liệu", "Fanpage"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5 ">
          <Typography
            className="text-2xl md:text-3xl text-center font-bold "
            color="white" placeholder=""onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
          >
            THAM GIA NGAY SỰ KIỆN NÀO!
          </Typography>
          <Typography
            color="white"
            className=" md:w-7/12 text-center my-3 !text-base" placeholder=""onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
          >
            Đừng ngại ngần tham gia sự kiện ngằm thúc đẩy phong trào học tập của Đại học Bách Khoa Hà Nội.
          </Typography>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
            <Button color="white" size="md" placeholder=""onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}> 
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Tham gia ngay</a>
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
            placeholder=""onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
          >
            SOICT
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                  placeholder=""onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <IconButton size="sm" color="gray" variant="text" placeholder=""onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text" placeholder=""onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text" placeholder=""onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text" placeholder=""onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
          placeholder=""onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
        >
          &copy; {CURRENT_YEAR} Thực {" "}
          <a href="https://www.material-tailwind.com" target="_blank">
            hiện 
          </a>{" "}
          bởi{" "}
          <a href="https://www.creative-tim.com" target="_blank">
          Nguyễn Đình Dương đẹp trai
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;