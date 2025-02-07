import { motion } from "framer-motion";
import { Fragment } from "react/jsx-runtime";
import ShinyButton from "./shiny-button";
import { ArrowTopRightIcon, CardStackIcon } from "@radix-ui/react-icons";
import { FileDiffIcon, Stars } from "lucide-react";

const transition = { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: {
    filter: "blur(10px)",
    transform: "translateY(20%)",
    opacity: 0,
  },
  visible: {
    filter: "blur(0px)",
    transform: "translateY(0)",
    opacity: 1,
  },
};

const text = "Your Financial Future, Redefined with Vuior";

const Hero = () => {
  const words = text.split(" ");

  return (
    <motion.div
      className="pt-14 relative pb-20 md:pt-24 md:pb-32  md:min-h-[86vh] lg:min-h-screen flex flex-col items-center justify-center mx-auto text-center "
      initial="hidden"
      animate={"visible"}
      transition={{ staggerChildren: 0.04 }}
    >
      <h1 className="mb-6 md:max-w-[70%] text-4xl md:text-5xl font-extrabold lg:text-6xl text-primary-text ">
        {words.map((word: string, index: number) => {
          return (
            <Fragment key={index}>
              <motion.span
                className="inline-block "
                transition={transition}
                variants={variants}
              >
                {word}
              </motion.span>
              {index < words.length - 1 && " "}
            </Fragment>
          );
        })}
      </h1>
      <motion.p
        className="text-secondary-text px-2 md:max-w-[70%]  md:text-lg mb-8"
        transition={transition}
        variants={variants}
      >
        <span className="font-bold">
          Welcome to Vuior, where paying your bills early rewards you with huge
          savings while putting up to 25% savings back in your pocket.
        </span>
      </motion.p>

      <div className="flex gap-4 items-center">
        <motion.div
          className="flex items-center md:flex-row flex-col gap-5"
          transition={transition}
          variants={variants}
        >
          <ShinyButton
            href={"/consultation"}
            hideIcon
            className="relative px-16 z-10 h-14 w-full shadow-lg transition-shadow duration-300 hover:shadow-xl rounded-full font-semibold text-xl"
          >
            Start Saving Now
          </ShinyButton>
        </motion.div>
      </div>
      <div className="hidden md:block">
        <Icon
          Component={Stars}
          position="top-[340px] left-10 bg-[#1a3b3b] text-white"
          delay={0.4}
        />
        {/* <Icon
          Component={Waves}
          position="top-[320px] lg:top-[330px] left-40"
          delay={0.4}
        /> */}
        <Icon
          Component={CardStackIcon}
          position="top-[400px]  left-40 bg-[#1a3b3b] text-white"
          delay={0.8}
        />
        <Icon
          Component={ArrowTopRightIcon}
          position="top-[330px] right-20"
          delay={1}
        />
        <Icon
          Component={FileDiffIcon}
          position="top-96 right-52 bg-[#1a3b3b] text-white"
          delay={1.2}
        />
      </div>
    </motion.div>
  );
};

export default Hero;

const Icon = ({
  Component,
  position,
  delay,
}: {
  Component: any;
  position: string;
  delay: number;
}) => {
  return (
    <motion.div
      className={`absolute flex items-center justify-center border border-black p-3 rounded-full ${position}`}
      initial={{ scale: 0, opacity: 0, filter: "blur(10px)" }}
      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      transition={{ ...transition, delay }}
    >
      <Component className="size-8" />
    </motion.div>
  );
};
