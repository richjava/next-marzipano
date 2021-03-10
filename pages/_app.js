import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <div className="full-height">
        <Component {...pageProps} />
      </div>
  );
}

export default MyApp;
