'use client';

type PriceItem = { label: string; price: string };

type Device = {
  img: string;
  name: string;
  prices: PriceItem[];
};

const deviceData: Device[] = [
  {
    img: '/my-app/image/laptop.png',
    name: 'Laptop',
    prices: [
      { label: 'Diagnostics', price: '0₽' },
      { label: 'Screen replacement', price: 'from 4500₽' },
      { label: 'Cleaning + thermal paste', price: 'from 1500₽' },
      { label: 'Keyboard replacement', price: 'from 1600₽' },
      { label: 'SSD upgrade + OS migrate', price: 'from 2200₽' },
    ],
  },
  {
    img: '/my-app/image/TV.png',
    name: 'TV',
    prices: [
      { label: 'Diagnostics', price: '0₽' },
      { label: 'Won’t power on', price: 'from 2500₽' },
      { label: 'Backlight repair', price: 'from 3000₽' },
      { label: 'Boards repair', price: 'from 3500₽' },
      { label: 'Wi‑Fi/Apps issues', price: 'from 1800₽' },
    ],
  },
  {
    img: '/my-app/image/PC.png',
    name: 'PC',
    prices: [
      { label: 'Diagnostics', price: '0₽' },
      { label: 'Build/upgrade', price: 'from 1500₽' },
      { label: 'Windows installation', price: 'from 1200₽' },
      { label: 'Cooling service', price: 'from 1400₽' },
      { label: 'Data recovery (basic)', price: 'from 2500₽' },
    ],
  },
  {
    img: '/my-app/image/Smarthone.png',
    name: 'Smartphone',
    prices: [
      { label: 'Diagnostics', price: '0₽' },
      { label: 'Display replacement', price: 'from 2500₽' },
      { label: 'Battery replacement', price: 'from 1800₽' },
      { label: 'Charging port repair', price: 'from 1600₽' },
      { label: 'Back glass replacement', price: 'from 2200₽' },
    ],
  },
];

import { useState, useMemo } from 'react';

export default function Devices() {
  const [selected, setSelected] = useState<Device | null>(null);

  const others = useMemo(() => {
    if (!selected) return deviceData;
    return deviceData.filter((d) => d.name !== selected.name);
  }, [selected]);

  return (
    <section className="devices" id="services">
      <h2 className="devices__title">Select a faulty device</h2>

      <div className={`devices__wrap ${selected ? 'devices__wrap--expanded' : ''}`}>
        <div className={`devices__details ${selected ? 'devices__details--open' : ''}`}>
          {selected && (
            <div className="devices__details-inner">
              <div className="devices__details-head">
                <div className="devices__details-title">
                  <img className="devices__details-img" src={selected.img} alt="" />
                  <span>{selected.name} — Services & Prices</span>
                </div>
                <button className="devices__details-close" type="button" onClick={() => setSelected(null)}>✕</button>
              </div>
              <ul className="devices__details-list">
                {selected.prices.map((p) => (
                  <li className="devices__details-item" key={p.label}>
                    <span className="devices__details-label">{p.label}</span>
                    <span className="devices__details-dots" />
                    <span className="devices__details-value">{p.price}</span>
                  </li>
                ))}
              </ul>
              <a href="#contacts" className="devices__details-cta">Book a repair</a>
            </div>
          )}
        </div>

        <div className={`devices__list ${selected ? 'devices__list--compact' : ''}`}>
          {others.map((d) => (
            <button className="devices__button" type="button" key={d.name} onClick={() => setSelected(d)}>
              <img className="devices__img" src={d.img} alt={d.name} style={{ pointerEvents: 'none' }} />
              <div className="devices__name">{d.name}</div>
              {!selected && (
                <div className="devices__price">
                  <div className="devices__price-title">Services & Prices</div>
                  <ul className="devices__price-list">
                    {d.prices.slice(0, 3).map((p) => (
                      <li className="devices__price-item" key={p.label}>
                        <span className="devices__price-label">{p.label}</span>
                        <span className="devices__price-value">{p.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
