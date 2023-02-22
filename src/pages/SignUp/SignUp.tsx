import React,{useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
import {toast} from "react-toastify";
import{useNavigate} from "react-router-dom";
import {signUpUser} from "../../middleware/api/api";
import 'react-toastify/dist/ReactToastify.css';


type SighupDT = {
    email: string,
    name:string,
    password: string
}
export const SignUp = () => {
    const navigator = useNavigate()
    const [signupData,setSignupData] = useState<SighupDT>({
        email:"",
        name:"",
        password:"",
    })
    const handleSignUp = async  (data:SighupDT) => {
        try {
            const token = await signUpUser(data)
            console.log(token)
            navigator('/')
            toast("خوش آمدید")
        }catch (err:any) {
            toast(err.message)
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
                    نام کاربری:
                    <TextField
                        type="text"
                        label="نام کاربری"
                        variant="outlined"
                        onChange={(e:React.ChangeEvent)=>setSignupData({...signupData,name: (e.target as HTMLInputElement).value})}
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
                    onClick={()=>handleSignUp(signupData)}
                    color='primary'>ثبت نام</Button>
            </form>
            <div style={{textAlign:'center'}}>
                <img src='../../src/assets/images/Logo.png' width='250px' height='250px' alt='#'/>
                <h1>با سبد بهترین ها را داشته باشید</h1>
            </div>

        </div>
    );
}