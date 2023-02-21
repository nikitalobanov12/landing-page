import './globals.css'
import Link from 'next/link'  
import React from 'react'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  })

{
  return (
    <html lang="en">
      {}
      <head />
      <body>
        <nav>
          <div className="nav-bar">
            <figure>
              <Link href="/">
                <strong className="logo">
                  <span className="brackets one">&lt;</span> NL{" "}
                  <span className="brackets two">&gt;</span>
                </strong>
              </Link>
            </figure>
            <ul>
              <li>
                <Link href="/about">objective</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/portfolio">Case studies</Link>
              </li>
              <li>
                <Link href="/contact">start scaling</Link>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
