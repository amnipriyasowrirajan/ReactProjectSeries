import "./App.css";
import Accordion from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/randomColors";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

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
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load more products components */}
      {/* <LoadMoreData /> */}

      {/* Tree view Component / Menu UI component/ Recusive navigation menu*/}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
