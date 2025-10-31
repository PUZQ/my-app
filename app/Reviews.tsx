const reviews = [
  {
    author: 'Maria',
    text: 'Very satisfied with the service! The technician arrived quickly and fixed my laptop in half an hour. Will recommend to friends.'
  },
  {
    author: 'Ivan',
    text: 'Quality repair and fair prices. Everything was checked in front of me and I received a warranty! Thank you.'
  },
  {
    author: 'Andrey',
    text: 'Professional, fast, and with a clear explanation of the issue. Great experience.'
  },
];

export default function Reviews() {
  return (
    <section className="reviews">
      <h2 className="reviews__title">Customer Reviews</h2>
      <div className="reviews__list">
        {reviews.map((r, i) => (
          <div className="reviews__item" key={i}>
            <div className="reviews__text">“{r.text}”</div>
            <div className="reviews__author">— {r.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
