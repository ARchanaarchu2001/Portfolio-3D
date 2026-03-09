import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center"></div>

        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target={
                socialImg.link.startsWith("http") ? "_blank" : undefined
              }
              rel={
                socialImg.link.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="icon"
              aria-label={socialImg.name}
            >
              <img src={socialImg.imgPath} alt={socialImg.name} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Archana C. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;