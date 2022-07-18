import Nav from "./Nav";
import Orders from "./Orders/Orders";
import Products from "./Products/Products";

function Back({ show }) {
    return (
       <>
            {
                show === "admin" ? ( <>
                    <Nav/>
                    <h1>Back</h1>
                    </> )
                 : show === 'orders' ? (<>
                 <Nav/>
                 <Orders/>
                 </> ): (<>
                 <Nav/>
                 <Products/>
                 </> )
            }
        </>
    )
}

export default Back;