// eslint-disable-next-line no-unused-vars
const navbar = () => {
    return <>
        <nav className="flex flex-row justify-between items-center w-4/5  max-w-screen-lg mx-auto py-5 font-[poppins]">
            <div className="flex flex-row justify-between items-center w-[65%]">
                <h1 className="text-xl lg:text-2xl font-bold text-sky-600 cursor-pointer">BUIPC-2024</h1>
            </div>
            <div className="flex flex-row justify-end items-end w-[35%] text-sm lg:text-base font-medium text-slate-900 gap-x-2 lg:gap-x-3">
                <a href="#">Login</a>
                <a href="#">Register</a>
                <a href="#">Contact</a>
            </div>

        </nav>
    </>
}
export default navbar;