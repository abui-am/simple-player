import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player/file';

function App() {
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
              <a href="" className="nav-link">
                Webplay
              </a>
              <a href="" className="nav-link">
                Get App
              </a>
            </div>
          </div>
        </section>

        <section style={{ width: "100%", background: "black", display: "block" }}>
          <ReactPlayer url='http://45.118.114.26/camera/Tamansari.m3u8' controls

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
              <img src="/images/logo-svara.svg"
                alt="logo"
                width={81}
                height={81}
                style={{ marginRight: 24 }}
              />
              <div>
                <h2 className="title">
                  Cipaganti - Video Streaming ATCS Kota Bandung
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
