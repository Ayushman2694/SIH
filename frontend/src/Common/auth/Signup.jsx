import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("User Sign Up Data:", data);
    // Handle sign up logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 flex rounded-lg shadow-lg max-w-4xl w-full">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-center mb-6 text-black">
            User Sign Up
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                id="name"
                {...register("fullName", {
                  required: "Full Name is required",
                })}
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-gray-600 ${
                  errors.fullName ? "border-red-500" : ""
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Aadhar Card Input */}
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="aadhar">
                Aadhar Card
              </label>
              <input
                type="text"
                placeholder="1234-5678-9012"
                id="aadhar"
                {...register("aadharCard", {
                  required: "Aadhar Card is required",
                  pattern: {
                    value: /^\d{4}\d{4}\d{4}$/,
                    message: "Enter a valid Aadhar number",
                  },
                })}
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-gray-600 ${
                  errors.aadharCard ? "border-red-500" : ""
                }`}
              />
              {errors.aadharCard && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.aadharCard.message}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="user@gmail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-gray-600 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div className="mb-4 relative">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="********"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-gray-600 ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-800 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/user/login" className="text-black hover:text-gray-800">
                Login
              </Link>
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/pngegg.png"
            alt="Signup Illustration"
            className="object-contain w-full h-[500px] rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
}
