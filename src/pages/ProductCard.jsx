const ProductCard = () => {
  return (
    /* Step 1: The Main Container (Full screen, centered, light bg) */
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      
      {/* Step 2: The Card Body (White, Rounded, Shadow) */}
      <div className="max-w-xs bg-white rounded-2xl shadow-xl overflow-hidden p-6 border border-slate-100">
        
        {/* Step 3: The Image (Rounded, Bottom Margin) */}
        <img 
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop" 
          alt="Premium Headphones" 
          className="w-full h-48 object-cover rounded-xl mb-6"
        />

        {/* Step 4: Product Information */}
        <div className="text-center">
          {/* Product Name (Bold and Large) */}
          <h1 className="text-2xl font-bold text-slate-800">Studio Pro Wireless</h1>
          
          {/* Price (Different Color) */}
          <p className="text-lg font-medium text-blue-600 mt-1">$249.99</p>
          
          <p className="text-slate-500 text-sm mt-3 leading-snug">
            Experience high-fidelity audio with active noise cancellation and 40-hour battery life.
          </p>
        </div>

        {/* Step 5: The Action Button (BG, White Text, Rounded, Hover) */}
        <button className="w-full mt-6 bg-slate-900 text-white font-semibold py-3 rounded-xl hover:bg-slate-700 transition-colors duration-200">
          Buy Now
        </button>
        
      </div>
    </div>
  );
};

export default ProductCard;