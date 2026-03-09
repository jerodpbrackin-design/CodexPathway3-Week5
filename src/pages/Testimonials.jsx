const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Software Engineer",
      text: "ResumeAI helped me land an interview at a FAANG company. The ATS optimization is a game changer!",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Marketing Director",
      text: "I went from zero callbacks to three interviews in one week. The templates are incredibly professional.",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Recent Graduate",
      text: "As a student, I didn't know how to word my experience. The AI suggestions were perfect.",
      stars: "⭐⭐⭐⭐",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 py-16 px-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-slate-900 mb-4 text-center">
        What Our Users Say
      </h1>
      <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl">
        Join thousands of professionals who have leveled up their careers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col hover:scale-105 transition-transform duration-300"
          >
            <div className="text-xl mb-4">{review.stars}</div>
            <p className="text-slate-700 italic mb-6 flex-grow">
              "{review.text}"
            </p>
            <div className="flex flex-col border-t border-slate-100 pt-4">
              <strong className="text-slate-900 font-bold">
                {review.name}
              </strong>
              <span className="text-sm text-blue-600 font-medium">
                {review.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
