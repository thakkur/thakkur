import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Associate Developer</h4>
                <h5>SmartData Inc.</h5>
              </div>
              <h3>Jan 2022 – Present · Mohali, India</h3>
            </div>
            <p>
              Lead development of scalable, responsive mobile apps using React
              Native for high-traffic applications. Implemented Redux-based
              state management, optimized performance, and collaborated with
              cross-functional teams to ship features using CI/CD pipelines and
              Jest tests.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Native Developer</h4>
                <h5>Xicom Technologies</h5>
              </div>
              <h3>Feb 2019 – Apr 2021 · Chandigarh, India</h3>
            </div>
            <p>
              Developed cross-platform mobile apps across healthcare, finance,
              and e-commerce. Integrated third-party APIs and payment gateways
              like Stripe and PayPal, and improved app performance through
              modular code and testing best practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Software Developer</h4>
                <h5>INext Solution</h5>
              </div>
              <h3>Feb 2017 – Dec 2018 · Chandigarh, India</h3>
            </div>
            <p>
              Assisted in building mobile and web applications using JavaScript
              and React. Worked across the full lifecycle from design to
              deployment, and developed REST APIs focused on scalability and
              security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
