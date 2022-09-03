import Header from "./components/Header/header";
import Tour from "./components/Tour/tour";
import Benefits from "./components/Benefits/Benefits";
import Footer from "./components/footer/Footer";
import Proposal from "./components/Proposal/Proposal";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Tour />
      <Benefits />
      <Proposal />
      <Footer />
    </div>
  );
}

export default App;
