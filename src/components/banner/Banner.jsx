export const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-72 sm:h-112"
      style={{
        backgroundImage:
          "url('https://images6.alphacoders.com/134/thumb-1920-1346455.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 rounded"></div>

      {/* Centered Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center text-white px-4 sm:px-12 py-6 w-full sm:w-3/5">
        <h1 className="text-2xl sm:text-4xl font-bold leading-normal mb-4">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-sm sm:text-lg leading-normal mb-4">
          Explore a wide range of delicious recipes curated just for you.
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          <button className="bg-green-400 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-black font-semibold hover:bg-green-600 transition">
            Explore Now
          </button>
          <button className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white text-white font-semibold hover:text-black hover:bg-green-600 transition">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

  