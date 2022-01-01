import React from "react"
import Black from "./black"
import 'semantic-ui-css'
import 'semantic-ui-css/semantic.min.css'

function App() {
    return (
    <div>
        <h2>Welcome to React App</h2>
        <h3>Date : {new Date().toDateString()}</h3>
        <Black />
    </div>)
}

export default App

/*const Date = {new Date().toDateString()}

const name = "DedNext Project"
export const siteTitle = "Next Dionysus Era"

export default function Layout({ children, home }){
    return (
      <div className='.body'>
        <section className={styles.container}>
          {home ? (
            <>
              <Link href='/'>
                <Image
                  priority
                  src="/images/Dedd.jpg"
                  className={utilStyles.card}
                  height={300}
                  width={300}
                  alt={name}
                />
              </Link>
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                  <Image
                    priority
                    src="/images/Dedd-full.jpg"
                    className={utilStyles.card}
                    height={200}
                    width={200}
                    alt={name}
                  />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a>Home Page</a>
                </Link>
              </h2>
            </>
          )}
        <main>{children}</main>
        {!home && (
          <div>
            <Link href="/home">
              <a>Dionysus Era Main</a>
            </Link>
          </div>
        )}</section>
      </div>
      )
    };
*/