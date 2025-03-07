import { Route,Routes,BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Laptops from "./laptops";
import Mobiles from "./Mobiles";
import Watches from "./Watches";
import Error from "./Error";
const Master = ()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}>
             <Route path="dashboard/laptops" element={<Laptops></Laptops>}></Route>
             <Route path="dashboard/mobiles" element={<Mobiles></Mobiles>}></Route>
             <Route path="dashboard/watches" element={<Watches></Watches>}></Route>
            </Route>
            <Route path="/error" element={<Error></Error>}></Route>

        </Routes>
        </BrowserRouter>
        </>
    )

}
export default Master;