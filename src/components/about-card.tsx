import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { useState } from "react";

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
  moreDetails: string;
  imageUrl: string;
}

export function AboutCard({
  title,
  description,
  subTitle,
  moreDetails,
  imageUrl,
}: AboutCardProp) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Card
        shadow={false}
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <CardBody
          className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-gray-900 "
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <div
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 1,
            }}
          >
            {/* Dark overlay applied only to the image */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl" />
          </div>
          <Typography
            variant="h6"
            className="mb-4 text-center"
            color="white"
            placeholder=""
            style={{ zIndex: 10 }}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {subTitle}
          </Typography>
          <Typography
            variant="h4"
            className="text-center"
            color="white"
            placeholder=""
            style={{ zIndex: 10 }}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {title}
          </Typography>
          <Typography
            color="white"
            className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal"
            placeholder=""
            style={{ zIndex: 10 }}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {description}
          </Typography>
          <Button
            size="sm"
            placeholder=""
            style={{ zIndex: 10, backgroundColor: "#FFDB00", color: "black" }}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            onClick={toggleModal}
          >
            xem chi tiết
          </Button>
        </CardBody>
      </Card>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 h-4/5 max-w-4xl max-h-full overflow-auto">
            <Typography
              variant="h6"
              className="mb-4 text-center"
              color="black"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {subTitle}
            </Typography>
            <Typography
              variant="h4"
              className="mb-4 text-center"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {title}
            </Typography>
            <img
              src={imageUrl}
              alt="Detail Image"
              className="w-full h-80 object-cover rounded-md mb-4"
            />{" "}
            <Typography
              className="text-center mb-6"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {moreDetails.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </Typography>
            <div className="flex justify-center">
              <Button
                color="gray"
                onClick={toggleModal}
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Đóng
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutCard;
