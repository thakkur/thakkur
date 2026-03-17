import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-intro">
          <h2>Hello, I&apos;m</h2>
          <h1>
            ANIL
            <br />
            <span>KUMAR</span>
          </h1>
        </div>
        <div className="landing-info">
          <h3>Senior React Native Developer</h3>
          <h2 className="landing-info-h2">
            <div className="landing-h2-1">React Native</div>
            <div className="landing-h2-2">Mobile Apps</div>
          </h2>
          <p className="landing-summary">
            Senior Developer with 8+ years of experience building innovative,
            high-performance mobile applications using React Native and modern
            JavaScript and TypeScript.
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Landing;
