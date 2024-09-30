export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white w-full py-8">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl w-10/12 mx-auto">
        <p className="text-center lg:text-left text-sm lg:text-base font-medium mb-4 lg:mb-0">
          Organized By <span className="text-2xl font-bold">INTAKE <span className="text-blue-600">52</span></span>
          <br />
          <span
            className="cursor-pointer hidden lg:inline-block text-[10px] font-light hover:underline"
            onClick={() => window.location.href = 'https://github.com/anas20023'}
          >
            Developed By Remain 52
          </span>
        </p>
        <p className="text-center lg:text-right text-sm lg:text-base font-medium">
          Department of CSE <br />
          Bangladesh University of Business & Technology
          <br />
          <span
            className="cursor-pointer inline-block lg:hidden text-[10px] font-light hover:underline"
            onClick={() => window.location.href = 'https://github.com/anas20023'}
          >
            Developed By Remain 52
          </span>
        </p>
      </div>
    </footer>
  );
}
