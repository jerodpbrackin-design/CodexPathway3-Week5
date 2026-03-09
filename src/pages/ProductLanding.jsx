import { useRef, useEffect } from 'react';

const ProductLanding = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const productRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleCapture = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const product = productRef.current.value;

    alert(
      `Interest Form Submitted:\n` +
      `Full Name: ${name}\n` +
      `Email: ${email}\n` +
      `Product Model: ${product}`
    );
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-5">
      <form onSubmit={handleCapture} className="flex flex-col gap-4 border p-8 rounded-lg shadow-sm">
        <div className="flex flex-col">
          <label htmlFor="name">Full Name</label>
          <input 
            id="name"
            type="text" 
            ref={nameRef} 
            className="border p-2 rounded"
            required 
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email" 
            ref={emailRef} 
            className="border p-2 rounded"
            required 
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="product">Product Model</label>
          <select id="product" ref={productRef} className="border p-2 rounded">
            <option value="Standard">Standard</option>
            <option value="Pro">Pro</option>
            <option value="Ultra">Ultra</option>
          </select>
        </div>

        <button type="submit" className="bg-blue-600 text-white p-2 rounded font-bold">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ProductLanding;