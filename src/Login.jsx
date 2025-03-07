import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const uname = useRef(null);
    const upwd = useRef(null);
    const navigate = useNavigate();
    const login = ()=>{
        uname.current.value == "mru" && upwd.current.value == "mru@123" ? navigate("/dashboard") : navigate("/error");
    }
    return(
        <>
            <input type="text" ref={uname} placeholder="enter username"></input> 
            <br></br><br></br>
            <input type="password" ref={upwd} placeholder="enter password"></input>
            <br></br><br></br>
            <button onClick={login}>Login</button>
        </>
    )
}
export default Login;