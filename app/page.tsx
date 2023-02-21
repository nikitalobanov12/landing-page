"use client";

import Image from "next/image";
import Funnel from "../public/funnel.png";
import goldcup from "../public/goldcup.png";
import moneyhand from "../public/moneyhand.png";
import currencyChart from "../public/currency-chart.png";
import altBackground from "../public/background-2.jpg";
import Link from "next/link";
import BackgroundCity from "../public/background-city.jpg";
import background from "../public/background.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import code from "../public/code.png";
import link from "../public/link.png";
import { useSprings, animated } from "@react-spring/web";

export default function Home() {
  
  return (
    <>
      <title>NL Web Design Home</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="web design that works for you " />
      <link rel="icon" href="/favicon.ico" />
      <main>
        <Parallax pages={3}>
          <ParallaxLayer
            speed={0.5}
            style={{
              backgroundImage: `url(${background.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: -1,
              opacity: 0.7,
            }}
          />
          <ParallaxLayer speed={1}>
            <section id="landing-page">
              <header>
                <h1 className="title">
                  Effortlessly Scale With The Superpowers Of SEO
                </h1>
                <h2 className="subtitle">
                  We will help you tap into the biggest traffic source on the
                  planet
                  <br /> by creating a steady stream of inbound leads with no
                  effort on your end.
                </h2>

                <Link href="/contact">
                  <button title="call to action" type="button" className="btn">
                    Find Out How
                  </button>
                </Link>
                <div className="testimonial">Testimonial</div>
              </header>
              <div className="hero">
                <div className="vsl">vsl</div>
              </div>
            </section>
          </ParallaxLayer>

          <ParallaxLayer
            speed={1}
            style={{
              top: "100vh",
              height: "100vh",
              backgroundColor: "#3b3b3b",
              color: "#E7F6F2",
            }}
          >
            <section id="info">
              <div className="info-container">
                <div className="info">
                  <h1 className="info-title">why seo?  </h1>
                  <p className="info-text">
                    SEO (Search Engine Optimization) Is often overlooked by business owners,
                  
                    This is a MASSIVE mistake. 
                    <br /> <br />
                    Google is the biggest traffic source on the planet, with over 8.5 BILLION searches per day. 
                    <br />
                    <br />
                    Fortunately for you, this leaves a massive opportunity to soak up the traffic that your competitors are practically handing to you. 
                    <br />
                    <br />
                    When set up correctly, you will have a steady stream of clients who are already interested in your services, and are ready to buy from you. 
                  </p>
                </div>
                <div className="side-by-side">
                  <h1 className="info-title">If you want to</h1>
                </div>
                
              </div>
            </section>
          </ParallaxLayer>
          <ParallaxLayer
            speed={1}
            style={{
              top: "200vh",
              backgroundColor: "#E7F6F2",
              height: "100vh",
            }}
          ></ParallaxLayer>
          <ParallaxLayer
            speed={1}
            style={{
              top: "300vh",
              height: "100vh",
              backgroundColor: "#3b3b3b",
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            speed={0.5}
            factor={1.4}
            style={{
              backgroundImage: `url(${altBackground.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: -1,
              opacity: 0.7,
              top: "300vh",
            }}
          />
        </Parallax>
      </main>
    </>
  );
}