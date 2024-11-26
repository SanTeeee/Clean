import React from "react";
import order from "../../../assets/order.json";
import security from "../../../assets/security.png";
import reporting from "../../../assets/reporting.png";
import Lottie from "lottie-react";
import notifications from "../../../assets/notification.json";
import settings from "../../../assets/settings.json";
import note from "../../../assets/note.json";
import Personalized from "../Personalized/Personalized";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Personalized.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
function PersonalizedData() {
  const personalizedData = [
    {
      id: 1,
      image: <Lottie animationData={settings} />,
      header: "Client Management",
      desc: "Store and manage client information in a secure and organized database. Easily search for clients and keep detailed records of their preferences and past orders.",
    },
    {
      id: 2,
      image: <Lottie animationData={order} />,
      header: "Order Tracking",
      desc: "Monitor every order with real-time updates. From the moment an order is received to when it’s ready for pickup, our system ensures you’re always in control.",
    },
    {
      id: 3,
      image: <Lottie animationData={note} />,
      header: "Inventory Management ",
      desc: "Manage your stock with our flexible inventory system. Add items, set categories, and customize pricing to suit your business needs.",
    },
  ];
  const personalizedData2 = [
    {
      id: 4,
      image: <Lottie animationData={notifications} />,
      header: "Automated Notifications",
      desc: "Keep your clients in the loop with automated SMS or email notifications when their laundry is ready. Enhance communication and boost customer satisfaction.",
    },
    {
      id: 5,
      image: reporting,
      header: "Detailed Reporting",
      desc: "Gain insights into your business with our comprehensive reporting tools. Track revenue, monitor trends, and make data-driven decisions to grow your laundry business.",
    },
    {
      id: 6,
      image: security,
      header: "Secure and Reliable: ",
      desc: "With built-in security features, your data is always protected. Trust in a system that’s designed to keep your business running smoothly.",
    },
  ];
  return (
    <div className="">
      <Swiper
        // style={{ height: "600px" }}
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        observer={true}
        observeSlideChildren={true}
        observeParents={true}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="overall" id="personalized">
            <h1> Personalized features for you</h1>
            <div className="personalizedWrapper">
              {personalizedData.map((personalizedDatum) => (
                <Personalized
                  key={personalizedDatum.id}
                  personalizedDatum={personalizedDatum}
                />
              ))}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="overall" id=" personalized">
            <h1> Personalized features for you</h1>
            <div className="personalizedWrapper2">
              {personalizedData2.map((personalizedDatum) => (
                <Personalized
                  key={personalizedDatum.id}
                  personalizedDatum={personalizedDatum}
                />
              ))}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PersonalizedData;
