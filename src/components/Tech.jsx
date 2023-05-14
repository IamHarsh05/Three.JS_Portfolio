import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>    
    <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies 
        </h2>
        <br /><br />
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name} >
          <BallCanvas icon={technology.icon} />
          <span style={{marginLeft: 5 + 'px',marginRight: 5 + 'px',}}>{technology.name}</span>
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
