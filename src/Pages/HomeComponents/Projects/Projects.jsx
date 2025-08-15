import React from "react";
import "../../../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowTrendUp } from "react-icons/fa6";

// --- Images ---
import billHome from "../../../assets/Projects/Bill Management/Home.png";
import billProfile from "../../../assets/Projects/Bill Management/Profile.png";
import billBill from "../../../assets/Projects/Bill Management/Bill.png";
import roommateHome from "../../../assets/Projects/RoomMate-Finder/home.png";
import roommateDashboard from "../../../assets/Projects/RoomMate-Finder/Dashboard.png";
import roommateRequest from "../../../assets/Projects/RoomMate-Finder/Rommate-Request.png";
import recHome from "../../../assets/Projects/Recommendation-Products/home.png";
import recProfile from "../../../assets/Projects/Recommendation-Products/Profile.png";
import recQueries from "../../../assets/Projects/Recommendation-Products/quries.png";
import hostelAdmin from "../../../assets/Projects/Hostel Meal Management/Admin Profile dashboard.png";
import hostelHome from "../../../assets/Projects/Hostel Meal Management/Home.png";
import hostelMeals from "../../../assets/Projects/Hostel Meal Management/Meals Page.jpg";
import hostelUser from "../../../assets/Projects/Hostel Meal Management/User Profile Dashboard.png";

const projects = [
  {
    title: "Roommate Finder",
    images: [roommateHome, roommateDashboard, roommateRequest],
    description:
      "🏠 Find your perfect roommate with location-based search, secure authentication, and a smooth booking system.",
    features: [
      "User-based matching",
      "Secure authentication",
      "Listing & booking system",
    ],
    tech: [
      "React",
      "Firebase Auth",
      "TailwindCSS",
      "Node.js",
      "MongoDB",
      "Express",
    ],
    links: {
      live: "https://roommate-finder-pro.web.app/",
      github: "https://github.com/JahidGittu/Roommate-Finder",
      details: "#",
    },
  },
  {
    title: "Bill Management System",
    images: [billHome, billProfile, billBill],
    description:
      "💡 Manage, track, and review your utility bills with real-time updates and secure storage.",
    features: ["Add/View bills", "Realtime tracking", "CRUD operations"],
    tech: ["React", "Firebase", "TailwindCSS", "Authentication"],
    links: {
      live: "https://bill-management-system-1b076.web.app/",
      github: "https://github.com/JahidGittu/Bill-ManageMent-System",
      details: "#",
    },
  },
  {
    title: "Product Recommendation",
    images: [recHome, recProfile, recQueries],
    description:
      "🌟 A community-driven platform for exploring, posting, and reviewing recommended products.",
    features: ["Recommendation logic", "Review system", "Secure APIs"],
    tech: ["React", "Node.js", "MongoDB", "JWT", "TailwindCSS"],
    links: {
      live: "https://product-recommendation-pro.web.app/",
      github: "https://github.com/JahidGittu/Product-Recommendation-Client",
      details: "#",
    },
  },
  {
    title: "Hostel Meal Management",
    images: [hostelHome, hostelAdmin, hostelMeals, hostelUser],
    description:
      "🍽️ Manage hostel meals, reviews, and payments with admin and student dashboards.",
    features: [
      "Meal listings",
      "Student reviews",
      "Admin dashboard",
      "Stripe checkout",
    ],
    tech: ["React", "Firebase", "TailwindCSS", "Stripe"],
    links: {
      live: "#",
      github: "#",
      details: "#",
    },
  },
];

const ProjectCard = ({ title, images, description, features, tech, links }) => (
  <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center md:flex-row border border-gray-700">
    {/* Image Slider */}
    <div className="w-full md:w-1/2 h-64 md:h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900 bg-black">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center">
            <img
              src={img}
              alt={`${title}-${idx}`}
              className="w-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-grow text-gray-200 w-full md:w-1/2 space-y-5">
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4 flex-grow">{description}</p>
        <ul className="text-sm text-gray-400 mb-4 space-y-1">
          {features.map((f, idx) => (
            <li key={idx} className="flex items-center">
              <span className="mr-2 text-gray-300">{"➤"}</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs rounded-full bg-gray-800 border border-gray-600 text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-auto">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 transition"
        >
          GitHub
        </a>
        <a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-2 flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-500 transition"
        >
          Live <FaArrowTrendUp />
        </a>

        <a
          href={links.details}
          className="flex-1 text-center bg-gray-800 text-gray-200 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Details
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section className="pt-24 bg-base-100/80">
    <h2 className="text-center text-3xl font-bold mb-12 text-white">
      My Projects
    </h2>
    <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
