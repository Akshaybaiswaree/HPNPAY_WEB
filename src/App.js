import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import { Route, Routes, Link, useParams } from 'react-router-dom';
import Corporate from './components/Corporate';
// import Solution from './components/Solution';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Product from './components/Product';
import DistributorBanner from './components/distributorsProgram/DistributorBanner';
import Login from './components/Login';
import { useState } from 'react';
import TermsAndConditions from './components/policys/TermsAndConditions';
import RefunAndRecanselation from './components/policys/RefunAndRecanselation';
import PrivacyPolicy from './components/policys/PrivacyPolicy';
import IncomeCalculator from './components/IncomeCalculator';
import DistributorIncomeCalculator from './components/DistributorIncomeCalculator';
import BankingService from './components/readmorepages/BankingService';
import DigitalSuite from './components/readmorepages/DigitalSuite';
import CustomerKhata from './components/readmorepages/CustomerKhata';
import UpiQr from './components/readmorepages/UpiQr';
import DigitalCashcullection from './components/readmorepages/DigitalCashcullection';
import IncreaseMarket from './components/readmorepages/IncreaseMarket';
import DigitalOrder from './components/readmorepages/DigitalOrder';
import WhoWeAre from './components/readmorepages/WhoWeAre';
import AnandGandhi from './components/ourteampages/AnandGandhi';
import SwetaGandhi from './components/ourteampages/SwetaGandhi';
import AdvicorOne from './components/ourteampages/AdvicorOne';
import AdvicorTwo from './components/ourteampages/AdvicorTwo';
import AdvicorThree from './components/ourteampages/AdvicorThree';
import AdvicorFour from './components/ourteampages/AdvicorFour';
import Blogs from './components/knowMore/blogs/Blogs';
import KnowMore from './components/knowMore/KnowMore';
import Blog1 from './components/blogs/Blog1';
import Blog2 from './components/blogs/Blog2';
import Blog3 from './components/blogs/Blog3';
import Blog4 from './components/blogs/Blog4';
import Blog5 from './components/blogs/Blog5';
import Blog6 from './components/blogs/Blog6';
import Blog7 from './components/blogs/Blog7';
import DigitalPayments from './components/blogs/DigitalPayments';
import EconomicLandscape from './components/blogs/EconomicLandscape';
import DigitalWave from './components/blogs/DigitalWave';
import Media from './components/media/Media';
import InfrastructureBusiness from './components/readmorepages/InfrastructureBusiness';
import Solutions from './components/readmorepages/Solutions';
import Faq from './components/knowMore/Faq';
import Jobs from './components/knowMore/Jobs';
import MarketResearch from './components/marketResearch/MarketResearch';
import Features from './components/features/Features';
import Events from './components/knowMore/Events';
import HpnClub from './components/knowMore/blogs/HpnClub';
import OurPartners from './components/OurPartners';

//breadcrumbs

// function Breadcrumbs() {
//   const { breadcrumb1, breadcrumb2 } = useParams();
//   console.log(breadcrumb1);
//   return (
//     <div>
//       <Link to="/">Home</Link>
//       {breadcrumb1 && <span> / <Link to={`/${breadcrumb1}`}>{breadcrumb1}</Link></span>}
//       {breadcrumb2 && <span> / {breadcrumb2}</span>}
//     </div>
//   );
// }

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
        auth === true ? (
          <>
            <Routes>
              <Route path="/login" element={< Login />} logedin={loginhandle} />
            </Routes>
          </>

        ) : (
          <>
            <Navbar login={loginhandle} />
            {/* <Breadcrumbs /> */}
            <Routes>

              <Route path="/" element={<Banner />} />
              <Route path="/corporate" element={<Corporate />} />
              <Route path="/products" element={<Product />} />
              {/* <Route path="/solution" element={<Solution />} /> */}
              <Route path="/marketResearch" element={<MarketResearch/>}/>
              <Route path="/features" element={<Features/>}/>
              <Route path="/distributors" element={<DistributorBanner />} />
              <Route path="/media" element={<Media/>}/>
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contactus" element={< ContactUs />} />
              <Route path="/privacypolicy" element={< PrivacyPolicy />} />
              <Route path="/refun&cancelationplicy" element={< RefunAndRecanselation />} />
              <Route path="/term&condition" element={< TermsAndConditions />} />
              <Route path="/income-calculator" element={<IncomeCalculator />} />
              <Route path="/distributor-income-calculator" element={<DistributorIncomeCalculator />} />

              {/* read More pages */}
              <Route path="/bankingservices" element={<BankingService />} />
              <Route path="/digitalsuite" element={<DigitalSuite />} />
              <Route path="/customkhata" element={<CustomerKhata />} />
              <Route path="/upi" element={<UpiQr />} />
              <Route path="/digitalcashcollection" element={<DigitalCashcullection />} />
              <Route path="/increasemarket" element={<IncreaseMarket />} />
              <Route path="/digitalorder" element={<DigitalOrder />} />
              <Route path="/moreaboutus" element={<WhoWeAre />} />
              <Route path="/infrastructure" element={<InfrastructureBusiness />} />
              <Route path="/solutions" element={<Solutions/>} />

              {/* our team pages */}
              <Route path="/founder&ceo" element={<AnandGandhi />} />
              <Route path="/ms.gandhi" element={<SwetaGandhi />} />
              <Route path="/advicor_one" element={<AdvicorOne />} />
              <Route path="/advicor_two" element={<AdvicorTwo />} />
              <Route path="/advicor_three" element={<AdvicorThree />} />
              <Route path="/advicor_four" element={<AdvicorFour />} />

              {/* know more pages */}
              <Route path="/digitalPayments" element={<DigitalPayments/>}/>
              <Route path="/economicLandscape" element={<EconomicLandscape/>}/>
              <Route path="/digitalWave" element={<DigitalWave/>}/>
              <Route path="/blogs" element={<Blogs/>}/>
              <Route path="blog1" element={<Blog1/>}/>
              <Route path="/blog2" element={<Blog2/>}/>
              <Route path="/blog3" element={<Blog3/>}/>
              <Route path="/blog4" element={<Blog4/>}/>
              <Route path="/blog5" element={<Blog5/>}/>
              <Route path="/blog6" element={<Blog6/>}/>
              <Route path="/blog7" element={<Blog7/>}/>
              <Route path="/careers" element={<Jobs/>}/>
              <Route path="/faqs" element={<Faq/>} />
              <Route path="/events" element={<Events/>} />
              <Route path="/hpnClub" element={<HpnClub/>} />
             
             {/* //legal pages */}
             <Route path="/privacy" element={<PrivacyPolicy/>} />
             <Route path="/refund" element={<RefunAndRecanselation/>} />
             <Route path="/terms" element={<TermsAndConditions/>} />
             
            </Routes>
            <div style={{marginTop:"1rem"}}> 
            <OurPartners />
            <Footer />
            </div>
          </>
        )
      }

    </>
  );
}

export default App;