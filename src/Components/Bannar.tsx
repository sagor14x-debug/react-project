import Logo from "../assets/banner-stack.png";

const Bannar = () => {
  return (
    <div className="container mx-auto px-6 my-12">

      <div className="flex items-center gap-10 min-h-155">

        {/* Left Side */}
        <div className="flex-1">

          <h2 className="mb-6 text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-black">
              Build Your Ideal <br />
            </span>

            <span className="bg-linear-to-r from-red-500 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h2>

          <p className="text-lg leading-7 text-gray-600">
            Explore frontend, backend, database, and tooling options,
            <br />
            compare them side by side, and put together the stack that
            <br />
            fits your next project.
          </p>

           {/* Buttons */}
          <div className="flex gap-5 mt-10">

            <button
              className="h-21 w-87.5
              cursor-pointer rounded-2xl
              bg-linear-to-r from-orange-500 to-pink-500
              text-2xl font-semibold text-white
              hover:opacity-90 transition"
            >
              Explore Technologies
            </button>

            <button
              className="h-21 w-87.5
              cursor-pointer rounded-2xl
              border-2 border-gray-200
              bg-white
              text-2xl font-normal text-gray-700
              hover:bg-gray-50 transition"
            >
              Learn More
            </button>

          </div>

        </div>


         {/* Right Side */}
        <div className="flex-1 flex justify-center items-center">

          <img
            src={Logo}
            alt="Development Stack"
            className="w-full max-w-150"
          />

        </div>

      </div>

    </div>
  );
};

export default Bannar;







