import FooterPage from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";
import {Providers} from "../redux/Provider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <FooterPage />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
