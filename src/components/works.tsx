import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github, preview } from "../assets";
import { DESIGN, PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

// Props for ProjectCard
type ProjectCardProps = (typeof PROJECTS)[number] & {
  index: number;
  hideGithub?: boolean; // 👈 optional flag to hide GitHub icon
};

// Project Card Component
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
  hideGithub = false,
}: ProjectCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        {/* Project Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Icons */}
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          {/* Live Preview Icon */}
          <div
            onClick={() => window.open(live_site_link, "_blank", "noreferrer")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={preview}
              alt="Live Site"
              title="Live Site"
              className="w-2/3 h-2/3 object-contain"
            />
          </div>

          {/* GitHub Icon (conditionally rendered) */}
          {!hideGithub && (
            <div
              onClick={() =>
                window.open(source_code_link, "_blank", "noreferrer")
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2"
            >
              <img
                src={github}
                alt="Github"
                title="Github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, tagIdx) => (
          <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[14px]")}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

// Works Component
export const Works = () => {
  return (
    <SectionWrapper>
      <>
        {/* Project Section Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        {/* Project Description */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcase my skills and experience through
            real-world examples of my work.
          </motion.p>
        </div>

        {/* Projects List */}
        <div className="mt-20 flex flex-wrap gap-7">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} {...project} />
          ))}
        </div>

        {/* Design Section Title */}
        <div className="mt-20">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>
              <span>
                <a href="#">My Designs.</a>
              </span>
            </h2>
          </motion.div>

          {/* Design Description */}
          <div className="w-full flex">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              Here are some of my creative UI/UX and web design works, combining
              visual appeal with functionality.
            </motion.p>
          </div>

          {/* Design Cards (hide github) */}
          <div className="mt-20 flex flex-wrap gap-7">
            {DESIGN.map((design, i) => (
              <ProjectCard
                key={`design-${i}`}
                index={i}
                {...design}
                hideGithub // 👈 This hides GitHub icon
              />
            ))}
          </div>
        </div>
      </>
    </SectionWrapper>
  );
};
