export default function Card(obj) {
    return (
        <div className="flex flex-row justify-evenly lg:justify-center items-center border-2 h-56 my-3 w-[94%] mx-auto rounded-lg shadow-md max-w-screen-lg px-4 gap-8 lg:gap-0">
            <div className="flex flex-col justify-center items-center w-1/2">
                <img src={obj.img} alt="Random Image" className="w-44 h-44 rounded-full mt-4 ring-4 object-cover ring-green-500" />
            </div>
            <div className="flex flex-col justify-between items-start text-slate-800 w-1/2 lg:-ml-10">
                <h1 className={'text-2xl font-black ' + obj.color}>{obj.Position}<sup>{obj.sup}</sup> Position</h1>
                <h1 className="text-lg font-bold">{obj.name}</h1>
                <h1 className="font-semibold">Student ID : {obj.id}</h1>
                <h1 className="font-semibold">Section : {obj.Section}</h1>
            </div>
        </div>
    );

}
Card.defaultProps = {
    name: "John Doe",
    Position: "1",
    id: "123456789",
    Section: "A"
}