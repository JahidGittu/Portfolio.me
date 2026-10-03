"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowTrendUp } from "react-icons/fa6";

// 1. --- DokanI Full Page Assets ---
import dokaniDashboard from "@/assets/Projects/Dokani/Dashboard.png";
import dokaniProduct from "@/assets/Projects/Dokani/Product Page.png";
import dokaniSales from "@/assets/Projects/Dokani/Sales.png";
import dokaniInvoice from "@/assets/Projects/Dokani/Invoice.png";
import dokaniInventory from "@/assets/Projects/Dokani/Inventory Page.png";
import dokaniReport from "@/assets/Projects/Dokani/Report Page.png";
import dokaniCustomer from "@/assets/Projects/Dokani/Customer page.png";
import dokaniPurchase from "@/assets/Projects/Dokani/Purchase Page.png";

// 2. --- PTTABD LMS Assets ---
import pttabdHome from "@/assets/Projects/Pttabd LMS/Pttabd Home.png";
import pttabdCourse from "@/assets/Projects/Pttabd LMS/Pttabd Course.png";
import pttabdAdmin from "@/assets/Projects/Pttabd LMS/Admin Dashboard.png";
import pttabdBuilder from "@/assets/Projects/Pttabd LMS/Course Builder.png";

// 3. --- Lakdhanavi Full Page Assets ---
import lakLanding from "@/assets/Projects/Lakdhanavi Project Assets/Landing-Page.jpg";
import lakProjects from "@/assets/Projects/Lakdhanavi Project Assets/Project-Page.jpg";
import lakServices from "@/assets/Projects/Lakdhanavi Project Assets/Service-Page.jpg";
import lakJourney from "@/assets/Projects/Lakdhanavi Project Assets/Journey in Bangladesh.png";
import lakContact from "@/assets/Projects/Lakdhanavi Project Assets/Contact Us Page.png";

// 4. --- BIP Full Page Assets ---
import bipLanding from "@/assets/Projects/Bip Project Assets/Landing Page.png";
import bipDashboard from "@/assets/Projects/Bip Project Assets/dashboard.png";
import bipLandmark from "@/assets/Projects/Bip Project Assets/Landmark Project page.png";
import bipAbout from "@/assets/Projects/Bip Project Assets/About Us page.png";
import bipContact from "@/assets/Projects/Bip Project Assets/contact us page.png";
import bipLogin from "@/assets/Projects/Bip Project Assets/Login page.png";

// 5. --- Mock-Miya Assets ---
import mockmiyaHomeFull from "@/assets/Projects/Mock Miya/Mock Miya Home.png";

// 6. --- Hostel Meal Management Assets ---
import hostelHome from "@/assets/Projects/Hostel Meal Management/Home.png";
import hostelMeals from "@/assets/Projects/Hostel Meal Management/Meals Page.jpg";
import hostelAdmin from "@/assets/Projects/Hostel Meal Management/Admin Profile dashboard.png";
import hostelUser from "@/assets/Projects/Hostel Meal Management/User Profile Dashboard.png";

// 7. --- Product Recommendation Assets ---
import recPro from "@/assets/Projects/Recommendation-Products/ProductRecommendation.png";
import recHome from "@/assets/Projects/Recommendation-Products/home.png";
import recProfile from "@/assets/Projects/Recommendation-Products/Profile.png";
import recQueries from "@/assets/Projects/Recommendation-Products/quries.png";

// 8. --- Roommate Finder Assets ---
import roommatePro from "@/assets/Projects/RoomMate-Finder/RoommateFinderPro.png";
import roommateHome from "@/assets/Projects/RoomMate-Finder/home.png";
import roommateDashboard from "@/assets/Projects/RoomMate-Finder/Dashboard.png";
import roommateRequest from "@/assets/Projects/RoomMate-Finder/Rommate-Request.png";

// 9. --- Bill Management Assets ---
import billSystem from "@/assets/Projects/Bill Management/BillManageSystem.png";
import billHome from "@/assets/Projects/Bill Management/Home.png";
import billProfile from "@/assets/Projects/Bill Management/Profile.png";
import billBill from "@/assets/Projects/Bill Management/Bill.png";

type ProjectImage = string | { src: string };

interface ProjectLinks {
  live?: string;
  github?: string;
  details?: string;
}

interface ProjectItem {
  title: string;
  type: string;
  images: ProjectImage[];
  description: string;
  features: string[];
  tech: string[];
  links: ProjectLinks;
}

