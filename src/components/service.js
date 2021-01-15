import LinkButton from "./link";
import Subtitle from "./subtitle";
import Text from "./text";

const Service = (props) => {
  return (
    <div className="service">
      <div className="service-container ma">
        <div className="service-box" style={{ backgroundColor: props.color }}>
          <img src={props.src} alt="img" className="service-img" />
        </div>
        <div className="service-content mt-sm">
          <div className="mb-xsm">
            <Subtitle size={"subtitle-small"}>{props.title}</Subtitle>
          </div>
          <div className="mb-sm">
            <Text color="sm-text-light">{props.text}</Text>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Service;
