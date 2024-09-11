import Card from "./Card";
import arr from "../data/data.js";

const Winner = () => {
    return (<>
        <h1 className="text-center font-bold text-slate-800 text-2xl my-3">Winners</h1>
        <div className="flex flex-wrap justify-center gap-6 mt-4 mx-4">
            {/* First image with full width */}
            {/*Headline for Winners*/}
            <div className="w-full max-w-7xl">
                <Card
                    name={arr[0].name}
                    id={arr[0].id}
                    img={arr[0].img}
                    Position={arr[0].Position}
                    Section={arr[0].Section}
                    sup={arr[0].sup}
                    color={arr[0].color}
                />
            </div>

            {/* Second and third images with half width each */}
            <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl gap-2">
                <div className="w-full lg:w-1/2">
                    <Card
                        name={arr[1].name}
                        id={arr[1].id}
                        img={arr[1].img}
                        Position={arr[1].Position}
                        Section={arr[1].Section}
                        sup={arr[1].sup}
                        color={arr[1].color}
                    />
                </div>
                <div className="w-full lg:w-1/2">
                    <Card
                        name={arr[2].name}
                        id={arr[2].id}
                        img={arr[2].img}
                        Position={arr[2].Position}
                        Section={arr[2].Section}
                        sup={arr[2].sup}
                        color={arr[2].color}
                    />
                </div>
            </div>
        </div></>);
};

export default Winner;
