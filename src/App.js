import "./App.css";
import Accordion from "./components/accordian";
import TabTest from "./components/custom-tabs/tab-test";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/randomColors";
import ScrollIndicator from "./components/scroll-indicator";
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
      {/* <TreeView menus={menus} /> */}
      {/* QR CodeGenerator */}
      {/* <QRCodeGenerator /> */}

      {/* Light Dark Theme Switch  */}
      {/* <LightDarkMode /> */}

      {/* ScrollIndicator Component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* Customs tabs Component */}
      <TabTest />
    </div>
  );
}

export default App;
