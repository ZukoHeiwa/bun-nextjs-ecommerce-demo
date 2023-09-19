import '../styles/globals.css'; // Use a relative path to import the CSS file
import Header from './components/Header'; // Assuming that 'Header.js' is in the 'components' directory
import Footer from './components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
