import { useGlobalContext } from "../context/GlobalContext"
import SingleFood from "../components/SingleFood";


export default function Foods(){
    const {currentFoods} = useGlobalContext();

    return <div id="foods" style={{overflowY: "auto"}}>
        <h2 className="text-center mb-4 fw-bold">Delicious Ciccionerie</h2>
        {currentFoods.map(food=> <SingleFood food={food} key={food.id}/>)}
    </div>
}