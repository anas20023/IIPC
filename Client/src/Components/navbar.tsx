export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center max-w-5xl w-9/12 mx-auto py-4">
      <h1 className="text-2xl font-bold text-slate-800">IIPC <span className="text-blue-600">52</span></h1>
      <div className="flex flex-row justify-between items-center">
        <a href="#" className="text-md lg:text-lg font-medium text-white bg-blue-600 px-2 lg:px-4 py-2 rounded">Winners</a>
      </div>
    </nav>
  )
}