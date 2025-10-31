export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Home-based computer repair</h1>
          <ul className="hero__desc">
            <li>Fast, high-quality, guaranteed</li>
            <li>Free diagnostics</li>
            <li>Departure within 2 hours</li>
            <li>Warranty up to 1 year</li>
          </ul>
          <a className="hero__button" href="#contacts">Call the wizard</a>
        </div>
        <div className="hero__photo">
          <img src="/image/image 1.png" alt="Repair specialist" className="hero__main-image" style={{width: '100%', maxWidth: 572, borderRadius: 18}} />
        </div>
      </div>
    </section>
  );
}
