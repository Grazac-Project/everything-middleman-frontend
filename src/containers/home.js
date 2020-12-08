import Button from "../components/button";
import Text from "../components/text";
import TextHeader from "../components/textHeader";
import LandingSvg from "../assets/landing-svg.png";
import Behance from "../assets/behance.png";
import Android from "../assets/android.png";
import Brandfold from "../assets/brandfolder.png";
import Kamala from "../assets/kamala.png";
import Title from "../components/title";
import Subtitle from "../components/subtitle";
import services from "../constants/services";
import Service from "../components/service";
import Quote from "../assets/quote.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-header mb-bg">
          <div className="container">
            <div className="home-header-container container">
              <div className="home-header-content">
                <TextHeader>Creating incredible growth experiences</TextHeader>
                <Text color="sm-text-white" extraStyle="mt-xsm mb-sm">
                  We bring the results while helping you achieve cost and time
                  savings wityhout taking on rish or management overhead
                </Text>
                <Button color="button-white">
                  Learn more <span className="button-span">&rarr;</span>
                </Button>
              </div>
              <div className="home-header-svg">
                <img src={LandingSvg} alt="svg" className="home-header-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="home-main">
          <section className="home-main-partners mb-bg">
            <div className="container">
              <div className="home-main-partners-container">
                <div className="home-main-partners-list">
                  <img
                    src={Behance}
                    alt="behance"
                    className="home-main-partners-img"
                  />
                </div>
                <div className="home-main-partners-list">
                  {" "}
                  <img
                    src={Android}
                    alt="behance"
                    className="home-main-partners-img"
                  />
                </div>
                <div className="home-main-partners-list">
                  {" "}
                  <img
                    src={Brandfold}
                    alt="behance"
                    className="home-main-partners-img"
                  />
                </div>
                <div className="home-main-partners-list">
                  {" "}
                  <img
                    src={Behance}
                    alt="behance"
                    className="home-main-partners-img"
                  />
                </div>
                <div className="home-main-partners-list">
                  {" "}
                  <img
                    src={Android}
                    alt="behance"
                    className="home-main-partners-img"
                  />
                </div>
                <div className="home-main-partners-list">
                  {" "}
                  <img
                    src={Brandfold}
                    alt="behance"
                    className="home-main-partners-img"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="home-main-about mt-bg mb-bg">
            <div className="container">
              <div className="home-main-about-container">
                <div className="home-main-about-box mr-sm">
                  <img
                    src={Kamala}
                    alt="kamala"
                    className="home-main-about-img"
                  />
                </div>
                <aside className="home-main-about-content">
                  <Title>ABOUT US</Title>
                  <Subtitle size="subtitle-big" extraStyle="mb-xsm">
                    Unveil Your Business Potential
                  </Subtitle>
                  <Text color="sm-text-light mb-sm home-main-about-text">
                    Everything Middleman is an agile consulting company that
                    focuses on creating successful growth experiences for small,
                    medium and large companies across Africa. Through
                    creativity, innovation and excellence, we will deliver
                    transformative outcomes for our clients
                  </Text>
                  <Button
                    color="button-purple"
                    extraStyle="home-main-about-button"
                  >
                    Learn more <span className="button-span">&rarr;</span>
                  </Button>
                </aside>
              </div>
            </div>
          </section>
          <section className="home-main-services">
            <div className="container">
              <div className="home-main-services-container">
                <div className="home-main-services-intro mb-bg container">
                  <Title extraStyle="mb-sm mt-sm">OUR SERVICES</Title>
                  <Subtitle size="subtitle-big">
                    Why you should choose us
                  </Subtitle>
                  <Text color="sm-text-light" extraStyle="mb-sm mt-sm">
                    EhyaScape is an photography team based on Yogyakarta,
                    Indonesis. We are a small team with big vision of future. We
                    believe everything can be momorize with picture.
                  </Text>
                </div>
                <div className="home-main-services-list mt-md">
                  {services.map((serv) => (
                    <Service
                      src={serv.image}
                      title={serv.title}
                      text={serv.text}
                      key={serv.id}
                      color={serv.color}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="home-main-customer mt-bg mb-bg">
            <div className="container">
              <div className="home-main-customer-container">
                <div className="home-main-customer-content">
                  <Title extraStyle="mb-sm">CUSTOMER STATEMENT</Title>

                  <Subtitle
                    size="subtitle-big"
                    extraStyle="mb-sm home-main-customer-subtitle"
                  >
                    We’ve Worked with them, We Trust Each Other
                  </Subtitle>
                  <Text
                    color="sm-text-dark"
                    extraStyle="mb-sm home-main-customer-title"
                  >
                    Travelya, thank you so much for a well organized trip. We
                    had a wonderful time.Hard to believe it’s already done and
                    past. Weather as awesom, the hotels were nice, thanks your
                    for everything
                  </Text>
                  <Text color="sm-text-dark">Kamala Harris</Text>
                  <Text color="sm-text-light mb-sm home-main-customer-position">
                    First Woman Vice President
                  </Text>
                  <div className="home-main-customer-dots">
                    <span className="home-main-customer-dot"></span>
                    <span className="home-main-customer-dot"></span>
                    <span className="home-main-customer-dot"></span>
                    <span className="home-main-customer-dot"></span>
                  </div>
                </div>
                <div className="home-main-customer-box">
                  <img
                    src={Kamala}
                    alt="kamala"
                    className="home-main-customer-img"
                  />
                  <div className="home-main-customer-quotes">
                    <img
                      src={Quote}
                      alt="quote"
                      className="home-main-customer-quote"
                    />
                    <img
                      src={Quote}
                      alt="quote"
                      className="home-main-customer-quote"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
