import { useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import Subtitle from "../components/subtitle";
import Text from "../components/text";
import TextHeader from "../components/textHeader";
import Title from "../components/title";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    fullName: {
      elementType: "input",
      label: "Your Name*",
      elementConfig: {
        type: "text",
        placeholder: "John Doe",
      },
      //   validations: [fullname],
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
      //   validations: [email],
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
        type: "password",
        placeholder: "Password",
      },
      //   validations: [required, password],
      isValid: false,
      value: "",
      touched: false,
      blur: false,

      errorMessage: "",
    },
    country: {
      elementType: "select",
      label: "Country*",
      elementConfig: {
        options: [
          { value: "Nigeria", displayValue: "Nigeria" },
          { value: "Togo", displayValue: "Togo" },
          { value: "Mali", displayValue: "Mali" },
          { value: "Cotonou", displayValue: "Cotonou" },
          { value: "Ghana", displayValue: "Ghana" },
          { value: "Malawi", displayValue: "Maawi" },
        ],
      },
      //   validators: [required],
      value: "",
      isValid: true,
    },
    message: {
      elementType: "textarea",
      label: "Your Message*",
      elementConfig: {
        type: "text",
        // placeholder: "Lets hear you out",
      },
      value: "",
      isValid: false,
      touched: false,
      //   validations: [checkLength],
      errorMessage: "",
    },
  });

  const inputChangeHandler = (event, inputIdentifier) => {
    const updatedFormElement = {
      ...contactForm[inputIdentifier],
      value: event.target.value,
    };
    const updatedContactForm = {
      ...contactForm,
      [inputIdentifier]: updatedFormElement,
    };

    setContactForm(updatedContactForm);
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
      //   formIsValid={formValid}
      //   clicked={clicked}
      label={form.config.label}
      //   elementStyle={classes.inputStyle}
      //   inputStyle={classes.inputStyle}
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
              savings wityhout taking on rish or management overhead
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
