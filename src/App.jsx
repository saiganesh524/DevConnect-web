import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import TermsAndCons from "./components/TermsAndCons";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CancellationAndRefunds from "./components/CancellationAndRefunds";
import ShippingAndDelivery from "./components/ShippingAndDelivery";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/termsandconds" element={<TermsAndCons />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/cancel" element={<CancellationAndRefunds />} />
              <Route path="/shipping" element={<ShippingAndDelivery />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
