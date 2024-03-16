// eslint-disable-next-line no-unused-vars
const navbar = () => {
    return <>
        <nav className="flex flex-row justify-between items-center w-4/5  max-w-screen-lg mx-auto py-5">
            <div className="flex flex-row justify-between items-center w-[70%]">
                <h1 className="text-2xl font-bold text-orange-700 cursor-pointer">Halal Food</h1>
            </div>
            <div className="flex flex-row justify-around items-center w-[30%] text-lg font-semibold text-slate-900">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>

        </nav>
    </>
}
export default navbar;