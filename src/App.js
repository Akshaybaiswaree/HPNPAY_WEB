import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import { Route, Routes } from 'react-router-dom';
import Corporate from './components/Corporate';
import Solution from './components/Solution';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Product from './components/Product';
import DistributorBanner from './components/distributorsProgram/DistributorBanner';
import Login from './components/Login';
import { useState } from 'react';
import TermsAndConditions from './components/policys/TermsAndConditions';
import RefunAndRecanselation from './components/policys/RefunAndRecanselation';
import PrivacyPolicy from './components/policys/PrivacyPolicy';

function App(props) {

  const [auth, setAuth] = useState(false);

  const loginhandle = () => {
    setAuth(!false);
  }

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


  return (
    <>
      {
        auth == true ? (
          <>
            <Routes>
              <Route path="/login" element={< Login />} logedin={loginhandle} />
            </Routes>
          </>

        ) : (
          <>
            <Navbar login={loginhandle} />
            <Routes>

              <Route path="/" element={<Banner />} />
              <Route path="/corporate" element={<Corporate />} />
              <Route path="/products" element={<Product />} />
              <Route path="/solution" element={<Solution />} />
              <Route path="/distributors" element={<DistributorBanner />} />
              <Route path="/media" element={<Banner />} />
              <Route path="/aboutus" element={<AboutUs />} />
              {/* <Route path="/knowmore" element={< />} /> */}
              <Route path="/contactus" element={< ContactUs />} />
              <Route path="/privacypolicy" element={< PrivacyPolicy />} />
              <Route path="/refun&cancelationplicy" element={< RefunAndRecanselation />} />
              <Route path="/term&condition" element={< TermsAndConditions />} />

            </Routes>
            <Footer />
          </>
        )
      }

    </>
  );
}

export default App;
