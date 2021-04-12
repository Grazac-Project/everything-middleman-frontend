// @ts-nocheck

import Subtitle from "../components/subtitle";
import Text from "../components/text";
import TextHeader from "../components/textHeader";
import Title from "../components/title";
// import Kamala from "../assets/kamala.png";
// import { useEffect } from "react";
import ideation from "../assets/ideation.png";
import Growth from "../assets/growth.svg";
import perfect from "../assets/perfect.svg";

// IMAGES

import lead from "../assets/lead.JPG";
import senior from "../assets/senior.jpg";
import strategy from "../assets/strategy-lead.JPG";
import communications from "../assets/comm-lead.JPG";
import admin from "../assets/administrative-lead.JPG";
// import team2 from "../assets/team2.JPG";
import media from "../assets/media-mgr.JPG";
import marketing from "../assets/marketing.JPG";
import community from "../assets/community-mgr.JPG";

const About = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

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
        <section className="about-story">
          <div className="container">
            <Subtitle size="subtitle-big mb-md">Our Story</Subtitle>
            <div className="about-story-list">
              <div className="about-story-item">
                <div className="about-story-img"></div>
                <Title size="" extraStyle="mb-xsm">
                  In the Beginning
                </Title>
                <Text extraStyle="mb-xsm" color="sm-text-light">
                  At some point last year, we discovered a consistent problem
                  that plagued most startups. Brands will often point to lack of
                  sales as an ailing issue yet they were faced with lack of
                  structure, armed with no vision and also struggled with
                  inefficient employees. All these then amounts to the issue of
                  profitability.
                </Text>
              </div>
              <div className="about-story-item">
                <div className="about-story-img"></div>
                <Title size="subtitle-big" extraStyle="mb-xsm">
                  From 2019 - 2020
                </Title>
                <Text extraStyle="mb-xsm" color="sm-text-light">
                  From 2019(or is it 2020) till now, we’ve worked with 30+
                  companies, invigorated with the core idea of creating
                  successful growth experiences for small, medium and large
                  companies across Africa. To this end, we became actively
                  involved in every facet that contributed to the growth of
                  companies—mapping out innovative ideas, building effective
                  marketing strategies, hiring top talents and nurturing a
                  thriving company culture. Within weeks of reworking these
                  areas to becoming more functional, these companies recorded
                  staggering growth.
                </Text>
              </div>
              <div className="about-story-item">
                <div className="about-story-img"></div>
                <Title size="subtitle-big" extraStyle="mb-xsm">
                  Solutions
                </Title>
                <Text extraStyle="mb-xsm" color="sm-text-light">
                  As a collective, we had individuals nicked from different
                  fields, also in the business of moving companies forward.
                  Together we became enamoured with the sole vision of providing
                  solutions to the problems of companies and further advancing
                  them from struggling startups to sustainable brands.
                </Text>
              </div>
              <div className="about-story-item">
                <div className="about-story-img"></div>
                <Title size="subtitle-big" extraStyle="mb-xsm">
                  Game Changing
                </Title>
                <Text extraStyle="mb-xsm" color="sm-text-light">
                  It’s our dream, it’s our plan to infuse our game-changing
                  strategies into the backend systems of companies. It’s time to
                  do away with old-fashioned and doubtful ideas. Welcome to a
                  new world of creativity, innovation and excellence. We believe
                  through this, we will deliver transformative outcomes for our
                  clients.
                </Text>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="about-gallery mb-bg mt-bg">
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
        </section> */}
        <section className="about-values mb-bg mt-bg">
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
              savings without taking on risk or management overhead
            </Text>
            <div className="about-team-gallery">
              <div className="about-team-box">
                <picture className="about-team-img">
                  <img src={lead} alt="kamala" className="about-team-img" />
                </picture>
                <Text>Mahmoud Damisi</Text>
                <Subtitle size={"subtitle-smaller"}>Lead Partner</Subtitle>
              </div>
              <div className="about-team-box">
                <picture className="about-team-img">
                  <img src={senior} alt="kamala" className="about-team-img" />
                </picture>
                <Text>Akiode Hakeem</Text>
                <Subtitle size={"subtitle-smaller"} extraStyle="mt-xsm">
                  Senior Partner
                </Subtitle>
              </div>
              <div className="about-team-box">
                <picture className="about-team-img">
                  <img src={strategy} alt="kamala" className="about-team-img" />
                </picture>
                <Text>Elemide Benjamin</Text>
                <Subtitle size={"subtitle-smaller"} extraStyle="mt-xsm">
                  Strategy Lead
                </Subtitle>
              </div>
              <div className="about-team-box">
                <picture className="about-team-img">
                  <img src={admin} alt="kamala" className="about-team-img" />
                </picture>
                <Text>Ammeh Eleojo</Text>
                <Subtitle size={"subtitle-smaller"} extraStyle="mt-xsm">
                  Administrative Lead
                </Subtitle>
              </div>
              <div className="about-team-box">
                <picture className="about-team-img">
                  <img
                    src={communications}
                    alt="kamala"
                    className="about-team-img"
                  />
                </picture>
                <Text>Olatunde Ajibola</Text>
                <Subtitle size={"subtitle-smaller"} extraStyle="mt-xsm">
                  Research and Communications Lead
                </Subtitle>
              </div>
              <div className="about-team-box">
                <picture className="about-team-img">
                  <img src={media} alt="kamala" className="about-team-img" />
                </picture>
                <Text>Ojo Peter</Text>
                <Subtitle size={"subtitle-smaller"} extraStyle="mt-xsm">
                  Content and Operational Manager
                </Subtitle>
              </div>

              <div className="about-team-box">
                <picture className="about-team-img">
                  <img
                    src={marketing}
                    alt="kamala"
                    className="about-team-img"
                  />
                </picture>
                <Text> Shittu Fadlullahi</Text>
                <Subtitle size={"subtitle-smaller"} extraStyle="mt-xsm">
                  Head Of Marketing
                </Subtitle>
              </div>
              <div className="about-team-box">
                <picture className="about-team-img">
                  <img
                    src={community}
                    alt="kamala"
                    className="about-team-img"
                  />
                </picture>
                <Text> Durosimi Ayodeji</Text>
                <Subtitle size={"subtitle-smaller"} extraStyle="mt-xsm">
                  Community And Media Manager
                </Subtitle>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
