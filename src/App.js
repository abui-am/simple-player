import './App.css';
import ReactPlayer from 'react-player/file';
import { useLocation } from 'react-router-dom';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const query = useQuery();
  const url = query.get("url");
  const logo = query.get("logo");
  const title = query.get("title");

  return (
    <div >
      <div className="App">
        <section style={{
          width: "100%",
          height: 100,
          display: "block",
          background: "white"
        }}>
          <div style={{
            marginRight: "auto",
            marginLeft: "auto",
            alignItems: "center",
            padding: "28px 24px",
            maxWidth: 1280,
            display: "flex",
            width: "100%",
            justifyContent: "space-between"
          }}>
            <img src="/images/logo-svara.svg"
              alt="logo"
              width={157}
            />
            <div style={{
              display: "flex"
            }}>
              <a href="https://play.svara.id" target="_blank" rel="noreferrer" className="nav-link">
                Webplay
              </a>
              <a href="http://onelink.to/svarapp" target="_blank" rel="noreferrer" className="nav-link">
                Get App
              </a>
            </div>
          </div>
        </section>

        <section style={{ width: "100%", background: "black", display: "block" }}>
          <ReactPlayer url={url}
            controls
            playing={true}
            muted
            width={"100%"}
            height="80vh"
            config={{
              file: {
                forceHLS: true
              }
            }}
          />
        </section>

        <section className="wrapper" style={{ marginTop: 24, marginBottom: 24 }}>
          <div className="container">
            <div style={{ display: "flex" }}>
              <img src={logo}
                alt="logo"
                width={81}
                height={81}
                style={{ marginRight: 24, border: "1px solid #e2e2e2", borderRadius: 8, background: "white" }}
              />
              <div>
                <h2 className="title">
                  {title}
                </h2>
                <button className="share-button"
                  onClick={() => { }}
                >
                  <img style={{ marginRight: 8 }} src="/images/share.svg" alt="logo-share" width={16} height={16} />
                  Share
                </button>
              </div>
            </div>
          </div>
        </section>


      </div>
      <footer>

        <div style={{
          width: "100%", height: 56, display: "flex",
          alignItems: "center", justifyContent: "center"
        }}>
          <span>
            Svara Mobile Player 2021
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
