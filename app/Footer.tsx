export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__col footer__logo">
        <img src="/image/pc-masterworks-high-resolution-color-logo%201.png" alt="PC MasterWorks Logo" height={40} style={{borderRadius: '14px'}} />
        <div className="footer__rights">
          (c)2025 PC MasterWorks<br />PC MasterWorks LLC<br />INN 3460084647<br />OGRN 1233440006960
        </div>
      </div>
      <div className="footer__col footer__service">
        <b>Repair</b><br />TVs<br />Computers<br />Laptops<br />Smartphones
      </div>
      <div className="footer__col footer__contacts">
        <b>For communication</b><br />WhatsApp<br />Telegram<br />VKontakte
      </div>
      <div className="footer__col footer__info">
        The information posted on the website is not a public offer and is for informational purposes only. Prices are indicated for the service, and spare parts are not included in this cost.<br /><br />
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}
