export default function Card({ img, name, Position, id, Section, sup, color }) {
  return (
    <div className="flex flex-col lg:flex-row items-center border border-gray-300 h-auto lg:h-56 my-6 w-full mx-auto rounded-lg shadow-lg max-w-5xl px-6 py-4 bg-white gap-6">
      
      {/* Image Section */}
      <div className="flex justify-center items-center w-full lg:w-1/3">
        <img src={img} alt={name} className="w-32 h-32 lg:w-40 lg:h-40 rounded-full ring-4 object-cover ring-green-500" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center items-start w-full lg:w-2/3 text-center lg:text-left">
        <h1 className={`text-2xl font-bold mb-2 ${color}`}>
          {Position}<sup>{sup}</sup> Position
        </h1>
        <h2 className="text-lg font-semibold text-gray-800 mb-1">{name}</h2>
        <p className="text-gray-600 mb-1">Student ID: {id}</p>
        <p className="text-gray-600">Section: {Section}</p>
      </div>
    </div>
  );
}
