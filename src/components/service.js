// @ts-nocheck
import { useState } from "react";
import Subtitle from "./subtitle";
import Text from "./text";

const Service = (props) => {
  const [show, setShow] = useState(false);

  const showRest = () => {
    setShow(!show);
  };

  return (
    <div className="service" onClick={showRest}>
      <div className="service-container ma">
        <div className="service-box" style={{ backgroundColor: props.color }}>
          <img
            src={props.src}
            alt="img"
            className="service-img"
            style={{ filter: `opacity(.5) drop-shadow(0 0 0 ${props.color})` }}
            // style={{backgroundColor:props.color}}
          />
        </div>
        <div className="service-content mt-sm">
          <div className="mb-xsm service-subtitle">
            <Subtitle size={"subtitle-small"}>{props.title}</Subtitle>
          </div>
          <div className="mb-sm">
            <Text color="sm-text-light">
              <span>{props.first}</span>
              <span
                onClick={() => setShow(true)}
                className={[
                  "subtitle  subtitle-smaller service-read",
                  show ? "hide" : "",
                ].join(" ")}
              >
                ...Read More
              </span>
              <span className={show ? "hide2" : "service-less"}>
                {props.more}
              </span>
              <span
                onClick={() => setShow(false)}
                className={[
                  "subtitle  subtitle-smaller service-read ",
                  show ? "" : "hide",
                ].join(" ")}
              >
                Read less
              </span>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
