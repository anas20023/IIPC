export default function Card({ img, name, Position, id, Section, sup, color }) {
  return (
    <div className="flex flex-col lg:flex-row items-center border border-gray-300 lg:h-60 h-auto my-6 w-full max-w-5xl mx-auto rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300 pl-6">

      {/* Image Section */}
      <div className="flex justify-center items-center w-full lg:w-1/3 p-4 lg:p-0">
        <img
          src={img}
          alt={name}
          className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover ring-4 ring-blue-500 transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center items-start w-full lg:w-2/3 text-center lg:text-left p-4">
        <h1 className={`text-2xl lg:text-3xl font-bold mb-2 ${color}`}>
          {Position}<sup>{sup}</sup> Position
        </h1>
        <h2 className="text-lg lg:text-xl font-semibold text-slate-800 mb-1">
          {name}
        </h2>
        <p className="text-gray-600 text-sm lg:text-base mb-1">
          Student ID: {id}
        </p>
        <p className="text-gray-600 text-sm lg:text-base">
          Section: {Section}
        </p>
      </div>
    </div>
  );
}
