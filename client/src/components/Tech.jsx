import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { databases, frameworks, languages } from "../constants";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";


const Tech = () => {
  return (

    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>I have experience with THESE.</p>
        <h2 className={`${styles.sectionHeadText}`}>Languages and Frameworks.</h2>
      </motion.div>
      <p class="text-3xl mt-20 mb-20">Languages:</p>
      <div className=' mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {languages.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p class=" mt-1 text-center">{technology.name}</p>
          </div>
        ))}
      </div>

      <p class="text-3xl mt-20 mb-20">Frameworks:</p>
      <div className=' mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {frameworks.map((framework) => (
          <div className='w-28 h-28' key={framework.name}>
            <BallCanvas icon={framework.icon} />
            <p class=" mt-1 text-center">{framework.name}</p>
          </div>
        ))}
      </div>


      <p class="text-3xl mt-20 mb-20">Databases:</p>
      <div className=' mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {databases.map((database) => (
          <div className='w-28 h-28' key={database.name}>
            <BallCanvas icon={database.icon} />
            <p class=" mt-1 text-center">{database.name}</p>
          </div>
        ))}
      </div>




    </>
  );
};

export default SectionWrapper(Tech, "");
