const ProductCard = ({ img_url, price, name, desc }) => {
  return (
    <div className="flex flex-col w-full h-full  bg-gray-100 items-center justify-center p-4 ">
      <div className="flex flex-col items-center justify-center w-[22%] bg-white rounded-xl shadow-md m-8  mb-16">
        <div>
          <img
            src={img_url}
            alt="Product Image"
            className="mb-9 bg-slate-800 w-full object-cover rounded-xl shadow-md"
          />
        </div>
        <div className="bg-white-100 p-4 rounded-b-xl">
          <h1 className="text-3xl text-center font-bold text-slate-800 mt-1">
            {name}
          </h1>
          <p className="text-center text-slate-500">{desc}</p>
          <p className="rounded-xl text-center bg-gray-200 p-auto text-white mt-3">{price}</p>
        </div>

        <div className="mt-5 ">
          <button className="mt-auto mb-2 bg-slate-900 text-white py-3 px-5 rounded-xl hover:bg-slate-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
