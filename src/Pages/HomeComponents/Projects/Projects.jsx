import React from "react";
import billManagementSystem from '../../../assets/BillManageSystem.png';
import roommateFinderPro from '../../../assets/RoommateFinderPro.png';
import productRecommendation from '../../../assets/ProductRecommendation.png';
import '../../../index.css'

const projects = [
    {
        title: "Roommate Finder",
        image: roommateFinderPro,
        description:
            "🏠 A user-friendly interface for finding roommates based on location, preferences, and shared needs. Robust server logic that manages user authentication, roommate listings, and secure API communication.",
        features: [
            "User-based matching",
            "Secure authentication",
            "Listing & booking system",
        ],
        tech: [
            "react",
            "firebase-auth",
            "tailwindcss",
            "responsive-ui",
            "roommate-matching",
            "nodejs",
            "mongodb",
            "expressjs",
        ],
        links: {
            live: "https://roommate-finder-pro.web.app/",
            github: "https://github.com/JahidGittu/Roommate-Finder",
            details: "#",
        },
    },
    {
        title: "Bill Management System",
        image: billManagementSystem,
        description:
            "💡 A smart utility bill management app that allows users to securely log, track, and review their payment records with ease.",
        features: [
            "Add/View bills",
            "Realtime tracking",
            "CRUD operations",
        ],
        tech: [
            "react",
            "tracking",
            "firebase",
            "crud",
            "authentication",
            "tailwindcss",
        ],
        links: {
            live: "https://bill-management-system-1b076.web.app/",
            github: "https://github.com/JahidGittu/Bill-ManageMent-System",
            details: "#",
        },
    },
    {
        title: "Product Recommendation",
        image: productRecommendation,
        description:
            "🌟 A community-driven platform with a dynamic frontend where users can explore, post, and review recommended products. Backend handles authentication, product management, and review APIs.",
        features: [
            "Recommendation logic",
            "Review system",
            "Secure APIs",
        ],
        tech: [
            "react",
            "firebase-auth",
            "tailwindcss",
            "nodejs",
            "jwt",
            "mongodb",
            "rest-api",
            "expressjs",
        ],
        links: {
            live: "https://product-recommendation-pro.web.app/",
            github: "https://github.com/JahidGittu/Product-Recommendation-Client",
            details: "#",
        },
    },
];

const ProjectCard = ({ title, image, description, features, tech, links }) => (
    <div className="border rounded-xl p-6 flex items-center flex-col lg:flex-row gap-6 bg-base-100/80 shadow">

        {/* 🖼️ Scrollable Image Left Side */}
        <div className="flex-1 h-64 overflow-y-auto rounded-xl shadow border border-gray-300">
            <img
                src={image}
                alt={title}
                className="w-full object-cover"
            />
        </div>

        {/* Text Right */}
        <div className="flex-1 flex flex-col justify-between">
            <div>
                <h3 className="text-xl font-bold  mb-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-3">{description}</p>
                <ul className="text-sm text-gray-400 list-none mb-3">
                    {features.map((f, idx) => (
                        <li className="li-style-arrow" key={idx}>{f}</li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t, idx) => (
                        <span
                            key={idx}
                            className="px-2 py-1 text-xs border rounded bg-gray-300 text-gray-700"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex gap-3">
                <a
                    href={links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-500 text-secondary px-4 py-1 rounded hover:bg-gray-600"
                >
                    Live
                </a>
                <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-1 rounded hover:bg-gray-900"
                >
                    GitHub
                </a>
                <a
                    href={links.details}
                    className="bg-gray-500 text-secondary px-4 py-1 rounded hover:bg-gray-600"
                >
                    Details
                </a>
            </div>
        </div>
    </div>
);


const Projects = () => (
    <section className="py-16 px-6 bg-base-100/90">
        <h2 className="text-center text-3xl font-bold mb-12">Projects</h2>
        <div className="space-y-10 max-w-6xl mx-auto">
            {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
            ))}
        </div>
    </section>
);

export default Projects;
