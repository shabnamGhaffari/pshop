import FooterPage from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";
import {Providers} from "../redux/Provider";

import AppLogout from "../components/AppLogout.js";
import ToastProvider from "../components/toast-provider";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <Providers>
            <Header />
            <AppLogout>{children}</AppLogout>
            <FooterPage />
          </Providers>
        </ToastProvider>
      </body>
    </html>
  );
}
