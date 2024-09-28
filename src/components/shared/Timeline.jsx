// import { BorderBeam } from "../magicui/border-beam";
import BoxReveal from "../magicui/box-reveal";

const Timeline = () => {
  return (
    <div className="mt-36 max-sm:mt-2 h-full flex max-md:px-5 md:w-[90%] lg:w-[65%] mx-auto  ">
      {/* <div className="relative mt-5 w-[1px]">
        <BorderBeam size={300} borderWidth={5} duration={10} />
      </div> */}
      <div className="">
        <section className="m-5 ">
          <BoxReveal boxColor={`#ab0c0c`} delay={2}>
            <h1 className="text-7xl max-xl:text-6xl max-sm:text-5xl my-7">
              Education
            </h1>
          </BoxReveal>
          <ol className="flex flex-col gap-2 justify-center">
            <li>
              <BoxReveal boxColor={`#ab0c0c`}>
                <p className="text-5xl max-xl:text-4xl max-sm:text-3xl  mb-2">
                Lorem ipsum dolor sit amet.
                </p>
              </BoxReveal>

              <BoxReveal boxColor={`#ab0c0c`}>
                <p className="text-4xl max-xl:text-2xl max-sm:text-xl  ">
                  {" "}
                  Lorem ipsum dolor sit amet.
                  </p>
              </BoxReveal>

              <BoxReveal boxColor={`#ab0c0c`}>
                <p className="text-3xl max-xl:text-xl max-sm:text-lg  mb-5">
                  20XX - 20XX
                </p>
              </BoxReveal>
            </li>

            <li>
              <BoxReveal boxColor={`#ab0c0c`}>
                <p className="text-5xl max-xl:text-4xl max-sm:text-3xl mb-2 ">
                Lorem ipsum dolor sit amet.
                </p>
              </BoxReveal>
              <BoxReveal boxColor={`#ab0c0c`}>
                <p className="text-3xl max-xl:text-xl max-sm:text-lg  ">
                  20XX - 20XX
                </p>
              </BoxReveal>
            </li>
          </ol>
        </section>

        <section className="m-5 mt-14">
          <div className="">
            <BoxReveal boxColor={`#ab0c0c`}>
              <h1 className="text-7xl max-xl:text-6xl max-sm:text-5xl mb-7 ">
                Experience
              </h1>
            </BoxReveal>
          </div>

          <ol>
            <li>
              <BoxReveal boxColor={`#ab0c0c`}>
                <p className="text-5xl max-xl:text-4xl max-sm:text-3xl my-2 ">
                Lorem ipsum dolor sit amet.
                </p>
              </BoxReveal>

              <BoxReveal boxColor={`#ab0c0c`}>
                <p className="text-4xl max-xl:text-2xl max-sm:text-xl  ">
                Lorem ipsum dolor sit amet.
                </p>
              </BoxReveal>

              <BoxReveal boxColor={`#ab0c0c`}>
                <p className="text-3xl max-xl:text-xl max-sm:text-lg  ">
                  Month 20XX - Month 20XX
                </p>
              </BoxReveal>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Timeline;
