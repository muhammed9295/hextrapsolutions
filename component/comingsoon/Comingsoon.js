import React from "react";
import Link from "next/link";
import { FaEnvelopeOpen } from "react-icons/fa";
import Countdown from "react-countdown";
import ColorSwitcher from "../../elements/switcher/ColorSwitcher";

const Comingsoon = () => {
  const Completionist = () => <span>Our Site is Ready to Go!</span>;

  const SetCountdownTime = "2022-08-16T17:00:00";

  const CountDownRender = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="countdown">
          <div className="countdown-section">
            <span className="countdown-number">{days}</span>
            <span className="countdown-unit">Days</span>
          </div>
          <div className="countdown-section">
            <span className="countdown-number">{hours}</span>
            <span className="countdown-unit">Hours</span>
          </div>
          <div className="countdown-section">
            <span className="countdown-number">{minutes}</span>
            <span className="countdown-unit">Hours</span>
          </div>
          <div className="countdown-section">
            <span className="countdown-number">{seconds}</span>
            <span className="countdown-unit">Hours</span>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <ColorSwitcher />
      <main className="main-wrapper">
        <div className="coming-soon-area onepage-screen-area">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="content">
                  <h2 className="title text-center">Our new Blog section is on its way</h2>

                  <Countdown
                    date={SetCountdownTime}
                    zeroPadTime={3}
                    renderer={CountDownRender}
                  ></Countdown>
                  <form>
                    <div className="input-group">
                      <span className="mail-icon">
                        <FaEnvelopeOpen />{" "}
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                      />
                      <button className="subscribe-btn" type="submit">
                        Notify Me
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="thumbnail">
                  <img src="/images/others/comingsoon.png" alt="Coming Soon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Comingsoon;