const projects: ProjectItem[] = [
  // 1. DokanI
  {
    title: "Dokani — Multi-Tenant SaaS POS & Inventory",
    type: "Own Business Project",
    images: [
      dokaniDashboard,
      dokaniProduct,
      dokaniSales,
      dokaniInvoice,
      dokaniInventory,
      dokaniReport,
      dokaniCustomer,
      dokaniPurchase,
    ],
    description:
      "A scalable multi-tenant SaaS POS, Inventory & Accounting platform built for retail, departmental stores, and wholesale businesses with real-time analytics and billing.",
    features: [
      "POS & Real-time Inventory Management with Barcode support",
      "Multi-Tenant SaaS Architecture with dynamic tenant isolation",
      "Comprehensive Accounting, Profit/Loss & Financial Reporting",
      "Subscription, Licensing & Billing automation",
      "Local Payment Gateway Integration & WhatsApp Invoicing",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Nginx",
      "Tailwind CSS",
    ],
    links: {
      live: "https://dokani.pttabd.com",
    },
  },

  // 2. Pttabd
  {
    title: "LMS Platform PTTABD",
    type: "Client Project",
    images: [pttabdHome, pttabdCourse, pttabdAdmin, pttabdBuilder],
    description:
      "A comprehensive Learning Management System with course management, student enrollment, analytics dashboard, role-based access control, and integrated online payments.",
    features: [
      "Course Management & Student Enrollment system",
      "Admin Dashboard & Real-time Learning Analytics",
      "Interactive Course Builder & Curriculum management",
      "Live Support & Role-based Access Control",
      "Multi-payment Integration & Google APIs",
    ],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Google API",
    ],
    links: {
      live: "https://pttabd.com/",
    },
  },

  // 3. Lakdhanavvi
  {
    title: "Lakdhanavi Ltd",
    type: "Team Project",
    images: [lakLanding, lakProjects, lakServices, lakJourney, lakContact],
    description:
      "A modern corporate power and engineering website with responsive sections, product presentation, full project galleries, and polished UI components.",
    features: [
      "Quotation Request System & Customer Inquiries",
      "Interactive Services & Industrial Project Showcase",
      "Journey in Bangladesh Milestone Page",
      "Support & Corporate Contact Management",
      "Reusable Modular UI Components",
    ],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    links: {
      live: "https://lakdhanavi-frontend.vercel.app/",
    },
  },

  // 4. bip
  {
    title: "Bright International Power (BIP)",
    type: "Team Project",
    images: [bipLanding, bipDashboard, bipLandmark, bipAbout, bipContact, bipLogin],
    description:
      "A modern business website with responsive sections, power equipment showcases, admin dashboard, landmark projects, and professional UI design.",
    features: [
      "Product Presentation & Power Equipment Showcase",
      "Admin & Client Management Dashboard",
      "Landmark Projects & Case Studies Portal",
      "Quotation Request System & Customer Support",
      "Secure Login & Authentication Flow",
    ],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    links: {
      live: "https://bip-frontend-six.vercel.app/",
    },
  },

  // 5. Mock miya
  {
    title: "Mock-Miya",
    type: "Team Project",
    images: [mockmiyaHomeFull],
    description:
      "AI-powered resume builder and interview simulator platform enabling candidates to craft optimal resumes and practice real-time interviews.",
    features: [
      "AI Resume Builder & Real-time Suggestions",
      "Interactive Interview Simulator with Scoring",
      "Multi-role Authentication & Candidate Dashboard",
      "AI-powered Job Description Analyzer",
    ],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AI APIs",
    ],
    links: {
      live: "https://mock-miya.vercel.app/",
      github: "https://github.com/JahidGittu",
    },
  },

  // 6. Hostel Management system
  {
    title: "Hostel Meal Management",
    type: "Full Stack Project",
    images: [hostelHome, hostelMeals, hostelAdmin, hostelUser],
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
      github: "https://github.com/JahidGittu/Hostel-Meals-client-Side",
      live: "https://hostel-management-system-pro.web.app/",
      details: "https://jahidgittu-portfolio.web.app/#",
    },
  },

  // 7. Product Recomendation
  {
    title: "Product Recommendation",
    type: "Full Stack Project",
    images: [recPro, recHome, recProfile, recQueries],
    description:
      "🌟 A community-driven platform for exploring, posting, and reviewing recommended products.",
    features: [
      "Recommendation logic",
      "Review system",
      "Secure APIs",
    ],
    tech: ["React", "Node.js", "MongoDB", "JWT", "TailwindCSS"],
    links: {
      github: "https://github.com/JahidGittu/Product-Recommendation-Client",
      live: "https://product-recommendation-pro.web.app/",
      details: "https://jahidgittu-portfolio.web.app/#",
    },
  },

  // 8. Roommate finder
  {
    title: "Roommate Finder",
    type: "Full Stack Project",
    images: [roommatePro, roommateHome, roommateDashboard, roommateRequest],
    description:
      "🏠 Find your perfect roommate with location-based search, secure authentication, and a smooth booking system.",
    features: [
      "User-based matching",
      "Secure authentication",
      "Listing & booking system",
    ],
    tech: ["React", "Firebase Auth", "TailwindCSS", "Node.js", "MongoDB", "Express"],
    links: {
      github: "https://github.com/JahidGittu/Roommate-Finder",
      live: "https://roommate-finder-pro.web.app/",
      details: "https://jahidgittu-portfolio.web.app/#",
    },
  },

  // 9. Bill Management system
  {
    title: "Bill Management System",
    type: "Full Stack Project",
    images: [billSystem, billHome, billProfile, billBill],
    description:
      "💡 Manage, track, and review your utility bills with real-time updates and secure storage.",
    features: ["Add/View bills", "Realtime tracking", "CRUD operations"],
    tech: ["React", "Firebase", "TailwindCSS", "Authentication"],
    links: {
      github: "https://github.com/JahidGittu/Bill-ManageMent-System",
      live: "https://bill-management-system-1b076.web.app/",
      details: "https://jahidgittu-portfolio.web.app/#",
    },
  },
];

