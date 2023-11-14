import React from "react";
import "../../components/basic/jobs.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Jobs = () => {
  return (
    <div className="jobs_container">
      <div className="jobs_hero">
        <div className="left">
          <h1>Pioneer the future of financial inclusion technology. </h1>
          <p>
          Embark on a profession that not only recognizes but also motivates. Contribute to shaping the future of financial tools for billions of users.
          </p>
        </div>
        <div className="right">
          <img src="jobs_1.png" alt="" />
        </div>
      </div>
      <div className="workCulture">
        <div className="work_left">
          <Carousel showArrows={false} showThumbs={false}>
            <div>
              <img src="workCulture.jpg" />
              <p className="legend">Legend 1</p>
            </div>
            
          </Carousel>
        </div>
        <div className="work_right">
          <h2>Our work culture</h2>
          <p>
          We operate as an equal opportunity workplace that values merit and recognizes performance. We foster inclusive interactions, make decisions objectively, and provide equal opportunities for everyone. Every voice is heard, and every suggestion is considered. Our commitment is to ensure that individuals at HPN have an enjoyable experience while reaching new heights and achieving milestones.
          </p>

          <p>
          We adhere to the belief that culture takes precedence over strategy at any given time. Life at HPNPAY will consistently be enjoyable and rewarding.
          </p>
          <div className="list">
            <div className="ul_1">
              <ul>
                <li>Empower</li>
                <li>Empathy</li>
                <li>Ambition</li>
                <li>Integrity</li>
              </ul>
            </div>
            <div className="ul_2">
              <ul>
                <li>Inspire</li>
                <li>Collaboration</li>
                <li>Leadership</li>
                <li>Innovation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="choose_us">
        <div className="choose_left">
          <h1>Why you should choose us</h1>
          <div className="choose_left_div">
            <img src="growth.jpeg" alt="" />
            <h2>Growth</h2>
            <p>
              Your professional and personal growth is just as important as
              business growth. Get a platform and mentors who bring out the best
              in you
            </p>
          </div>
          <div className="choose_left_div">
            <img src="transparency.jpeg" alt="" />
            <h2>Transparency</h2>
            <p>
              Your professional and personal growth is just as important as
              business growth. Get a platform and mentors who bring out the best
              in you
            </p>
          </div>
          <div className="choose_left_div">
            <img src="ownership.jpeg" alt="" />
            <h2>Ownership</h2>
            <p>
              Your professional and personal growth is just as important as
              business growth. Get a platform and mentors who bring out the best
              in you
            </p>
          </div>
        </div>
        <div className="choose_right">
          <img src="why-choose-us.png" alt="" />
        </div>
      </div>

      <div className="jobopening">
        <h1>Current job openings</h1>
        <p>Help us build, scale, design, code, support next generation financial technology. Join the team to build India’s largest branchless banking network.</p>
        <button colorScheme='blue'>Open Positions</button>
      </div>
      <div className="partner">

      </div>
    </div>
  );
};

export default Jobs;