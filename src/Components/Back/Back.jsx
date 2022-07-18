import BackContext from "./BackContext";
import Nav from "./Nav";
import Orders from "./Orders/Orders";
import Products from "./Products/Crud";

function Back({ show }) {

  return (
    <BackContext.Provider value={{}}>
      {show === "admin" ? (
        <>
          <Nav />
          <h1>Sveiki atvykę į administacinę sritį, naudokite navigacija!</h1>
        </>
      ) : show === "orders" ? (
        <>
          <Nav />
          <Orders />
        </>
      ) : (
        <>
          <Nav />
          <Products />
        </>
      )}
    </BackContext.Provider>
  );
}

export default Back;
