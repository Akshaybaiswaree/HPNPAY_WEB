import React, { useState } from 'react';
// import faqbanner from 'public/faqbanner.png';

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setShowContent(false); 
  };

  const handleSymbolClick = () => {
    setShowContent(!showContent); 
  };

  return (
    <>
    <div style={{  margin: '2rem 2rem' }}>
     

<div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          width: '80%', // Adjust the width as needed
          marginBottom: '30px',
        }}
      >
        <h3
        className='help-class'
          style={{
            color: '#052b60',
           
            fontWeight: '700',
            marginBottom: '30px',
            fontFamily: 'Cera Pro',
          }}
        >
          Help
        </h3>
        <p

          className='helpcontent'
          style={{
            color: '#6c7a88',
            lineHeight: '26px',
          }}
        >
          We are happy to answer your questions
        </p>
      </div>
      <div
        style={{
          width: '80%', // Adjust the width as needed
        }}
      >
        <img
          src="faqbanner.png"
          alt=''
          style={{
            width: '70%', // Make the image responsive
          }}
        />
      </div>
    </div>

      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }} className='faq-content'>
        <h3 className='faq-title' style={{ position: 'relative', fontFamily: 'Cera Pro', fontSize: '2.25em', lineHeight: '40px', fontWeight: '700', color: '#1c539e', marginBottom: '30px' }}>Frequently Asked Questions</h3>
        <ul className='faq-tabs' style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
          <li
            style={{
              fontFamily: 'Cera Pro',
              fontSize: '1.625em',
              padding: '20px',
              cursor: 'pointer',
              borderBottom: activeTab === 0 ? '3px solid #0c4696' : '1px solid #f7f7f7',
              color: activeTab === 0 ? '#0c4696' : '#1e1e1e',
              marginRight: '10px',
              transition: 'color .3s ease, border-bottom .3s ease',
            }}
            className='faq-tab'
            onClick={() => handleTabClick(0)}
          >
            General
          </li>
          <li
           className='faq-tab'
            style={{
              fontFamily: 'Cera Pro',
              fontSize: '1.625em',
              padding: '20px',
              cursor: 'pointer',
              borderBottom: activeTab === 1 ? '3px solid #0c4696' : '1px solid #f7f7f7',
              color: activeTab === 1 ? '#0c4696' : '#1e1e1e',
              marginRight: '10px',
              transition: 'color .3s ease, border-bottom .3s ease',
            }}
            onClick={() => handleTabClick(1)}
          >
            Service
          </li>
        </ul>
      </div>
      <section className='faq-section' style={{ display: 'block', paddingTop: '30px', backgroundColor: '#fff' }}>
        {activeTab === 0 ?(
          <div className='faq-content' style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', marginTop: '20px' }}>
            <div style={{ display: 'block' }}>
              <div>
                <a>
                  <div
                    style={{
                      backgroundColor: '#6fbe5a',
                      display: 'inline-block',
                      textDecoration: 'none',
                      float: 'left',
                      width: 'auto',
                      height: 'auto',
                      marginRight: '15px',
                      padding: '2px 0px 0px 2px',
                      lineHeight: '1',
                      color: '#fff',
                    }}
                    onClick={handleSymbolClick}
                  >
                    <span id="ewd-ufaq-post-symbol-dkC-2079-0" style={{ fontSize: '1.5em', cursor:'pointer'}}>
                      {showContent ? '−' : '+'}
                    </span>
                  </div>
                  <div style={{ fontFamily: 'Cera Pro', fontSize: '1.125em', color: '#1e1e1e', float: 'left', width: '90%' }}>
                    <h4>I need more information about HPNPAY</h4>
                    {showContent && (
                      <p style={{fontSize:'1em',fontFamily: 'Cera Pro', lineHeight:'26px', color:'#1e1e1e', overflowWrap:'break-word'}}>
                      

                      </p>
                    )}
                  </div>
                </a>
              </div>
            </div>
          </div>
        ): (
            <div style={{width:'100%',maxWidth:'1200px', margin:'0 auto', display:'block'}}>
                <div className="select--service--dropdown "style={{position:'relative',marginBottom:'40px',marginRight:'25px', display:'inline-block'}}>
  <select name="faq-category" id="faq-category-id" className="faq-select" style={{ fontWeight: 'bold' ,fontSize:'1em',borderRadius:'5px', padding:'20px 40px 20px 20px', border:'1px solid #cecece', backgroundColor:'#fff',position:'relative',appearance:'none'}}>
    <option value="">Select Service</option>
    <option value="aeps">Aadhaar enabled Payment System (AePS)</option>
    <option value="air-booking">Air Booking</option>
    <option value="amazon-affiliate-program">Amazon Easy</option>
    <option value="bill-payments-services">Bill Payments</option>
    <option value="businessloans-unity-small-finance-bank">Business Loans - Unity Small Finance Bank</option>
    <option value="buy-gold">Buy Gold</option>
    <option value="buynearby">BuyNearby</option>
    <option value="device-repair-plan">Device Repair Plan</option>
    <option value="dst">Digi Smart Transfer (DST)</option>
    <option value="digit-coronavirus-product">Digit Coronavirus Product</option>
    <option value="dmt">DMT</option>
    <option value="flipkart-delivery-partner">Flipkart Delivery Partner</option>
    <option value="gold-loan">Gold Loan</option>
    <option value="group-personal-accident">Group Personal Accident</option>
    <option value="hospicash">Hospicash</option>
    <option value="jobsnearby">JobsNearby</option>
    <option value="khata">Khata</option>
    <option value="matm">Micro ATM</option>
    <option value="nivesh">Nivesh</option>
    <option value="paynearby-shopping-card">PayNearby Shopping Card</option>
    <option value="pos">Point Of Sale (POS)</option>
    <option value="power-plus-rewards-program">Power Plus Rewards Program</option>
    <option value="recharges">Recharge Services</option>
    <option value="savings-insurance-khata">Savings Insurance Khata</option>
    <option value="train-tickets">Train Tickets</option>
    <option value="two-wheeler-insurance">Two Wheeler Insurance</option>
  </select>
  <div className="select--arrow"></div>
</div>


            </div>
        )}
      </section>
      </div>
    </>
  );
};

export default Faq;