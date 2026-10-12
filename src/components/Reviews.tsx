import testimonials from '../data/testimonials.json';

export default function Reviews() {
  return (
    <section id="reviews" style={{ padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: '500',
            letterSpacing: '0.2em',
            color: '#635BFF',
            textTransform: 'uppercase',
          }}>
            Testimonials
          </span>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
            fontWeight: 'bold',
            color: '#111111',
            marginTop: '0.75rem',
            lineHeight: '1.2',
          }}>
            Good work. Better collaborations.
          </h2>
        </div>

        {testimonials.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
            {testimonials.map((review) => (
              <div
                key={review.id}
                style={{
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  backgroundColor: 'white',
                  border: '1px solid #E8E8E8',
                }}
              >
                <div style={{ fontSize: '1.5rem', color: '#E8E8E8', marginBottom: '1rem' }}>"</div>
                <p style={{ color: '#111111', lineHeight: '1.625', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                  {review.content}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    backgroundColor: '#F7F7F5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#6B6B6B',
                  }}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111111' }}>{review.name}</p>
                    <p style={{ fontSize: '0.75rem', color: '#6B6B6B' }}>{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ maxWidth: '42rem', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111111', marginBottom: '1rem' }}>
              What You Can Expect
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem',
              textAlign: 'left',
            }}>
              {[
                'Clear communication throughout the project',
                'Timely delivery with attention to detail',
                'Revisions until you\'re satisfied',
                'Professional quality at every stage',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    backgroundColor: 'white',
                    border: '1px solid #E8E8E8',
                  }}
                >
                  <span style={{ color: '#635BFF', marginTop: '0.125rem' }}>✓</span>
                  <span style={{ fontSize: '0.875rem', color: '#6B6B6B' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
