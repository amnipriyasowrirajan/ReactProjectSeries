import "./App.css";
import Accordion from "./components/accordian";
import ImageSlider from "./components/image-slider";
import RandomColor from "./components/randomColors";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion /> */}
      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* StarRating */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image Slider Component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
