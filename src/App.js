import './App.css';
import ReactPlayer from 'react-player/file';
import { useLocation, useParams } from 'react-router-dom';
import LINK from './constants/LINK';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const query = useQuery();
  const url = query.get('url');
  const logo = query.get('logo');
  const title = query.get('title');

  const { id } = useParams();

  const { webplay, playstore, logo: logoApp } = LINK[id] ?? {};

  if (!LINK[id])
    return (
      <div className='wrapper'>
        <div className='container flex-center full-height'>
          <h1
            style={{
              marginBottom: 16,
              fontSize: 120,
              color: '#dedede',
            }}
          >
            404
          </h1>
          <h3 style={{ marginBottom: 16 }}>Page not found for id {id}</h3>
          <spa>Try something else.</spa>
        </div>
      </div>
    );

  return (
    <div data-theme={id} className='color'>
      <div className='App'>
        <section
          style={{
            width: '100%',
            height: 100,
            display: 'block',
            background: 'white',
          }}
        >
          <div className='header'>
            <img src={logoApp} alt='logo' height={43} />
            <div
              style={{
                display: 'flex',
              }}
            >
              <a
                href={webplay}
                target='_blank'
                rel='noreferrer'
                className='nav-link'
              >
                Webplay
              </a>
              <a
                href={playstore}
                target='_blank'
                rel='noreferrer'
                className='nav-link'
              >
                Get app
              </a>
            </div>
          </div>
        </section>

        <section
          style={{ width: '100%', background: 'black', display: 'block' }}
        >
          <ReactPlayer
            url={url}
            controls
            playing={true}
            muted
            width={'100%'}
            height='80vh'
            config={{
              file: {
                forceHLS: true,
              },
            }}
          />
        </section>

        <section
          className='wrapper'
          style={{ marginTop: 24, marginBottom: 24 }}
        >
          <div className='container'>
            <div style={{ display: 'flex' }}>
              <img
                src={logo}
                alt='logo'
                width={81}
                height={81}
                className='logo'
              />
              <div>
                <h2 className='title'>{title}</h2>
                <button
                  className='share-button'
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    /* Alert the copied text */
                    alert('Copied url: ' + window.location.href);
                  }}
                >
                  <img
                    style={{ marginRight: 8 }}
                    src='/images/share.svg'
                    alt='logo-share'
                    width={16}
                    height={16}
                  />
                  Share
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <div className='footer'>
          <span>Svara Fast Player 2021&#169;</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
