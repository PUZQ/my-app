'use client';

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <h2 className="contacts__title">Quick contacts</h2>
      <div className="contacts__grid">
        <a className="contacts__card" href="tel:+79990000000">
          <div className="contacts__icon" aria-hidden>
            {/* Phone */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.2 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.89.34 1.76.66 2.59a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.49-1.18a2 2 0 0 1 2.11-.45c.83.32 1.7.54 2.59.66A2 2 0 0 1 22 16.92Z" fill="#1b4b91"/>
            </svg>
          </div>
          <div className="contacts__label">Phone</div>
          <div className="contacts__value">+7 999 000-00-00</div>
        </a>
        <a className="contacts__card" href="https://wa.me/79990000000" target="_blank" rel="noreferrer">
          <div className="contacts__icon" aria-hidden>
            {/* WhatsApp */}
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.47 14.37c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.6.07-.27-.14-1.16-.43-2.21-1.36-.82-.73-1.37-1.63-1.53-1.9-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.46-.84-2-.22-.53-.45-.46-.61-.46-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.99 2.68 1.13 2.86.14.18 1.95 2.98 4.74 4.17.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.29.23-.64.23-1.19.16-1.29-.07-.09-.25-.16-.52-.3Z" fill="#25D366"/>
              <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.19 1.59 6.02L0 24l6.11-1.57A12 12 0 1 0 20.52 3.48Zm-8.52 19.02c-1.95 0-3.78-.57-5.35-1.65l-.38-.25-3.62.93.97-3.52-.25-.39A9.93 9.93 0 1 1 12 22.5Z" fill="#25D366"/>
            </svg>
          </div>
          <div className="contacts__label">WhatsApp</div>
          <div className="contacts__value">Open chat</div>
        </a>
        <a className="contacts__card" href="https://t.me/username" target="_blank" rel="noreferrer">
          <div className="contacts__icon" aria-hidden>
            {/* Telegram */}
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.04 15.31 8.88 19c.36 0 .51-.15.69-.34l1.66-1.62 3.44 2.52c.63.35 1.08.17 1.25-.59l2.27-10.65c.2-.93-.34-1.29-.95-1.06L3.29 10.2c-.9.35-.88.84-.15 1.06l4.69 1.46 10.9-6.86-9.68 9.44Z" fill="#229ED9"/>
            </svg>
          </div>
          <div className="contacts__label">Telegram</div>
          <div className="contacts__value">Send message</div>
        </a>
        <a className="contacts__card" href="mailto:pcmasterworks@example.com">
          <div className="contacts__icon" aria-hidden>
            {/* Email */}
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.5-8 5-8-5V6l8 5 8-5v2.5Z" fill="#1b4b91"/>
            </svg>
          </div>
          <div className="contacts__label">Email</div>
          <div className="contacts__value">pcmasterworks@example.com</div>
        </a>
      </div>

      <form className="contacts__form" onSubmit={(e) => e.preventDefault()}>
        <div className="contacts__form-title">Request a callback</div>
        <div className="contacts__fields">
          <input className="contacts__input" type="text" placeholder="Your name" required />
          <input className="contacts__input" type="tel" placeholder="Phone number" required />
          <input className="contacts__input" type="text" placeholder="Device/problem (optional)" />
        </div>
        <button className="contacts__submit" type="submit">Call me back</button>
      </form>
    </section>
  );
}
