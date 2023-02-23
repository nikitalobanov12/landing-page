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
import Carousel from "./carousel";
import { useMediaQuery } from "@material-ui/core";
import React, { useState, useEffect } from "react";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const factor = isMobile ? 2 : 1;
  return (
    <main>
      <Parallax pages={3}>
        <ParallaxLayer
          speed={0.5}
          factor={factor}
          style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
            opacity: 0.7,
          }}
        />
        <ParallaxLayer speed={1} factor={factor}>
          <section id="landing-page">
            <header>
              <h1 className="title">
                Leveraging High Ticket Digital Marketing with SEO
              </h1>
              <h2 className="subtitle">
                We help you tap into the biggest traffic source on the planet,
                <br /> by creating a steady stream of inbound leads with no
                effort on your part.
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
          factor={isMobile ? 1.5 : 1}
          style={{
            ...(isMobile ? { top: "200vh" } : { top: "100vh" }),
            backgroundColor: "#E0E0E0",
            zIndex: 1,
          }}
        >
          <section id="info">
            <h2 className="info__title">Stop Leaving Money on the Table.</h2>
            <p className="info__text">
              Client acquisition channels like social media, email marketing, and ads are great for quick results.
              <br /><br />
              But eventually you will need to build a long-term client acquisition strategy that can scale your business. 
              <br /><br />  
              SEO is the best way to grow an organic stream of inbound leads that are already in the market for your services.
              <br /><br />
              When set up properly, your SEO strategy will act as your 24/7 sales team, generating new leads and converting them into clients. 
         
            </p>
            <h2 className="info__title">
             High ticket digital marketing strategy 
            </h2>
            <p className="info__text">
              Using SEO to promote your business is an excellent way to increase sales for expensive products. Customers who find your website will already be attracted to the services you offer, leading to a smoother process of converting them into customers.
              <br /><br />
              SEO is also a great way to build brand awareness and trust. When you rank for high-value keywords, you will be seen as an authority in your industry. This will help you attract more customers and increase your sales.
            </p>
          </section>
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          factor={isMobile ? 2 : 1}
          style={{
            ...(isMobile ? { top: "350vh" } : { top: "200vh" }),
            backgroundColor: "#E7F6F2",
            color: "#3b3b3b",
            zIndex: 1,
          }}
        >
          <section id="services">
            <Carousel />
          </section>
        </ParallaxLayer>
        <ParallaxLayer
          speed={1}
          factor={factor}
          style={{
            ...(isMobile ? { top: "550vh" } : { top: "300vh" }),
            height: "100vh",
            backgroundColor: "#3b3b3b",
            zIndex: 1,
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          speed={0.5}
          factor={factor}
          style={{
            backgroundImage: `url(${altBackground.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
            opacity: 0.7,
            ...(isMobile ? { top: "450vh" } : { top: "300vh" }),
          }}
        />
      </Parallax>
    </main>
  );
}
