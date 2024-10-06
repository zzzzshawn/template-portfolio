import ReactRotatingText from "react-rotating-text";
import TextRevealByWord from "../magicui/text-reveal";
import { aboutMe } from "@/constants";

const Hero = () => {
  return (
    <div className="md:w-[90%] lg:w-[65%] mx-auto  ">
      <div className="flex flex-col p-5 items-center justify-center w-full">
        <div className="relative h-[100vh]  flex flex-col items-center justify-center w-full text-9xl max-xl:text-6xl max-sm:text-5xl">
          <h1 className="inline-block">
            <ReactRotatingText items={["Hello.", "Namaste."]} />
          </h1>
          <span className="absolute bottom-2 right-2"> </span>
        </div>

        <div className="z-10 md:w-[600px] sm:w-[70%] flex items-center justify-center rounded-lg relative ">
          <TextRevealByWord text={aboutMe}/> 
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
