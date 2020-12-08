import Button from "./button";
import Subtitle from "./subtitle";

const Book = () => {
  return (
    <div className="book mb-md">
      <div className="container">
        <div className="book-container">
          <Subtitle size="subtitle-xbig" extraStyle="book-subtitle">
            Ready to Make Your Moment Memorable ?
          </Subtitle>
          <div className="book-buttons">
            <Button color="button-purple mr-sm book-button">Book Now</Button>
            <Button color="button-white book-button">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
