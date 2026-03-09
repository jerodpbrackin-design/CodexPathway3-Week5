import ProductCard from "./ProductCard";

function Features() {
  const features = [
    {
      title: "AI Resume Suggestions",
      desc: "Generate powerful resume bullet points instantly.",
      price: "$9.99/mo",
      img_url: "https://worldofprintables.com/wp-content/uploads/2022/04/White-and-Navy-Minimalist-Graphic-Designer-Resume-Template-768x768.jpg"
    },
    {
      title: "ATS Optimization",
      desc: "Pass automated hiring filters easily.",
      price: "$19.99/mo",
      img_url: "https://tse4.mm.bing.net/th/id/OIP.4H42BmwtQ_8FtyZqJcyndQHaHa?pid=Api&h=220&P=0"
    },
    {
      title: "Custom Templates",
      desc: "Professional templates designed by recruiters.",
      price: "$14.99/mo",
      img_url: "https://tse3.mm.bing.net/th/id/OIP.YAvNaZmAcdsdVH5cotR6iQHaE0?pid=Api&h=220&P=0"
    },
  ];

  return (
    <section className="flex flex-wrap justify-center py-16 px-16 gap-8">
      {features.map((f, i) => (
        <ProductCard key={i} title={f.title} desc={f.desc} price={f.price} img_url={f.img_url} />
      ))}
    </section>
  );
}

export default Features;