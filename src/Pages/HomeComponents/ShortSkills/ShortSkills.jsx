import React from "react";

const skills = [
    "HTML5",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Git",
    "GitHub",
];

const ShortSkills = () => {
    return (
        <section className="bg-[#1d1f29] w-full py-5">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-4 gap-x-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="text-accent text-sm sm:text-base font-semibold tracking-wide hover:text-secondary transition"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShortSkills;
