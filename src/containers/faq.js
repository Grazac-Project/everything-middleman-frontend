import Text from "../components/text";
import TextHeader from "../components/textHeader";
import Mask from "../assets/Mask.png";
import Subtitle from "../components/subtitle";
import Title from "../components/title";
import { useEffect, useState } from "react";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: " How do I pay for the Essentials or Premium plan?",
      answer:
        " You can pay with a credit card or via net banking (if you’re in United States). We will renew your subcscipti automaticall at the end of every billling cycle.",
      open: true,
    },
    {
      id: 2,
      question: " How do I pay for the Essentials or Premium plan?",
      answer:
        " You can pay with a credit card or via net banking (if you’re in United States). We will renew your subcscipti automaticall at the end of every billling cycle.",
      open: false,
    },
    {
      id: 3,
      question: " How do I pay for the Essentials or Premium plan?",
      answer:
        " You can pay with a credit card or via net banking (if you’re in United States). We will renew your subcscipti automaticall at the end of every billling cycle.",
      open: false,
    },
    {
      id: 4,
      question: " How do I pay for the Essentials or Premium plan?",
      answer:
        " You can pay with a credit card or via net banking (if you’re in United States). We will renew your subcscipti automaticall at the end of every billling cycle.",
      open: false,
    },
    {
      id: 5,
      question: " How do I pay for the Essentials or Premium plan?",
      answer:
        " You can pay with a credit card or via net banking (if you’re in United States). We will renew your subcscipti automaticall at the end of every billling cycle.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq) => {
        if (faq.id === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="backgroundColor">
          <div className="mb-sm">
            <TextHeader>We are here to help you</TextHeader>
          </div>
          <div className="Faq-header-container">
            <img src={Mask} className="Faq-header-mask" alt="mask" />
            <input
              type="text"
              placeholder="Ask a quesiton"
              className="Faq-header-input"
            />
            <button type="submit" className="Faq-header-button">
              Search
            </button>
          </div>
          <Text color="sm-text-white contact-header-text">
            *We are collecting your search keywords to improve out FAQ
          </Text>
        </div>
        <div className="Faq-main mt-bg">
          <section className="Faq-main-category">
            <div className="container">
              <div>
                <Subtitle extraStyle="Faq-main-category-subtitle ">
                  Or choose a category to quickly find the help you need
                </Subtitle>
                <div className="Faq-main-category-plans mt-md">
                  <div className="Faq-main-category-plan">
                    <div className="Faq-main-category-box mb-sm"></div>
                    <Subtitle extraStyle="mb-sm">Getting Started</Subtitle>
                    <Text extraStyle="Faq-main-category-text">
                      All you need from A to Z getting started are available
                    </Text>
                  </div>
                  <div className="Faq-main-category-plan">
                    <div className="Faq-main-category-box mb-sm"></div>
                    <Subtitle extraStyle="mb-sm">Pricing Plans</Subtitle>
                    <Text extraStyle="Faq-main-category-text">
                      All you need from A to Z getting started are available
                    </Text>
                  </div>
                  <div className="Faq-main-category-plan">
                    <div className="Faq-main-category-box mb-sm"></div>
                    <Subtitle extraStyle="mb-sm">Sales Questions</Subtitle>
                    <Text extraStyle="Faq-main-category-text">
                      All you need from A to Z getting started are available
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="Faq-main-faq mt-bg">
            <div className="Faq-main-faq-container">
              <Title extraStyle="mb-xsm">FAQ</Title>
              <Subtitle size="subtitle-big" extraStyle="mb-xsm ta">
                Frequently Asked Questions
              </Subtitle>
              <Text extraStyle="mb-xsm ta" color="sm-text-light">
                We bring the results while helping you achieve cost and time
                savings wityhout taking on rish or management overhead
              </Text>
              <div className="Faq-main-faq-box mt-md">
                {faqs.map((quest) => (
                  <div className="Faq-main-faq-box-container" key={quest.id}>
                    <div className="Faq-main-faq-question">
                      <Subtitle>{quest.question}</Subtitle>
                      {quest.open ? (
                        <p
                          className="Faq-main-faq-toggle"
                          onClick={() => {
                            toggleFAQ(quest.id);
                          }}
                        >
                          -
                        </p>
                      ) : (
                        <p
                          className="Faq-main-faq-toggle"
                          onClick={() => {
                            toggleFAQ(quest.id);
                          }}
                        >
                          +
                        </p>
                      )}
                    </div>
                    <div
                      className={[
                        "Faq-main-faq-answer",
                        quest.open ? "show" : "",
                      ].join(" ")}
                    >
                      <Text color="sm-text-light">{quest.answer}</Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="Faq-main-question mt-bg">
            <div className="container">
              <div className="Faq-main-question-container">
                <Subtitle size="subtitle-big" extraStyle="ta">
                  Still have a question?
                </Subtitle>
                <Text color="sm-text-light" extraStyle="ta">
                  We bring the results while helping you achieve cost and time
                  savings wityhout taking on rish or management overhead
                </Text>
                <div className="Faq-main-question-helplines mt-bg">
                  <div className="Faq-main-question-helpline">
                    <div className="Faq-main-question-img mb-sm"></div>
                    <Title>+1 (646) 786 - 5060</Title>
                    <Text color="sm-text-light" extraStyle="ta mt-xsm">
                      We are always happy to help
                    </Text>
                  </div>
                  <div className="Faq-main-question-helpline">
                    <div className="Faq-main-question-img mb-sm"></div>
                    <Title extraStyle="h">support@helpcenter.com</Title>
                    <Text color="sm-text-light" extraStyle="ta mt-xsm">
                      Alternative way to get answer faster
                    </Text>
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

export default Faq;
