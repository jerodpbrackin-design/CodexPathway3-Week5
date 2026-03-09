const ProductCard = ({ title, desc }) => {
  return (
    <div className="w-[20%] flex flex-col items-center row-direction-col m-2 bg-white p-4 rounded-xl shadow-md border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-500">{desc}</p>
      <button className="w-[50%] flex justify-center mt-6 bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-700 transition">
        Learn More
      </button>
    </div>
  );
};

export default ProductCard;
