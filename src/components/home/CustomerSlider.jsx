// CustomerSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const CustomerSlider = () => {
  const reviews = [
    {
      name: "Felipe",
      country: "Brasil",
      review: "Me gustó el servicio",
      details:
        "Empresa de confianza, ya he hecho 2 transferencias sin problemas… y te dice el detalle de la tarifa y cuánto recibirás. Recomendado.",
      rating: 5,
      image: "https://via.placeholder.com/100", // Reemplaza con la URL de la imagen real
    },
    {
      name: "Martha",
      country: "Perú",
      review: "El mejor servicio",
      details: "Un buen servicio y el envío es rápido.",
      rating: 5,
      image: "https://via.placeholder.com/100", // Reemplaza con la URL de la imagen real
    },
  ];

  return (
    <div className="customer-slider">
      <h2>Comentarios de los clientes</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        className="swiper-container"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <img src={review.image} alt={`${review.name}`} />
              <h3>{review.review}</h3>
              <p>{review.details}</p>
              <div className="review-footer">
                <strong>{review.name}</strong>
                <span>{review.country}</span>
              </div>
              <div className="stars">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerSlider;
