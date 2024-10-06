import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import useIntersection from "./useIntersection";
import { projects } from "@/constants";

export default function Projects() {
  const [ref, ratio] = useIntersection({
    threshold: [0.05, 0.2, 0.4, 0.55, 0.8, 1.0],
  });

  const getBlurClass = () => {
    if (ratio >= 0.45) return "blur-none";
    if (ratio >= 0.4) return "blur-md";
    if (ratio >= 0.05) return "blur-xl";
    return "blur-2xl";
  };

  return (
    <div className="w-full md:w-[98%] mx-auto  max-sm:w-[98%] ">
      <div className="md:w-[90%] lg:w-[65%] mx-auto max-md:px-5 ">
        <h1 className="text-7xl max-xl:text-6xl max-sm:text-5xl m-5 xl:mt-32">
          Projects
        </h1>
      </div>
      <div
        ref={ref}
        className={`transition-all duration-500  ease-in-out ${getBlurClass()}`}
      >
        <BentoGrid className="grid-cols-2 grid-rows-6 h-[800px] md:grid-rows-4 md:grid-cols-4 md:h-[900px] gap-2">
          {projects.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
