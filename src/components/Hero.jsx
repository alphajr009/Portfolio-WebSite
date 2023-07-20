import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { github, instragram, linkedin } from "../assets";
import { fadeAndSlideIn } from "../utils/motion";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[150px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>

          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm
            <br />
            <span className='text-[#915EFF]'>Pasindu Randika</span>
          </h1>
          <p className={`${styles.heroSubText} mt-3 text-white-100`}>
            Full Stack Developer <br className='sm:block hidden' />
            Expertise in Node.js and React.
          </p>


          <div class="flex gap-5 mt-10 sm:gap-10">
            <a href="https://github.com/alphajr009" target="_blank">
              <img src={github} alt='GitHub' class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
            </a>
            <a href="https://www.linkedin.com/in/pasindurandika/" target="_blank">
              <img src={linkedin} alt='LinkedIn' class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
            </a>
            <a href="https://www.instagram.com/alphajr_09/" target="_blank">
              <img src={instragram} alt='Instagram' class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
            </a>

          </div>
        </div>


      </div>


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
