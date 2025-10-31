import './globals.css';
import Header from './Header';
import Footer from './Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Header />
          <main className="layout__main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
