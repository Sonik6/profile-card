import { Banner } from "./components/Banner";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Banner />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
