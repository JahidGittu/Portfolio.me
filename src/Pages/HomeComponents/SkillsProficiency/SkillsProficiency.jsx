import React from "react";

const barSkills = [
  { name: "HTML5", value: 90, color: "bg-sky-400" },
  { name: "TailwindCSS", value: 80, color: "bg-orange-400" },
  { name: "Firebase", value: 70, color: "bg-pink-500" },
  { name: "DaisyUI", value: 75, color: "bg-purple-400" },
  { name: "Git", value: 85, color: "bg-green-500" },
];

const circleSkills = [
  { name: "CSS", value: 85, color: "text-purple-400 border-purple-400" },
  { name: "JavaScript", value: 75, color: "text-yellow-400 border-yellow-400" },
  { name: "React", value: 80, color: "text-cyan-400 border-cyan-400" },
  { name: "Node.js", value: 70, color: "text-orange-400 border-orange-400" },
  { name: "MongoDB", value: 60, color: "text-green-400 border-green-400" },
  { name: "Express.js", value: 65, color: "text-pink-400 border-pink-400" },
  { name: "GitHub", value: 80, color: "text-white border-white" },
];

const getOpacityByValue = (value) => {
  if (value >= 95) return 1;
  if (value >= 85) return 0.9;
  if (value >= 75) return 0.8;
  if (value >= 65) return 0.7;
  if (value >= 55) return 0.6;
  if (value >= 45) return 0.5;
  if (value >= 35) return 0.4;
  if (value >= 25) return 0.3;
  if (value >= 15) return 0.2;
  return 0.1;
};

const getStrokeColor = (name) => {
  switch (name) {
    case "CSS": return "#a855f7"; // purple-400
    case "JavaScript": return "#facc15"; // yellow-400
    case "React": return "#22d3ee"; // cyan-400
    case "Node.js": return "#fb923c"; // orange-400
    case "MongoDB": return "#4ade80"; // green-400
    case "Express.js": return "#f472b6"; // pink-400
    case "GitHub": return "#ffffff";
    default: return "#ffffff";
  }
};


const SkillsProficiency = () => {
  return (
    <section className="bg-base-100/90 py-20 px-6 text-base-content">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <div className="text-sm font-semibold text-gray-400 mb-2">— Expertise</div>
            <h2 className="text-3xl font-bold text-green-500 mb-4">My Skills & Tools</h2>
            <p className="text-accent mb-6">
              Every Day is a New Challenge. I’m continuously learning and working with the latest technologies to build modern, scalable, and responsive applications.
            </p>
            <a href="#contact" className="btn btn-outline text-green-500 border-green-500 hover:bg-green-500 hover:text-white w-fit">
              Hire Me
            </a>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6">
            {/* Bar Skills */}
            {barSkills.map((skill, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                  <span className="text-sm font-medium text-white bg-gray-800 px-2 py-0.5 rounded">{skill.value}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded h-2">
                  <div
                    className={`${skill.color} h-2 rounded`}
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      {/* Circle Skills */}
      <div className="flex flex-wrap gap-8 justify-center pt-8">
        {circleSkills.map((skill, index) => (


          <div key={index} className="flex flex-col items-center">
            <div className={`relative w-20 h-20 rounded-full border-4 ${skill.color} flex items-center justify-center text-xl font-bold`}>
              {skill.value}
              <svg className="absolute top-0 left-0 w-full h-full">
                <circle
                  cx="40"
                  cy="40"
                  r="40"
                  fill="none"
                  stroke={getStrokeColor(skill.name)} // 👉 Direct color code
                  strokeWidth="4"
                  strokeDasharray="251.33"
                  strokeDashoffset={(1 - skill.value / 100) * 251.33}
                  style={{
                    opacity: getOpacityByValue(skill.value),
                  }}
                />
              </svg>

            </div>
            <div className="mt-2 text-sm font-semibold text-accent text-center uppercase tracking-wide">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsProficiency;
