import { useState } from "react";

export default function SingleFood({food}){


    const [viewDesc, setViewDesc] = useState(false);

    return <div className="card mb-2">
    <div className="card-header">
        <strong>Country:</strong> {food.country}
    </div>
    <div className="card-body">
        <h5 className="card-title">{food.name}</h5>
        <p className="card-text"><strong>Type: </strong>{food.type}</p>
        <button className="btn btn-primary" onClick={()=>setViewDesc(prev=> !prev)}>Read More...</button>
        {viewDesc && <p>{food.description}</p>}
    </div>
</div>
}

