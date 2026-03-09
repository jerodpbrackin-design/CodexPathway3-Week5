function Features() {
  const features = [
    {
      title: "AI Resume Suggestions",
      desc: "Generate powerful resume bullet points instantly."
    },
    {
      title: "ATS Optimization",
      desc: "Pass automated hiring filters easily."
    },
    {
      title: "Custom Templates",
      desc: "Professional templates designed by recruiters."
    }
  ];

  return (
    /* Step 1: Converted section styles (Flex, centered, padding) */
    <section className="flex flex-col items-center text-center py-16 px-8 gap-8">
      {features.map((f, i) => (
        /* Step 2: Converted .features div styles (Card look) */
        <div className="max-w-md bg-white p-6 rounded-xl shadow-md border border-slate-100" key={i}>
          <h3 className="text-xl font-bold text-slate-800 mb-2">{f.title}</h3>
          <p className="text-slate-600">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;