const ProductCard = ({ img_url, price, title, desc }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-9 p-4">
      <div className="mt-2 w-[40%] bg-white rounded-xl shadow-md">
        <div>
          <img
            src={img_url}
            alt="Product Image"
            className="mb-9 bg-slate-800 w-full h-48 object-cover rounded-t-xl rounded-xl shadow-md"
          />
        </div>
        <h1 className="text-3xl text-center font-bold text-slate-800 mt-1">
          {title}
        </h1>
        <p className="text-center text-slate-500">{desc}</p>
        <p className="text-center text-slate-500 mt-3">{price}</p>

        <div className="mt-5 flex flex-rowitems-center justify-center">
          <button className="mt-auto mb-2 w-[30%] bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-700 transition">
            Buy Now
          </button>
        </div>
        <div className="flex flex-col items-center justify-center mt-9"></div>
      </div>
    </div>
  );
};

export default ProductCard;
