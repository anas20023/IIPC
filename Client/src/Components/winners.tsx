import Card from "./Card";
import arr from "../data/data.js"
const winner = () => {
    return (
        <>
            {arr.map((item) => {
                return (
                    <Card name={item.name} id={item.id} img={item.img} Position={item.Position} Section={item.Section} sup={item.sup} color={item.color} />
                )
            })}
        </>
    )
}
export default winner;