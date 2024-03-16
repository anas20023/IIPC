// eslint-disable-next-line no-unused-vars
const navbar = () => {
    return <>
        <nav className="flex flex-row justify-between items-center w-4/5  max-w-screen-lg mx-auto py-5 font-[poppins]">
            <div className="flex flex-row justify-between items-center w-[65%]">
                <h1 className="text-2xl font-bold text-sky-700 cursor-pointer">BUIPC-2024</h1>
            </div>
            <div className="flex flex-row justify-around items-center w-[35%] text-lg font-medium text-slate-900">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>

        </nav>
    </>
}
export default navbar;