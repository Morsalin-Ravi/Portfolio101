import { Quote } from 'lucide-react';
import testimonials from '../data/testimonials.json';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  photo: string;
}

export default function Reviews() {
  const reviews = testimonials as Testimonial[];

  return (
    <section id="reviews" className="py-20 sm:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-[0.2em] text-[#635BFF] uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mt-3 leading-tight">
            Good work. Better collaborations.
          </h2>
        </div>

        {reviews.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-2xl bg-white border border-[#E8E8E8] hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
              >
                <Quote size={24} className="text-[#E8E8E8] mb-4" />
                <p className="text-[#111111] leading-relaxed mb-6 text-sm">
                  "{review.content}"
                </p>
                <div className="flex items-center gap-3">
                  {review.photo ? (
                    <img
                      src={review.photo}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#F7F7F5] flex items-center justify-center text-sm font-medium text-[#6B6B6B]">
                      {review.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-[#111111]">{review.name}</p>
                    <p className="text-xs text-[#6B6B6B]">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#111111] mb-4">What You Can Expect</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                'Clear communication throughout the project',
                'Timely delivery with attention to detail',
                'Revisions until you\'re satisfied',
                'Professional quality at every stage',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E8E8E8]">
                  <span className="text-[#635BFF] mt-0.5">✓</span>
                  <span className="text-sm text-[#6B6B6B]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
