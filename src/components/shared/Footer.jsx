import { socials } from "@/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="flex justify-between  text-3xl gap-7 w-[80%] mx-auto border-t border-dark-4 py-11 max-sm:pt-7  max-sm:justify-center max-sm:items-center whitespace-nowrap">
      <div className="">
        <Link className="footer-link" to="" onClick={handleScrollToTop}>
          ^ •
        </Link>
        <Link
          className="footer-link"
          to={socials.github}
          target="_blank"
        >
          {" "}
          github •
        </Link>
        <Link
          className="footer-link"
          to={socials.twitter}
          target="_blank"
        >
          {" "}
          twitter
        </Link>
      </div>
      <div className="max-sm:hidden">
        <p>Made by shawn.</p>
      </div>
    </footer>
  );
};

export default Footer;
