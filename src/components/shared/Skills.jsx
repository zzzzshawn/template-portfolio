//

import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { skills } from "@/constants";

const firstRow = skills.slice(0, 6);
const secondRow = skills.slice(6, 12);
const thirdRow = skills.slice(12, 18);

const ReviewCard = ({ src, title }) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl   "
        // light styles
      )}
    >
      <div className="flex flex-col justify-center items-center gap-2 h-full w-[250px] max-sm:w-[110px] max-lg:w-[160px] max-xl:w-[210px] cursor-none">
        <img
          className="max-sm:w-16 max-lg:w-20"
          width="102"
          height="102"
          alt=""
          src={src}
        />
        <div className="flex flex-col">
          <figcaption className="text-2xl font-medium dark:text-white">
            {title}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="mt-36">
      <div className="md:w-[90%] lg:w-[65%] mx-auto max-md:px-5  ">
        <h1 className="text-7xl max-xl:text-6xl max-sm:text-5xl m-5 xl:mt-32">
          Skills
        </h1>
      </div>

      <div className="relative flex min-h-[500px] w-full flex-col items-center  overflow-hidden rounded-lg  bg-dark-2 md:shadow-xl">
        <Marquee
          pauseOnHover
          className="[--duration:35s] w-full h-full  py-7 max-sm:py-4"
        >
          {firstRow.map((review) => (
            <ReviewCard key={review.src} {...review} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:35s] h-full w-full py-7 max-sm:py-4"
        >
          {secondRow.map((review) => (
            <ReviewCard key={review.src} {...review} />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          className="[--duration:35s] h-full  w-full py-7 max-sm:py-4"
        >
          {thirdRow.map((review) => (
            <ReviewCard key={review.src} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeDemo;
