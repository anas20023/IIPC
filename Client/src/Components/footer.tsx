export default function Footer() {
    return (
        <div className="flex flex-row justify-center items-center bg-slate-900 text-white w-full py-4 mt-5 h-[200px]">
            <div className="flex flex-col lg:flex-row justify-between items-center max-w-5xl w-9/12 mx-auto">
                <p className="text-center lg:text-left lg:text-sm text-white font-medium mb-3">
                    Organized By 
                    <span className="text-2xl text-white font-bold" onClick={() => window.location.href = 'https://github.com/anas20023'}>
                        INTAKE <span className="text-[30px] text-blue-600">52</span>
                    </span>
                    <br />
                    <span className="cursor-pointer hidden lg:inline-block text-[10px] font-light" onClick={() => window.location.href = 'https://github.com/anas20023'}>
                        Developed By Anas Ibn Belal
                    </span>
                </p>
                <p className="text-center lg:text-right lg:text-base text-white font-medium">
                    Department of CSE <br />
                    Bangladesh University of Business & Technology <br />
                    <span className="cursor-pointer inline-block lg:hidden text-[10px] font-light" onClick={() => window.location.href = 'https://github.com/anas20023'}>
                        Developed By Anas Ibn Belal
                    </span>
                </p>
            </div>
        </div>
    );
}
