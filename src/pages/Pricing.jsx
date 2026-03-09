import { useRef, useEffect } from "react";

const Pricing = () => {
  const emailRef = useRef(null);
  const statusRef = useRef(null);

  useEffect(() => {
    if (emailRef.current) emailRef.current.focus();
  }, []);

  return (
    <section className="flex flex-col items-center py-20 bg-slate-50 min-h-screen">
      <h2 ref={statusRef} className="text-4xl font-bold mb-12 text-slate-800">
        Pricing Plans
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center text-center border border-slate-200 bg-white rounded-2xl p-6 w-80 h-auto shadow-sm">
          <h3 className="text-2xl font-bold mb-2">Free</h3>
          <p className="text-3xl font-bold text-indigo-600 mb-4">$0</p>
          <p className="text-slate-500 mb-12">Basic AI suggestions</p>
          <button className="mt-auto w-full border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer">
            See Basic Plan
          </button>
        </div>
        <div className="flex flex-col items-center text-center border-2 border-indigo-500 bg-white rounded-2xl p-6 w-80 h-auto shadow-xl relative">
          <span className="absolute -top-4 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm">
            Featured
          </span>
          <h3 className="text-2xl font-bold mb-2">Pro</h3>
          <p className="text-3xl font-bold text-indigo-600 mb-4">
            $99.99<span className="text-sm text-slate-400"> / mo</span>
          </p>
          <p className="text-slate-500 mb-6">
            Full ATS optimization & Unlimited exports
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="w-full">
            <input
              ref={emailRef}
              type="email"
              placeholder="Enter email for discount"
              className="w-full p-2 border border-slate-300 rounded mb-4 focus:outline-indigo-500"
            />
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer">
              Claim Pro Discount
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
