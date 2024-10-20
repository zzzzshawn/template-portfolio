
import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
import { BorderBeam } from "./border-beam";
import { Link } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { theme } from "@/constants";

const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  href,
  cta,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  return (
    <Link
      to={href}
      key={name}
      target="_blank"
      style={
        {
          "--theme": theme,
        }
      }
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-md transition ease-in-out",
        // light styles
        "bg-dark-2  border-dark-4  cursor-none max-sm:border-2 max-sm:border-solid [border:var(--theme)]",
        // dark styles
        "cursor-none",
        className
      )}
    >
      {/* <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-60 z-10 "
        style={{
          background: useMotionTemplate`
						radial-gradient(${350}px circle at ${mouseX}px ${mouseY}px, ${`#be0303`}, transparent 100%)
					`,
        }}
      /> */}
      <BorderBeam  borderWidth={3.5} />
      <div>
      <img className="absolute opacity-100 hover:blur-xl p-1 md:p-2 object-cover h-full w-full " src={background} />
      </div>
      <div className="pointer-events-none z-1 flex transform-gpu flex-col gap-1 max-sm:px-6 p-6 max-sm:py-2 transition-all duration-300 group-hover:items-center group-hover:justify-center group-hover:h-full ">
        <h1 className="xl:text-5xl text-3xl group-hover:text-white [color:var(--theme)] max-sm:text-2xl font-bold ">
          {name}
        </h1>
        <p className="max-w-lg text-base text-white max-sm:hidden">
          {description}
        </p>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        {/* <Button asChild size="sm" className="pointer-events-auto bg-dark-4 hover:bg-pink-300 hover:text-black max-sm:h-7 ">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button> */}
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </Link>
  );
};

export { BentoCard, BentoGrid };
