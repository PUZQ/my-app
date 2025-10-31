import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <img src="/image/pc-masterworks-high-resolution-color-logo%201.png" alt="PC MasterWorks Logo" height={48} style={{borderRadius: '14px'}} />
        </div>
        <div className="header__search">
          <input placeholder="What are you looking for..."/>
        </div>
        <nav className="header__menu">
          <Link className="header__item" href="/">Home</Link>
          <Link className="header__item" href="#about">About me</Link>
          <Link className="header__item" href="#services">Services</Link>
          <Link className="header__item" href="#contacts">Contacts</Link>
        </nav>
      </div>
    </header>
  );
}
