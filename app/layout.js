import FooterPage from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";
import {Providers} from "../redux/Provider";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <FooterPage />
        </Providers>
      </body>
    </html>
  );
}
