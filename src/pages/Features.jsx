import ProductCard from "./ProductCard";

function Features() {
  const features = [
    {
      title: "AI Resume Suggestions",
      desc: "Generate powerful resume bullet points instantly.",
    },
    {
      title: "ATS Optimization",
      desc: "Pass automated hiring filters easily.",
    },
    {
      title: "Custom Templates",
      desc: "Professional templates designed by recruiters.",
    },
  ];

  return (
    <section className="flex flex-wrap justify-center py-16 px-16 gap-8">
      {features.map((f, i) => (
        <ProductCard key={i} title={f.title} desc={f.desc} />
      ))}
    </section>
  );
}

export default Features;