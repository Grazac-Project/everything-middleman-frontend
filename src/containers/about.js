// @ts-nocheck

import Subtitle from "../components/subtitle";
import Text from "../components/text";
import TextHeader from "../components/textHeader";
import Title from "../components/title";
import Kamala from "../assets/kamala.png";
import { useEffect } from "react";
import ideation from "../assets/ideation.png";
import Growth from "../assets/growth.svg";
import perfect from "../assets/perfect.svg";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <div className="about-container">
        <div className="backgroundColor">
          <div className="container">
            <div className="about-header-container">
              <TextHeader>
                We Will Deliver Transformative Outcomes For Our Clients
              </TextHeader>
              <Text color="sm-text-white contact-header-text">
                Everything Middleman is an agile consulting company that focuses
                on creating successful growth experiences for small, medium and
                large companies across Africa. Through creativity, innovation
                and excellence.
              </Text>
            </div>
          </div>
        </div>
        <section className="about-statements mt-bg">
          <div className="container">
            <div className="about-statements-container">
              <div className="about-statements-statement">
                <Title extraStyle="mb-sm">VISION STATEMENT</Title>
                <Subtitle extraStyle="about-statements-text">
                  To inspire a new generation of value driven and
                  innovation-centered businesses across Africa.
                </Subtitle>
              </div>
              <div className="about-statements-statement">
                <Title extraStyle="mb-sm">MISSION STATEMENTS</Title>
                <ul className="about-statements-list">
                  <li className="about-statements-item">
                    <Text color="sm-text-light ">
                      <span>1. </span>
                      <span>
                        To nurture small scale businesses from ideas to
                        execution
                      </span>
                    </Text>
                  </li>
                  <li className="about-statements-item">
                    <Text color="sm-text-light">
                      <span>2. </span>
                      <span>
                        To reposition corporate and medium companies for
                        sustainable growth
                      </span>
                    </Text>
                  </li>
                  <li className="about-statements-item">
                    <Text color="sm-text-light">
                      <span>3. </span>
                      <span>
                        To connect businesses of all types with required Human
                        Resources for effective operation
                      </span>
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="about-gallery mb-bg mt-bg">
          <div className="container">
            <div className="about-gallery-container">
              <figure className="about-gallery-list-1">
                <img src={Kamala} alt="kamala" className="about-gallery-img" />
              </figure>
              <figure className="about-gallery-list-2">
                <img src={Kamala} alt="kamala" className="about-gallery-img" />
              </figure>
              <figure className="about-gallery-list-3">
                <img src={Kamala} alt="kamala" className="about-gallery-img" />
              </figure>
              <figure className="about-gallery-list-4">
                <img src={Kamala} alt="kamala" className="about-gallery-img" />
              </figure>
              <figure className="about-gallery-list-5">
                <img src={Kamala} alt="kamala" className="about-gallery-img" />
              </figure>
            </div>
          </div>
        </section>
        <section className="about-values mb-bg">
          <div className="about-values-container">
            <Title extraStyle="about-values-title mb-sm">CORE VALUES</Title>
            <Subtitle
              size="subtitle-xbig"
              extraStyle="mb-sm about-values-title"
            >
              OUR CORE VALUES
            </Subtitle>
            <Text color="sm-text-light" extraStyle="about-values-text">
              We bring the results while helping you achieve cost and time
              savings wityhout taking on rish or management overhead
            </Text>
            <div className="about-values-images mt-md">
              <div className="about-values-images-container">
                <div className="about-values-box">
                  <img src={Growth} alt="brand" className="about-values-img" />
                </div>
                <Subtitle extraStyle="mt-xsm">Growth</Subtitle>
              </div>
              <div className="about-values-images-container">
                <div className="about-values-box">
                  <img
                    src={ideation}
                    alt="brand"
                    className="about-values-img"
                  />
                </div>
                <Subtitle extraStyle="mt-xsm">Innovation</Subtitle>
              </div>
              <div className="about-values-images-container">
                <div className="about-values-box">
                  <img src={perfect} alt="brand" className="about-values-img" />
                </div>
                <Subtitle extraStyle="mt-xsm">Excellence</Subtitle>
              </div>
            </div>
          </div>
        </section>
        <section className="about-team  mt-bg">
          <div className="about-team-container ">
            <Subtitle
              size="subtitle-xbig"
              extraStyle="mb-sm about-values-title"
            >
              Our Team
            </Subtitle>
            <Text color="sm-text-light mb-sm" extraStyle="about-values-text">
              We bring the results while helping you achieve cost and time
              savings wityhout taking on rish or management overhead
            </Text>
            <div className="about-team-gallery">
              <div className="about-team-box">
                <img src={Kamala} alt="kamala" className="about-team-img" />
              </div>
              <div className="about-team-box">
                <img src={Kamala} alt="kamala" className="about-team-img" />
              </div>
              <div className="about-team-box">
                <img src={Kamala} alt="kamala" className="about-team-img" />
              </div>
              <div className="about-team-box">
                <img src={Kamala} alt="kamala" className="about-team-img" />
              </div>
              <div className="about-team-box">
                <img src={Kamala} alt="kamala" className="about-team-img" />
              </div>
              <div className="about-team-box">
                <img src={Kamala} alt="kamala" className="about-team-img" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
