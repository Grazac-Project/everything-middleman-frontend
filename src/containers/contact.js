import { useState } from "react";
import { Button } from "../components/button";
import Input from "../components/input";
import Subtitle from "../components/subtitle";
import Text from "../components/text";
import TextHeader from "../components/textHeader";
import Title from "../components/title";
import { email, fullname, number, required } from "../helpers/validation";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    fullName: {
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
    number: {
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

      errorMessage: "",
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
      //   formIsValid={formValid}
      //   clicked={clicked}
      label={form.config.label}
    />
  ));

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="backgroundColor">
          <div className="container">
            <div className="mb-sm">
              <TextHeader>Contact Us</TextHeader>
            </div>
            <Text color="sm-text-white contact-header-text">
              We bring the results while helping you achieve cost and time
              savings without taking on risk or management overhead
            </Text>
          </div>
        </div>
        <div className="contact-main">
          <section className="contact-main-form">
            <form className="form">
              <div className="form-container">{form}</div>
              <Text color="sm-text-light mb-sm">
                By submitting this form you agree to our Terms and Conditions
                and out Privacy Policy which explains how we may collecct, use
                and disclose your personal information including to third
                parties.
              </Text>
              <Button color="button-purple">Contact Sales</Button>
            </form>
          </section>
          <section className="contact-main-support mt-bg">
            <div className="container">
              <div className="contact-main-support-container ">
                <div className="contact-main-support-box">
                  <div className="contact-main-support-box-img"></div>
                  <Subtitle extraStyle="mb-sm">Email Us</Subtitle>
                  <Text color="sm-text-light mb-sm">
                    Check out helpful resources, FAQs and developer tools.
                  </Text>
                  <Title>hello@helpcenter.com</Title>
                </div>
                <div className="contact-main-support-box">
                  <div className="contact-main-support-box-img"></div>
                  <Subtitle extraStyle="mb-sm">Call Us</Subtitle>
                  <Text color="sm-text-light mb-sm">
                    Check out helpful resources, FAQs and developer tools.
                  </Text>
                  <Title>+1 (646) 786 - 5060</Title>
                </div>
                <div className="contact-main-support-box">
                  <div className="contact-main-support-box-img"></div>
                  <Subtitle extraStyle="mb-sm">Support </Subtitle>
                  <Text color="sm-text-light mb-sm">
                    Check out helpful resources, FAQs and developer tools.
                  </Text>
                  <Button
                    color="button-purple"
                    extraStyle="contact-main-support-button"
                  >
                    Support Center
                  </Button>
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
