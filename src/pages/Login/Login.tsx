import React,{useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
import {toast} from "react-toastify";
import{useNavigate,Link} from "react-router-dom";
import {loginUser} from "../../middleware/api/api";
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch,useSelector} from "react-redux";
import CircularProgress from "@mui/material/CircularProgress"
import JwtDecode from "jwt-decode";
import {setUserInfo,setUserToken,setUserLoggedIn} from "../../middleware/redux/slice/UserInfoSlice/UserInfoSlice";


type LoginDT = {
    email: string,
    password: string
}

const toastData:any = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    style: {textTransform: 'capitalize'}
}

export const Login = () => {
    const [isLoading,setIsLoading] = useState(false)
    const dispatch = useDispatch()

    const navigator = useNavigate()
    const [loginData,setLoginData] = useState({
        email:"",
        password:"",
    })
    const isOrder = useSelector((state:any) => state.Cart.IsOrdering)
    const handleLogin = async  (data:LoginDT) => {
        setIsLoading(true)
        try {
            const response = await loginUser(data)
            const decodedUserInfo:any = await JwtDecode(response.data.token);
            dispatch(setUserToken(response.data.token))
            dispatch(setUserInfo(decodedUserInfo))
            dispatch(setUserLoggedIn(true))
            setIsLoading(false)
            if(decodedUserInfo.bAdmin === true) navigator('/dashboard')
            else{
                if(isOrder){
                    navigator('/cart')
                }else{
                    navigator('/')
                }
            }
            toast.success("خوش آمدید",toastData)
        }catch (err:any) {
            toast.error(err.response.data.message,toastData)
            setIsLoading(false)
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
                    disabled={isLoading}
                    onClick={()=>handleLogin(loginData)}
                    color='primary'>{!isLoading?"ورود":<CircularProgress color="inherit" />}</Button>
                <Link to='/signup'>ثبت نام نکرده اید؟</Link>
            </form>
            <div style={{textAlign:'center'}}>
                <img src='../../src/assets/images/Logo.png' width='250px' height='250px' alt='#'/>
                <h1>با سبد بهترین ها را داشته باشید</h1>
            </div>

        </div>
    );
}