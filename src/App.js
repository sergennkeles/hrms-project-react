import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import SegmentExampleHorizontalSegments from "./layouts/Segment";
import { Container } from "semantic-ui-react";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <Container>
        <Header />
        <SegmentExampleHorizontalSegments />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
