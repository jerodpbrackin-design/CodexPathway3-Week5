const KnowledgeGrid = () => {
  const categories = [
    { title: "Typography", desc: "Utilities for font size, weight, and letter spacing (e.g., text-xl, font-bold).", color: "border-blue-500" },
    { title: "Flexbox", desc: "Control the layout, alignment, and sizing of grid columns and flex items.", color: "border-purple-500" },
    { title: "Spacing", desc: "Control the inner padding and outer margin of elements (e.g., p-4, m-2).", color: "border-green-500" },
    { title: "Effects", desc: "Apply shadows, opacity, and other visual treatments (e.g., shadow-lg, opacity-50).", color: "border-orange-500" },
    { title: "Sizing", desc: "Set the width and height of elements using fixed or relative values.", color: "border-red-500" }
  ];

  return (
    /* Step 1: Main Container & Responsive Grid */
    /* Mobile: grid-cols-1 (stack) | Large screens (md): grid-cols-5 (horizontal row) */
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-black text-center mb-10 text-slate-800">Tailwind Knowledge Grid</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {categories.map((item, index) => (
          /* Step 2 & 3: The Knowledge Cards with Hierarchy, Spacing, and Definition */
          <div 
            key={index} 
            className={`bg-white p-6 rounded-xl shadow-md border-t-4 ${item.color} flex flex-col hover:shadow-xl transition-shadow`}
          >
            {/* Visual Hierarchy: Title and Description */}
            <h2 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeGrid;