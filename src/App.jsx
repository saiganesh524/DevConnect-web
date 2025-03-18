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
import Pages from "./components/Pages";
import Chat from "./components/Chat";

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
              <Route path="/chat/:targetUserId" element={<Chat />} />
            </Route>
            <Route path="/pages" element={<Pages />}>
              <Route path="terms-and-conditions" element={<TermsAndCons />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route
                path="cancellation-and-refunds"
                element={<CancellationAndRefunds />}
              />
              <Route
                path="shipping-and-delivery"
                element={<ShippingAndDelivery />}
              />
              <Route path="contact-us" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
