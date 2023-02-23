import React,{useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
import {toast} from "react-toastify";
import{useNavigate,Link} from "react-router-dom";
import {loginUser} from "../../middleware/api/api";
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch,useSelector} from "react-redux";
import JwtDecode from "jwt-decode";
import {setUserInfo,setUserToken} from "../../middleware/redux/slice/UserInfoSlice/UserInfoSlice";


type LoginDT = {
    email: string,
    password: string
}
export const Login = () => {
    const tokenStore:String = useSelector((state:any)=> state.userInfo.userToken)
    const dispatch = useDispatch()

    const navigator = useNavigate()
    const [loginData,setLoginData] = useState({
        email:"",
        password:"",
    })
    const handleLogin = async  (data:LoginDT) => {
        try {
            const token = await loginUser(data)
            const decodedUserInfo:any = await JwtDecode(token.data.token);
            dispatch(setUserToken(token.data.token))
            dispatch(setUserInfo(decodedUserInfo))
            if(decodedUserInfo.bAdmin === true) navigator('/dashboard')
            else navigator('/')
            toast("خوش آمدید")
        }catch (err:any) {
            toast(err.response.message)
        }

    }
    return(
        <div className='LoginPage'>
            <form className='loginForm'>
                <h3>ورود</h3>
                <label className='inputField'>
                    ایمیل:
                    <TextField
                        type="email"
                        label="ایمیل"
                        variant="outlined"
                        onChange={(e:React.ChangeEvent)=>setLoginData({...loginData,email: (e.target as HTMLInputElement).value})}
                        required/>
                </label>
                <label className='inputField'>
                    رمز ورود:
                    <TextField
                        type='password'
                        id="outlined-basic"
                        label="رمز ورود"
                        variant="outlined"
                        onChange={(e:React.ChangeEvent)=>setLoginData({...loginData,password: (e.target as HTMLInputElement).value})}
                        required/>
                </label>
                <Button
                    variant="contained"
                    onClick={()=>handleLogin(loginData)}
                    color='primary'>ورود</Button>
                <Link to='/signup'>ثبت نام نکرده اید؟</Link>
            </form>
            <div style={{textAlign:'center'}}>
                <img src='../../src/assets/images/Logo.png' width='250px' height='250px' alt='#'/>
                <h1>با سبد بهترین ها را داشته باشید</h1>
            </div>

        </div>
    );
}