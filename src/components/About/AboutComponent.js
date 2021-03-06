import React from "react";
import "./AboutComponent.scss";
import IconBuild from "../../assets/images/ic-build.svg";

const AboutComponent = () => (
  <React.Fragment>
    <div className="container UnderDevelopment">
      <img src={IconBuild} alt="Build Icon" />
      <h2>The About and Docs Section is Under Development</h2>
        <p>
          The current platform is in the prototype stage. Many features that we wish
          to build will be deployed in the second phase of development. With more
          support, we will build faster
        </p>
    </div>
    <div className="container">
      <div className="about-container">
        <div className="about-content">
          <div className="about-content-notice">ABOUT THE PROJECT</div>
          <div className="about-content-title">
            Open & Frictionless <br />
            Project Finance for a Low Carbon Planet
          </div>
          <div className="about-content-text">
            <p>
              We are building an open source platform that leverages
              decentralization technology for disintermediation of financial
              processes and contractual automation to drive community-owned
              solar projects.
            </p>
            <p>
              OpenSolar’s core technology seeks to streamline the flow of
              crowd-based funds (eg. bonds and equity) to finance the deployment
              of solar assets, allowing end-users to own these resources in a
              short time frame through regular utility-like payments driven by
              energy generation and consumption IoT data.
            </p>
          </div>
          <div className="about-fixed-width">
            <a
              href="https://apidocs.openx.solar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="solar-form-button solar-btn-normal">
                go to opensolar wiki
              </button>
            </a>
            <a
              href="https://github.com/YaleOpenLab/openx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="solar-form-button solar-btn-normal">
                visit the gitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default AboutComponent;
