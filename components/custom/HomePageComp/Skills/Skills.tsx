"use client"
import { siteConfig } from "@/config/site";
import { Progress } from "@heroui/progress";

export default function Skills() {
  return (
    <div className="container mx-auto max-w-7xl px-6 flex-grow">
      {/* Skills Section */}
      <section className="mt-24">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#E58FFF] to-[#8A4FFF] text-transparent bg-clip-text">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {siteConfig.skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={{ ...skill, level: Number(skill.level) }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

// Skill Card Component
const SkillCard = ({ skill }: { skill: { skill: string; level: number } }) => (
  <div className="bg-white/5 box-border outline outline-1 dark:outline-none outline-[#9615c10c] dark:bg-[#121112] p-6 rounded-lg shadow hover:shadow-md">
    <h4 className="text-lg font-semibold mb-2">
      {skill.skill}
      <span className="text-gray-400 text-xs ml-2">{skill.level}%</span>
    </h4>
    <Progress
      aria-label={skill.skill}
      className="max-w-full h-3 rounded-full overflow-hidden"
      value={skill.level}
      color="secondary"
    />
  </div>
);
