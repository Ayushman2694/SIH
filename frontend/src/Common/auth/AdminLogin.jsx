import { useForm } from "react-hook-form";
import "react-toggle/style.css";

export default function AdminLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Container that wraps both form and image */}
      <div className="flex bg-white rounded-lg shadow-lg max-w-4xl p-8">
        {/* Login form */}
        <div className="w-1/2 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-center mb-6 font-bold">Admin Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 py-2 font-bold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="admin@gmail.com"
                id="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-gray-600"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4 relative">
              <label
                className="block text-gray-700 py-2 font-bold"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                id="password"
                {...register("password", { required: "Password is required" })}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-gray-600"
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-800 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-1/2">
          <img
            src="/pngegg.png"
            alt="Login Illustration"
            className="object-contain w-full h-full rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
}
