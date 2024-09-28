import { useEffect, useState } from "react";
import "../../index.css"; // Ensure your CSS is imported

const CustomCursor = () => {
  const [cursorClass, setCursorClass] = useState("default-cursor");
  const [cursorStyle, setCursorStyle] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Adjust this width as needed
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      return; // Do not apply custom cursor on mobile devices
    }

    const cursor = document.querySelector(".custom-cursor");

    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e) => {
      const element = e.target;
      if (element.classList.contains("footer-link")) {
        const rect = element.getBoundingClientRect();
        setCursorStyle({
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          left: `${rect.left}px`,
          top: `${rect.top}px`,
          borderRadius: '0',
        });
        setCursorClass("footer-link-cursor");
      } else if (element.tagName === "P") {
        setCursorClass("text-cursor");
      } else if (element.tagName === "H1") {
        setCursorClass("text-cursor2");
      } else if (element.tagName === "BUTTON") {
        setCursorClass("button-cursor");
      } else {
        setCursorClass("default-cursor");
        setCursorStyle({});
      }
    };

    const handleMouseOut = () => {
      setCursorClass("default-cursor");
      setCursorStyle({});
    };

    const throttleMouseMove = (e) => {
      requestAnimationFrame(() => handleMouseMove(e));
    };

    document.addEventListener("mousemove", throttleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", throttleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isMobile]);

  if (isMobile) {
    return null; // Do not render the custom cursor on mobile devices
  }

  return <div className={`custom-cursor ${cursorClass}`} style={cursorStyle}></div>;
};

export default CustomCursor;
