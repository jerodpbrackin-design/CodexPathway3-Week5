import ProductCard from "./ProductCard";

function Features() {
  const features = [
    {
      name: "AI Resume Suggestions",
      desc: "Generate powerful resume bullet points instantly.",
      price: "$9.99/mo",
      img_url:
        "https://worldofprintables.com/wp-content/uploads/2022/04/White-and-Navy-Minimalist-Graphic-Designer-Resume-Template-768x768.jpg",
    },
    {
      name: "ATS Optimization",
      desc: "Pass automated hiring filters easily.",
      price: "$19.99/mo",
      img_url:
        "https://tse4.mm.bing.net/th/id/OIP.4H42BmwtQ_8FtyZqJcyndQHaHa?pid=Api&h=220&P=0",
    },
    {
      name: "Custom Templates",
      desc: "Professional templates designed by recruiters.",
      price: "$14.99/mo",
      img_url:
        "https://tse3.mm.bing.net/th/id/OIP.YAvNaZmAcdsdVH5cotR6iQHaE0?pid=Api&h=220&P=0",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10">
      <section className="flex flex-wrap justify-center gap-8">
        {features.map((f, i) => (
          <ProductCard
            key={i}
            name={f.name}
            desc={f.desc}
            price={f.price}
            img_url={f.img_url}
          />
        ))}
      </section>
    </div>
  );
}

export default Features;