const getImageSrc = (img: ProjectImage): string => {
  return typeof img === "string" ? img : img.src;
};

const ProjectCard: React.FC<ProjectItem> = ({
  title,
  type,
  images,
  description,
  features,
  tech,
  links,
}) => (
  <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-stretch md:flex-row border border-gray-700">
    {/* Image Slider with Full Page Assets */}
    <div className="w-full md:w-1/2 h-80 md:h-[460px] bg-black relative flex items-center justify-center overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide
            key={idx}
            className="h-full bg-base-300/10 overflow-y-auto scrollbar-thin scrollbar-thumb-secondary/50 scrollbar-track-gray-900 flex justify-center items-start"
          >
            <img
              src={getImageSrc(img)}
              alt={`${title} screenshot ${idx + 1}`}
              className="w-full h-auto object-top"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Content */}
    <div className="p-6 md:p-8 flex flex-col flex-grow text-gray-200 w-full md:w-1/2 space-y-5 justify-between">
      <div>
        <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
          <h3 className="text-2xl font-bold text-white tracking-wide">{title}</h3>
          <span className="badge badge-secondary badge-outline text-xs font-semibold px-3 py-1">
            {type}
          </span>
        </div>
        <p className="text-sm text-gray-300 mb-4 leading-relaxed">{description}</p>
        <div className="mb-4">
          <p className="text-xs uppercase tracking-wider font-semibold text-secondary mb-2">
            Key Highlights:
          </p>
          <ul className="text-sm text-gray-300 space-y-1.5">
            {features.map((f, idx) => (
              <li key={idx} className="flex items-center">
                <span className="mr-2 text-secondary font-bold">➤</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs rounded-full bg-gray-800 border border-gray-600 text-accent font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons styled exactly like legacy project */}
        <div className="flex gap-3 mt-auto flex-wrap sm:flex-nowrap">
          {links.github && links.github !== "#" && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gray-700 text-white py-2 px-3 rounded-lg hover:bg-gray-600 transition duration-200 font-medium text-sm"
            >
              GitHub
            </a>
          )}

          {links.live && links.live !== "#" && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 flex-1 bg-gray-600 text-white py-2 px-3 rounded-lg hover:bg-gray-500 transition duration-200 font-medium text-sm"
            >
              Live <FaArrowTrendUp />
            </a>
          )}

          {links.details && links.details !== "#" && (
            <a
              href={links.details}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gray-800 text-gray-200 py-2 px-3 rounded-lg hover:bg-gray-700 transition duration-200 font-medium text-sm border border-gray-700"
            >
              Details
            </a>
          )}

          {!links.github && !links.details && (
            <span className="flex justify-center items-center gap-1.5 flex-1 bg-gray-800/40 text-gray-400 font-medium text-xs sm:text-sm py-2 px-3 rounded-lg border border-gray-700/60 select-none">
              🔒 Confidential Code
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => (
  <section className="pt-24 bg-base-100/80">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-center text-3xl font-bold mb-3 text-white">
        Featured Projects
      </h2>
      <p className="text-center text-accent max-w-xl mx-auto mb-12 text-sm md:text-base">
        A curated showcase of production client projects, SaaS systems, and full-stack web applications built with Next.js, React, TypeScript, and Node.js.
      </p>

      <div className="grid grid-cols-1 gap-10">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
