// @ts-nocheck
import { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { Button } from "../components/button";
import Input from "../components/input";
import Subtitle from "../components/subtitle";
import Text from "../components/text";
import TextHeader from "../components/textHeader";
import Title from "../components/title";
import { email, fullname, number, required } from "../helpers/validation";
import Countries from "../constants/countries";
import axios from "axios";
import { Helmet } from "react-helmet";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: {
      elementType: "input",
      label: "Your Name*",
      elementConfig: {
        type: "text",
        placeholder: "John Doe",
      },
      validations: [fullname],
      isValid: false,
      touched: false,
      value: "",
      blur: false,

      errorMessage: "",
    },

    email: {
      elementType: "input",
      label: "Email Address*",
      elementConfig: {
        type: "email",
        placeholder: "johndoe@example.com",
      },
      validations: [email],
      value: "",
      isValid: false,
      touched: false,
      blur: false,
      errorMessage: "",
    },

    company: {
      elementType: "input",
      label: "Company Name*",
      elementConfig: {
        type: "text",
        placeholder: "Company's name",
      },
      validations: [required],
      isValid: false,
      value: "",
      touched: false,
      blur: false,

      errorMessage: "",
    },
    phone: {
      elementType: "input",
      label: "Your Phone Number",
      elementConfig: {
        type: "text",
        placeholder: "Phone Number",
      },
      validations: [number],
      isValid: false,
      value: "",
      touched: false,
      blur: false,
    },
    country: {
      elementType: "select",
      label: "Country",
      elementConfig: {
        options: Countries,
      },
      validations: [required],
      isValid: false,
      value: "",
      touched: false,
      blur: false,
    },
    message: {
      elementType: "textarea",
      label: "Your Message*",
      elementConfig: {
        type: "text",
        placeholder: "Lets hear you out",
      },
      value: "",
      isValid: false,
      touched: false,
      validations: [required],
      errorMessage: "",
    },
  });
  const [formValid, setFormValid] = useState(false);
  const [clicked, setClicked] = useState(false);

  const inputChangeHandler = (event, inputIdentifier) => {
    let isValid = true;
    for (let validation of contactForm[inputIdentifier].validations) {
      isValid = validation(event.target.value) && isValid;
    }
    const updatedFormElement = {
      ...contactForm[inputIdentifier],
      value: event.target.value,
      isValid: isValid,
    };
    const updatedContactForm = {
      ...contactForm,
      [inputIdentifier]: updatedFormElement,
    };

    let formIsValid = true;
    for (let inputIdentifier in updatedContactForm) {
      formIsValid = updatedContactForm[inputIdentifier].isValid && formIsValid;
    }
    setFormValid(formIsValid);
    setContactForm(updatedContactForm);
  };

  const handleBlur = (elementID) => {
    const updatedFormElement = {
      ...contactForm[elementID],
      blur: true,
    };

    const updatedForm = {
      ...contactForm,
      [elementID]: updatedFormElement,
    };
    setContactForm(updatedForm);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setClicked(true);
    console.log(formValid);
    console.log(clicked);
    const contact = {};
    for (let key in contactForm) {
      contact[key] = contactForm[key].value;
    }
    console.log(contact);
    if (!formValid) {
      event.preventDefault();
    } else {
      setLoading(true);
      axios
        .post("https://everythingmiddleman.com/contact/create", contact)
        .then((result) => {
          setLoading(false);
          setMessage(result.data.msg);
          console.log(result.data);
          setContactForm({
            name: {
              elementType: "input",
              label: "Your Name*",
              elementConfig: {
                type: "text",
                placeholder: "John Doe",
              },
              validations: [fullname],
              isValid: false,
              touched: false,
              value: "",
              blur: false,

              errorMessage: "",
            },

            email: {
              elementType: "input",
              label: "Email Address*",
              elementConfig: {
                type: "email",
                placeholder: "johndoe@example.com",
              },
              validations: [email],
              value: "",
              isValid: false,
              touched: false,
              blur: false,
              errorMessage: "",
            },

            company: {
              elementType: "input",
              label: "Company Name*",
              elementConfig: {
                type: "text",
                placeholder: "Company's name",
              },
              validations: [required],
              isValid: false,
              value: "",
              touched: false,
              blur: false,

              errorMessage: "",
            },
            phone: {
              elementType: "input",
              label: "Your Phone Number",
              elementConfig: {
                type: "text",
                placeholder: "Phone Number",
              },
              validations: [number],
              isValid: false,
              value: "",
              touched: false,
              blur: false,
            },
            country: {
              elementType: "select",
              label: "Country",
              elementConfig: {
                options: Countries,
              },
              validations: [required],
              isValid: false,
              value: "",
              touched: false,
              blur: false,
            },
            message: {
              elementType: "textarea",
              label: "Your Message*",
              elementConfig: {
                type: "text",
                placeholder: "Lets hear you out",
              },
              value: "",
              isValid: false,
              touched: false,
              validations: [required],
              errorMessage: "",
            },
          });
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setMessage(error.data.message);
        });
    }
  };

  let formArray = [];
  for (let key in contactForm) {
    formArray.push({
      id: key,
      config: contactForm[key],
    });
  }
  let form = formArray.map((form) => (
    <Input
      key={form.id}
      config={form.config.elementConfig}
      onchange={(event) => inputChangeHandler(event, form.id)}
      value={form.config.value}
      elementType={form.config.elementType}
      isValid={form.config.isValid}
      touched={form.config.touched}
      message={form.config.errorMessage}
      blur={form.config.blur}
      onblur={() => handleBlur(form.id)}
      formIsValid={formValid}
      clicked={clicked}
      label={form.config.label}
    />
  ));

  return (
    <div className="contact">
      <Helmet>
        <title>Contact - Everything Middleman</title>
        <meta name="description" content="Contact us" />
        <meta name="theme-color" content="#4b004b" />
        <meta property="og:description" content="Contact us"></meta>
        <meta property="og:title" content="Everything Middleman"></meta>
        <meta name="twitter:title" content="Everything Middleman"></meta>
        <meta
          property="og:url"
          content="https://www.everythingmiddleman.com/contact"
        />
      </Helmet>
      <div className="contact-container">
        <div className="backgroundColor">
          <div className="container">
            <div className="mb-sm">
              <TextHeader>Contact Us</TextHeader>
            </div>
            <Text color="sm-text-white contact-header-text">
              Creating incredible growth experiences
            </Text>
          </div>
        </div>
        <div className="contact-main">
          <section className="contact-main-form">
            <form className="form">
              <Subtitle extraStyle="mb-sm ta">{message || ""}</Subtitle>
              <div className="form-container">{form}</div>
              <Text color="sm-text-light mb-sm">
                By submitting this form you agree to our Terms and Conditions
                and out Privacy Policy which explains how we may collecct, use
                and disclose your personal information including to third
                parties.
              </Text>
              {!loading ? (
                <Button color="button-purple" onclick={handleClick}>
                  Contact Sales
                </Button>
              ) : (
                <Button
                  color="button-purple"
                  onclick={handleClick}
                  disabled={true}
                >
                  Submitting...
                </Button>
              )}
            </form>
          </section>
          <section className="contact-main-support mt-sm">
            <div className="container">
              <div className="contact-main-support-container ">
                <div className="contact-main-support-box">
                  <div className="contact-main-support-box-img">
                    <AiOutlineMail size="32px" color="#ffffff" />
                  </div>
                  <Subtitle extraStyle="mb-sm">Email Us</Subtitle>
                  <Text color="sm-text-light mb-sm">
                    Check out helpful resources, FAQs and developer tools.
                  </Text>
                  <a
                    href="mailto:hello@everythingmiddleman.com"
                    className="title h"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    consult@everythingmiddleman.com
                  </a>
                </div>
                <div className="contact-main-support-box">
                  <div className="contact-main-support-box-img">
                    <AiOutlinePhone size="32px" color="#ffffff" />
                  </div>
                  <Subtitle extraStyle="mb-sm">Call Us</Subtitle>
                  <Text color="sm-text-light mb-sm">
                    Check out helpful resources, FAQs and developer tools.
                  </Text>
                  <Title>+234 913 263 3784</Title>
                </div>
                <div className="contact-main-support-box">
                  <div className="contact-main-support-box-img">
                    <RiQuestionAnswerLine size="32px" color="#ffffff" />
                  </div>
                  <Subtitle extraStyle="mb-sm">Address </Subtitle>
                  <Text color="sm-text-light mb-sm">Lekki, Lagos Nigeria</Text>
                  <Title>+234 913 263 3784</Title>
                  {/* <Button
                    color="button-purple"
                    extraStyle="contact-main-support-button"
                  >
                    Support Center
                  </Button> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
