import React,{useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
import {toast} from "react-toastify";
import{useNavigate} from "react-router-dom";
import {loginUser, signUpUser} from "../../middleware/api/api";
import 'react-toastify/dist/ReactToastify.css';
import JwtDecode from "jwt-decode";
import {setUserInfo, setUserLoggedIn, setUserToken} from "../../middleware/redux/slice/UserInfoSlice/UserInfoSlice";
import {useDispatch, useSelector} from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";


type SighupDT = {
    email: string,
    firstName:string,
    lastName:string,
    password: string
}
export const SignUp = () => {
    const [isLoading,setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const [signupData,setSignupData] = useState<SighupDT>({
        email:"",
        firstName:"",
        lastName:"",
        password:"",
    })
    const isOrder = useSelector((state:any) => state.Cart.IsOrdering)
    const handleSignUp = async  (data:SighupDT) => {
        setIsLoading(true)
        try {
            const response = await signUpUser(data)
            const decodedUserInfo:any = await JwtDecode(response.data.token);
            dispatch(setUserToken(response.data.token))
            dispatch(setUserInfo(decodedUserInfo))
            dispatch(setUserLoggedIn(true))
            setIsLoading(false)
            if(isOrder){
                navigator('/cart')
            }else{
                navigator('/')
            }
            toast("خوش آمدید")
        }catch (err:any) {
            toast(err.response.data.message)
        }

    }
    return(
        <div className='signupPage'>
            <form className='signupForm'>
                <h3>ثبت نام</h3>
                <label className='inputField'>
                    ایمیل:
                    <TextField
                        type="email"
                        label="ایمیل"
                        variant="outlined"
                        onChange={(e:React.ChangeEvent)=>setSignupData({...signupData,email: (e.target as HTMLInputElement).value})}
                        required/>
                </label>
                <label className='inputField'>
                    نام:
                    <TextField
                        type="text"
                        label="نام"
                        variant="outlined"
                        onChange={(e:React.ChangeEvent)=>setSignupData({...signupData,firstName: (e.target as HTMLInputElement).value})}
                        required/>
                </label>
                <label className='inputField'>
                    نام خانوادگی:
                    <TextField
                        type="text"
                        label=" نام خانوادگی"
                        variant="outlined"
                        onChange={(e:React.ChangeEvent)=>setSignupData({...signupData,lastName: (e.target as HTMLInputElement).value})}
                        required/>
                </label>
                <label className='inputField'>
                    رمز ورود:
                    <TextField
                        type='password'
                        id="outlined-basic"
                        label="رمز ورود"
                        variant="outlined"
                        onChange={(e:React.ChangeEvent)=>setSignupData({...signupData,password: (e.target as HTMLInputElement).value})}
                        required/>
                </label>
                <Button
                    variant="contained"
                    disabled={isLoading}
                    onClick={()=>handleSignUp(signupData)}
                    color='primary'>{!isLoading?"ثبت نام":<CircularProgress color="inherit" />}</Button>
            </form>
            <div style={{textAlign:'center'}}>
                <img src='../../src/assets/images/Logo.png' width='250px' height='250px' alt='#'/>
                <h1>با سبد بهترین ها را داشته باشید</h1>
            </div>

        </div>
    );
}