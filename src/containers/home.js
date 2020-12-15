import { useState } from "react";
import { LinkButton } from "../components/button";
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
  const [step, setStep] = useState(1);
  const [dots, setdots] = useState([
    { id: 1, color: true },
    { id: 2, color: false },
    { id: 3, color: false },
    { id: 4, color: false },
  ]);
  const [customer] = useState([
    {
      id: 1,
      statement:
        "Everything Middleman is an agile consulting company that focuses on creating successful growth experiences for small,medium and large companies across Africa. Through  creativity, innovation and excellence, we will deliver transformative outcomes for our clients",
      name: "Kamala ",
      title: "FIrst Vice President ",
      pic: Kamala,
    },
    {
      id: 2,
      statement: "Everything Middleman is an agile consulting clients",
      name: " HArrris",
      title: "FIrst Vice President ",
      pic: Kamala,
    },
    {
      id: 3,
      statement:
        "Everything ing successful growth experiences for small,medium and large companies across Africa. Through  creativity, innovation and excellence, we will deliver transformative outcomes for our clients",
      name: "Kala Hris",
      title: "FIrst Vice President ",
      pic: Kamala,
    },
    {
      id: 4,
      statement:
        "Everything Middleman is an agile consulting ormative outcomes for our clients",
      name: "Kamala HArrris",
      title: "FIrst Vice President ",
      pic: Kamala,
    },
  ]);

  const handleClick = (index) => {
    setdots(
      dots.map((dots) => {
        if (dots.id === index) {
          dots.color = true;
        } else {
          dots.color = false;
        }
        return dots;
      })
    );
    setStep(index);
  };
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-header mb-bg">
          <div className="container">
            <div className="home-header-container">
              <div className="home-header-content">
                <TextHeader>Creating incredible growth experiences</TextHeader>
                <Text color="sm-text-white" extraStyle="mt-xsm mb-sm">
                  We bring the results while helping you achieve cost and time
                  savings wityhout taking on rish or management overhead
                </Text>
                <LinkButton color="button-white">
                  Learn more <span className="button-span">&rarr;</span>
                </LinkButton>
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
                <div className="home-main-partners-list-1">
                  <img
                    src={Behance}
                    alt="behance"
                    className="home-main-partners-img"
                  />
                </div>
                <div className="home-main-partners-list-2">
                  {" "}
                  <img
                    src={Android}
                    alt="behance"
                    className="home-main-partners-img"
                  />
                </div>
                <div className="home-main-partners-list-3">
                  {" "}
                  <img
                    src={Brandfold}
                    alt="behance"
                    className="home-main-partners-img"
                  />
                </div>
                <div className="home-main-partners-list-4">
                  {" "}
                  <img
                    src={Behance}
                    alt="behance"
                    className="home-main-partners-img"
                  />
                </div>
                <div className="home-main-partners-list-5">
                  {" "}
                  <img
                    src={Android}
                    alt="behance"
                    className="home-main-partners-img"
                  />
                </div>
                <div className="home-main-partners-list-6">
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
                  <Subtitle size="subtitle-big" extraStyle="mb-xsm ">
                    Unveil Your Business Potential
                  </Subtitle>
                  <Text color="sm-text-light mb-sm home-main-about-text">
                    Everything Middleman is an agile consulting company that
                    focuses on creating successful growth experiences for small,
                    medium and large companies across Africa. Through
                    creativity, innovation and excellence, we will deliver
                    transformative outcomes for our clients
                  </Text>
                  <LinkButton
                    color="button-purple"
                    extraStyle="home-main-about-button"
                  >
                    Learn more <span className="button-span">&rarr;</span>
                  </LinkButton>
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
                  <Title extraStyle="mb-sm home-main-customer-title">
                    CUSTOMER STATEMENT
                  </Title>
                  <Subtitle
                    size="subtitle-big"
                    extraStyle="mb-sm home-main-customer-subtitle"
                  >
                    We’ve Worked with them, We Trust Each Other
                  </Subtitle>
                </div>
                <div className="home-main-customer-carousel">
                  <div className="home-main-customer-box">
                    {customer
                      .filter((key) => key.id === step)
                      .map((item) => (
                        <div
                          className="home-main-customer-carousel-container animate__animated animate__fadeInRight animate__slower"
                          key={item.id}
                        >
                          <div className="home-main-customer-carousel-content">
                            <Text
                              color="sm-text-dark"
                              extraStyle="mb-sm home-main-customer-title"
                            >
                              {item.statement}
                            </Text>
                            <Text color="sm-text-dark">{item.name}</Text>
                            <Text color="sm-text-light mb-sm home-main-customer-position">
                              {item.title}
                            </Text>
                          </div>
                          <div className="home-main-customer-carousel-imagebox">
                            <img
                              src={item.pic}
                              alt="kamala"
                              className="home-main-customer-carousel-img"
                            />
                            <div className="home-main-customer-carousel-quotes">
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
                      ))}
                  </div>
                </div>
                <div className="home-main-customer-dots">
                  {dots.map((dot) => (
                    <span
                      key={dot.id}
                      role="button"
                      className={[
                        "home-main-customer-dot",
                        dot.color ? "active" : "inactive",
                      ].join(" ")}
                      onClick={() => handleClick(dot.id)}
                    ></span>
                  ))}
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
