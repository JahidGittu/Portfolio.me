import React from "react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiOfficeChairBold } from "react-icons/pi";
import { MdOutlineTimerOff } from "react-icons/md";

const data = [
    {
        left: {
            title: "Basic Computer Trainer & Computer Operator",
            org: "Fatema Computer",
            time: "Feb 2023 – Present (1 yr+)",
            desc: "Trained students in basic computer tools and managed printing, formatting, and customer services.",
        },
        right: {
            title: "Accountant & Computer Operator",
            org: "Nijhum Computer",
            time: "Feb 2022 – Nov 2022 (9 months)",
            desc: "Handled data entry, invoicing, and supported scanning, printing, and form-fill tasks.",
        },
    },
    {
        left: {
            title: "Computer Operator",
            org: "Anik Computer",
            time: "Aug 2020 – Nov 2021 (1 yr 3 months)",
            desc: "Prepared documents, filled out forms, and assisted with email, CVs, and customer help.",
        },
        right: {
            title: "Computer Operator",
            org: "Dider Computer",
            time: "Feb 2019 – Apr 2020 (1 yr 2 months)",
            desc: "Provided typing, scanning, and general computer help to customers in a service center.",
        },
    },
];



const DualTimeline = () => {
    return (
        <section className="py-20 bg-base-100/90 text-white">
            <h2 className="text-3xl font-bold text-center mb-16">Experience</h2>
            <div className="relative max-w-6xl mx-auto">
                {/* Center vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-base-100 z-0" />

                {/* Timeline Items */}
                {data.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center mb-20 relative z-10">
                        {/* Left Card */}
                        <div className="w-[45%] bg-base-100 p-6 rounded-xl shadow-xl">
                            <h3 className="text-xl font-semibold flex gap-2 items-center">
                                <PiOfficeChairBold className="text-lg" />
                                {item.left.title}
                            </h3>
                            <p className="text-sm text-gray-300 flex items-center gap-2 mt-1">
                                <MdOutlineTimerOff className="text-base" />
                                {item.left.time}
                            </p>
                            <p className="text-sm text-gray-300 flex items-center gap-2">
                                <HiOutlineOfficeBuilding className="text-base" />
                                {item.left.org}
                            </p>
                            <p className="text-sm text-gray-400 mt-2">{item.left.desc}</p>
                        </div>

                        {/* Connector */}
                        <div className="relative w-[10%] flex justify-center items-center">
                            <div className="w-[2px] h-[80px] bg-white absolute top-0 left-1/2 transform -translate-x-1/2" />
                            <div className="w-3 h-3 bg-white rounded-full z-10" />
                            <div className="w-[2px] h-[80px] bg-white absolute bottom-0 left-1/2 transform -translate-x-1/2" />
                        </div>

                        {/* Right Card */}
                        <div className="w-[45%] bg-base-100 p-6 rounded-xl shadow-xl">
                            <h3 className="text-xl font-semibold flex gap-2 items-center">
                                <PiOfficeChairBold className="text-lg" />
                                {item.right.title}
                            </h3>
                            <p className="text-sm text-gray-300 flex items-center gap-2 mt-1">
                                <MdOutlineTimerOff className="text-base" />
                                {item.right.time}
                            </p>
                            <p className="text-sm text-gray-300 flex items-center gap-2">
                                <HiOutlineOfficeBuilding className="text-base" />
                                {item.right.org}
                            </p>
                            <p className="text-sm text-gray-400 mt-2">{item.right.desc}</p>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default DualTimeline;
