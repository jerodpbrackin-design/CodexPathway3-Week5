import { useRef, useEffect } from "react";

const Login = () => {
  const emailRef = useRef(null);

  useEffect(() => {
    if (emailRef.current) emailRef.current.focus();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50">
      <h2 className="text-3xl font-bold mb-6 text-slate-800">
        Login to ResumeAI
      </h2>
      <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-slate-100">
        <div className="flex flex-col gap-3 mb-4">
          <label className="font-medium text-slate-700">Email Address:</label>
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter your email"
            className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
        </div>

        <div className="flex flex-col gap-3 mb-6">
          <label className="font-medium text-slate-700">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#535bf2] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
