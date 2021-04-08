// @ts-nocheck
import { useEffect, useState } from "react";
import { LinkButton, WhatsApp } from "../components/button";
import Text from "../components/text";
import TextHeader from "../components/textHeader";
import LandingSvg from "../assets/landing-svg.png";
import Scott from "../assets/scott.jpg";
import Grazac from "../assets/grazac.png";
import Title from "../components/title";
import Subtitle from "../components/subtitle";
import services from "../constants/services";
import Service from "../components/service";
// import Quote from "../assets/quote.png";/
import client1 from "../assets/okayafrica.svg";
import client2 from "../assets/OLUWALOGBON.svg";
import client3 from "../assets/Yabaleft.svg";
import client4 from "../assets/PettySave.svg";
import client5 from "../assets/PulseNg.svg";
import zeek from "../assets/ZEEK.svg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [step, setStep] = useState(1);
  const [headerStep, setHeaderStep] = useState(1);
  const [dots] = useState([
    { id: 1, color: true },
    { id: 2, color: false },
  ]);
  const [header] = useState([
    {
      id: 1,
      title: "Creating incredible growth experiences",
      text:
        "We bring the results while helping you achieve cost and time savings without taking on rish or management overhead",
    },
    {
      id: 2,
      title: "Building a house is an interesting process",
      text:
        "Building a skyscraper that will survive the test of time is a challenge. Frames and structures must come first, before walls and finishing.",
    },
    {
      id: 3,
      title: "Growing your company",
      text:
        "To grow your company, brand or enterprise, you need to approach it from a house owners perspective.",
    },
    {
      id: 4,
      title: "At Everything MiddleMan",
      text:
        " it is our mission to help you build grow house (company) in the most exciting and memorable ways.",
    },
  ]);

  const [customer] = useState([
    {
      id: 1,
      statement:
        "Working with Everything Middleman on different projects has been an awesome experience. We can attest to their utmost performance. It's always a joy working with them because of the ease and professionalism they bring into the work.",
      title: "GRAZAC ",
      pic: Grazac,
    },
    {
      id: 2,
      statement:
        "The service I got from EM Consults was very satisfactory and top-notch! I love the fact that their style of operation is nonconventional. I would recommend her to any person/brand that wants to grow. Thank you.",
      title: "Zeek Financials",
      pic: zeek,
    },
  ]);

  useEffect(() => {
    handleTimeout(step);
  }, [step]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setTimeout(() => {
      if (headerStep === 2) setHeaderStep(1);
      else {
        setHeaderStep(headerStep + 1);
      }
    }, 10000);
  }, [headerStep]);

  const handleTimeout = (index) => {
    setStep(index);
    setTimeout(() => {
      if (step < 2) setStep(step + 1);
      else {
        setStep(1);
      }
    }, 6000);
  };

  const handleClick = (index) => {
    handleTimeout(index);
    setStep((prev) => {
      return (prev = index);
    }, 1000);
  };

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-header mb-bg">
          <div className="container">
            <div className="home-header-container">
              <div className="home-header-content">
                {header
                  .filter((head) => head.id === headerStep)
                  .map((head) => (
                    <div
                      className="animate__animated animate__fadeInLeft animate__slower home-header-carousel"
                      key={head.id}
                    >
                      <TextHeader>{head.title}</TextHeader>
                      <Text color="sm-text-white" extraStyle="mt-xsm mb-sm">
                        {head.text}
                      </Text>
                    </div>
                  ))}
                <WhatsApp color="button-white mr-sm book-button">
                  <span>Talk to us Now</span>{" "}
                  <span className="button-span">&rarr;</span>
                </WhatsApp>
              </div>
              <div className="home-header-svg">
                <img src={LandingSvg} alt="svg" className="home-header-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="home-main">
          <section className="home-main-about mt-bg mb-bg">
            <div className="container">
              <div className="home-main-about-container">
                <div className="home-main-about-box mr-sm">
                  <img
                    src={Scott}
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
                    <span>Learn more</span>
                    <span className="button-span">&rarr;</span>
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
                    We are a team of young professionals who can help you
                    translate your ideas into a sustainable project which will
                    solve proposed problem and also fit your unique structure
                    and culture.
                  </Text>
                </div>
                <div className="home-main-services-list mt-md">
                  {services.map((serv) => {
                    const first = serv.text.substring(0, 170);
                    const more = serv.text.substring(170);
                    return (
                      <Service
                        src={serv.image}
                        title={serv.title}
                        text={serv.text}
                        key={serv.id}
                        color={serv.color}
                        first={first}
                        more={more}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
          <section className="home-main-partners mb-bg mt-bg">
            <div className="container">
              <h3 class="subtitle mb-sm home-main-customer-subtitle subtitle-big">
                Brands we have partnered with
              </h3>
              <div className="home-main-partners-container">
                <div className="home-main-partners-list-2 home-main-partners-list">
                  {" "}
                  <img
                    src={client2}
                    alt="behance"
                    className="home-main-partners-img"
                  />
                </div>
                <div className="home-main-partners-list-3 home-main-partners-list">
                  {" "}
                  <img
                    src={client3}
                    alt="behance"
                    className="home-main-partners-img"
                  />
                </div>
                <div className="home-main-partners-list-1 home-main-partners-list">
                  <img
                    src={client1}
                    alt="behance"
                    className="home-main-partners-img"
                  />
                </div>
                <div className="home-main-partners-list-4 home-main-partners-list">
                  {" "}
                  <img
                    src={client4}
                    alt="behance"
                    className="home-main-partners-img"
                  />
                </div>
                <div className="home-main-partners-list-5 home-main-partners-list">
                  {" "}
                  <img
                    src={client5}
                    alt="behance"
                    className="home-main-partners-img"
                  />
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
                            {/* <Text color="sm-text-dark">{item.name}</Text> */}
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
                            {/* <div className="home-main-customer-carousel-quotes">
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
                            </div> */}
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
                        dot.id === step ? "active" : "inactive",
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
