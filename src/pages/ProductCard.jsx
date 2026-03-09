const ProductCard = ({ img_url, price, name, desc }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white w-80 h-auto rounded-xl shadow-md m-4">
        <div className="flex w-full items-center justify-center p-4 pb-0">
          <img
            src={img_url}
            alt="Product Image"
            className="h-48 w-full object-cover rounded-xl shadow-md"
          />
        </div>
        <div className="flex flex-col items-center p-4 w-full">
          <h1 className="text-3xl text-center font-bold text-slate-800 mt-1">
            {name}
          </h1>
          <p className="text-center text-slate-500 my-4">{desc}</p>
          <p className="rounded-xl text-center bg-slate-600 px-6 py-2 text-white mt-3 inline-block font-semibold">
            {price}
          </p>
        </div>
        <div className="flex flex-col mt-auto mb-6 w-full px-6">
          <button className="w-full bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-700 transition font-bold">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
