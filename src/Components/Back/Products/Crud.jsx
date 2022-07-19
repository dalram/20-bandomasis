import Create from "./Create";
import Edit from "./Edit";
import List from "./List";

function Crud() {
    return (<>
        <div className="container">
            <Create/>
            <List/>
        </div>
        <Edit/>
        </>
    )
}

export default Crud;