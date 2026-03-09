const ProductLanding = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] p-5 w-full box-border">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-[800px] text-slate-900">
        Build a Professional Resume in 60 Seconds
      </h1>
      <p className="text-lg text-slate-600 mb-8 max-w-[600px]">
        Generate ATS-optimized resumes instantly with AI.
      </p>
      <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
        Create Your Resume
      </button>
    </section>
  );
};

export default ProductLanding;
