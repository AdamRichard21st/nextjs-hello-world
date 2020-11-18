import Router from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import Link from 'next/link'


export default function Home({mostViewed}) {

  return (
    <div className="container">
      <Head>
        <title>Manga Live</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a className="navbar-brand">Brand</a>
            <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="my-nav" className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Destaque <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Mais lidos da semana</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Mais lidos da semana</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Mais lidos da semana</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Mais lidos da semana</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div id="carouselExampleInterval" className="carousel slide mb-4 w-100" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="10000">
              <img src="https://via.placeholder.com/720x150" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-interval="2000">
              <img src="https://via.placeholder.com/720x150" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/720x150" className="d-block w-100" alt="..."/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div>
          <div className="manga-container">
            <h2>Mais vistos da semana</h2>

            <div className="manga-wrapper overflow-y-hidden d-flex">
              {mostViewed.map((manga, i) => (
                <div className="manga position-relative" key={i.toString()}>
                  <div className="wrapper">
                    <img src={manga.cover}/>
                    <div className="manga-name">{manga.name}</div>
                  </div>
                  <span className="manga-number position-absolute px-2 py-1 rounded-lg shadow bg-primary text-white font-weight-bold">{manga.number}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`

        .manga-container {
          overflow: auto;
          width: calc(100vw - 40px);
          text-align: center;
          padding: 10px;
          border-radius: 10px;
          background: #313131;
        }

        .manga {
          position: relative;
          cursor: pointer;
          padding: 5px;
          margin: 10px;
          transition: .1s ease-in-out;
        }

        .manga:hover {
          transform: scale(1.05);
        }

        .manga:hover .wrapper {
          box-shadow: 0px 5px 20px rgba(0,0,0,.3);
        }

        .manga:hover .manga-name {
          background: #737373;
        }

        .manga .wrapper {
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0px 3px 10px rgba(0,0,0,.3);
        }

        .manga img {
          max-width: 130px;
        }

        .manga-number {
          top: 13px;
          left: -10px;
        }

        .manga-name {
          padding: 8px;
          text-align: center;
          background: #8c8c8c;
          color: #fff;
        }




        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #3a3a3a;
          color: #fff;
        }

        * {
          box-sizing: border-box;
        }

        ::-webkit-scrollbar {
          height: 10px;
          width: 10px;
        }
         
        ::-webkit-scrollbar-track {
          border-radius: 8px;
          background-color: #38846a;
        }
         
        ::-webkit-scrollbar-thumb {
          background-color: #1cf3a9;
          box-shadow: 0px 0px 10px #1cf3a9;
          border-radius: 8px;
        }
      `}</style>
    </div>
  )
}


Home.getInitialProps = async (ctx) => {

  const res = await fetch(`${process.env.HOST}/api/getMostViewedMangas`);
  const json = await res.json();

  return { mostViewed: json };
}
