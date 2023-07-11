import FooterPage from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
