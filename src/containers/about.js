import Subtitle from "../components/subtitle";
import Text from "../components/text";
import TextHeader from "../components/textHeader";
import Title from "../components/title";
import Kamala from "../assets/kamala.png";
import brand from "../assets/brand.png";
import Button from "../components/button";
const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="backgroundColor mb-bg">
          <div className="container">
            <div className="about-header-container">
              <div className="mb-sm">
                <TextHeader>Our Story</TextHeader>
              </div>
              <Text color="sm-text-white contact-header-text">
                Everything Middleman is an agile consulting company that focuses
                on creating successful growth experiences for small, medium and
                large companies across Africa. Through creativity, innovation
                and excellence, we will deliver transformative outcomes for our
                clients.
              </Text>
              <Button color="button-white" extraStyle="mt-md">
                Read Our Story <span className="button-span">&rarr;</span>
              </Button>
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
                      1. To nurture small scale businesses from ideas to
                      execution
                    </Text>
                  </li>
                  <li className="about-statements-item">
                    <Text color="sm-text-light">
                      2. To reposition corporate and medium companies for
                      sustainable growth
                    </Text>
                  </li>
                  <li className="about-statements-item">
                    <Text color="sm-text-light">
                      3. To connect businesses of all types with required Human
                      Resources for effective operation
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
              <div className="about-values-box">
                <img src={brand} alt="brand" className="about-values-img" />
              </div>
              <div className="about-values-box">
                <img src={brand} alt="brand" className="about-values-img" />
              </div>
              <div className="about-values-box">
                <img src={brand} alt="brand" className="about-values-img" />
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
            <Text color="sm-text-light mb-sm  about-values-title">
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
