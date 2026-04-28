import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

type ServiceSlide = {
  src: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
};

const base = import.meta.env.BASE_URL;

const slides: ServiceSlide[] = [
  {
    src: `${base}services/access-control.jpg`,
    tag: "Access & Security",
    title: "Access Control System",
    subtitle: "Intelligent Entry Management",
    description:
      "Biometric, RFID and keypad systems with cloud dashboards and real-time entry logs — keeping unauthorised personnel out, 24/7.",
  },
  {
    src: `${base}services/cctv.webp`,
    tag: "Surveillance",
    title: "CCTV Surveillance",
    subtitle: "Always Watching. Always Safe.",
    description:
      "HD, IP and AI-powered CCTV cameras for round-the-clock monitoring of homes, offices and industrial sites with live mobile access.",
  },
  {
    src: `${base}services/gate-barrier.jpg`,
    tag: "Vehicular Access",
    title: "Gate Barriers",
    subtitle: "Precision Access Management",
    description:
      "High-speed boom barriers for parking lots, compounds and commercial entrances — with vehicle detection and remote integration.",
  },
  {
    src: `${base}services/sliding-gate.webp`,
    tag: "Automation",
    title: "Automatic Sliding Gate",
    subtitle: "Smart Gate Automation",
    description:
      "Heavy-duty sliding gate operators built for smooth, silent and secure automated entry — remote-controlled from your phone or car.",
  },
  {
    src: `${base}services/rolling-shutter.jpg`,
    tag: "Industrial Doors",
    title: "Automatic Rolling Shutter",
    subtitle: "Secure. Durable. Automated.",
    description:
      "Motorised rolling shutters for shopfronts and industrial bays — remote-operated with battery backup for uninterrupted use.",
  },
];

const additionalServices = [
  "Automatic Sliding Glass Door",
  "Trunslide Entrance",
  "Sectional Overhead Door",
  "Garage Door",
];

export default function ServicesCarousel() {
  return (
    <section id="services" className="svc-section">
      <div className="container">
        {/* Header */}
        <div className="svc-header">
          <div className="svc-header-left">
            <span className="eyebrow">Our Services</span>
            <h2 className="section-title svc-title">
              Complete security &{" "}
              <span className="accent">entrance solutions.</span>
            </h2>
          </div>
          <p className="svc-intro">
            Nine specialised services under one trusted roof — from intelligent
            access control and CCTV to heavy-duty industrial doors. Every
            Alphadoors install is engineered for longevity, safety and
            seamless daily operation.
          </p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="svc-carousel-wrap"
        >
          <style>{`
            .svc-swiper {
              width: 100%;
              height: 480px;
              padding-bottom: 56px !important;
            }
            .svc-swiper .swiper-slide {
              width: 360px;
              border-radius: 24px;
              overflow: hidden;
              position: relative;
            }
            .svc-swiper .swiper-pagination-bullet {
              background: #03624c !important;
              opacity: 0.35;
              width: 8px;
              height: 8px;
              transition: all 0.3s;
            }
            .svc-swiper .swiper-pagination-bullet-active {
              background: #03624c !important;
              opacity: 1;
              width: 24px;
              border-radius: 4px;
            }
            .svc-swiper .swiper-slide-shadow-left,
            .svc-swiper .swiper-slide-shadow-right {
              border-radius: 24px;
            }
          `}</style>

          {/* Prev button */}
          <button className="svc-nav svc-prev" aria-label="Previous">
            <ChevronLeft size={22} />
          </button>

          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            loop
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            coverflowEffect={{
              rotate: 32,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".svc-next",
              prevEl: ".svc-prev",
            }}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="svc-swiper"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                {/* Image */}
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="svc-img"
                />
                {/* Overlay */}
                <div className="svc-overlay" />
                {/* Content */}
                <div className="svc-slide-content">
                  <span className="svc-tag">{slide.tag}</span>
                  <div className="svc-slide-body">
                    <p className="svc-subtitle">{slide.subtitle}</p>
                    <h3 className="svc-slide-title">{slide.title}</h3>
                    <p className="svc-slide-desc">{slide.description}</p>
                    <a href="#contact" className="svc-slide-cta">
                      Get a Quote →
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Next button */}
          <button className="svc-nav svc-next" aria-label="Next">
            <ChevronRight size={22} />
          </button>
        </motion.div>

        {/* Additional services strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="svc-extra"
        >
          <p className="svc-extra-label">Also available:</p>
          <div className="svc-extra-pills">
            {additionalServices.map((s) => (
              <a href="#contact" key={s} className="svc-pill">
                {s}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn btn-primary svc-all-btn">
            All Services <span className="arrow">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
