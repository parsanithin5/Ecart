import { Link,Outlet } from "react-router-dom";
const Dashboard = ()=>{
    return(
        <>
        <Link to="dashboard/laptops" style={{marginRight:200}}>Laptops</Link>
        <Link to="dashboard/mobiles" style={{marginRight:200}}>Mobiles</Link>
        <Link to="dashboard/watches" style={{marginRight:200}}>Watches</Link>
        <br></br><br></br>
        <Outlet></Outlet>        
        </>
    )
}
export default Dashboard;