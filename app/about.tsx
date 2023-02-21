import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import altBackground from '../public/background-2.jpg'


function About() {
    return (
        <><Head>
          <title>NL Design Home</title>
          <meta
            name="description"
            content="Web design agency based in vancouver BC"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
        <Image
          src={altBackground}
          alt="background image"
          className="background-image"
        />
        <section id="landing-page">
          
          <div id="hero">
            <h1 className="hook">
              Web Design that <span className="highlight">works</span>
            </h1>
            <h2 className="description">
              Harness the true potential of your website to effortlessly grow
              your business
            </h2>
            <div className="button-wrapper">
              <a href="" className="button">
                find out how
              </a>
              <a href="" className="button">
                view our work
              </a>
            </div>
          </div>
        </section>
      </main>
            <footer></footer>
        </>
    )
}

export default About;