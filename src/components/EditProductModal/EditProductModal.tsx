import React, {ChangeEvent, useEffect, useState,} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";
import {getSingleProd, postProds} from "../../middleware/api/api";
import {toast} from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import {useSelector} from "react-redux";
interface Modal {
    CloseModal:() => void;
    ShowModal:boolean,
    id:string
}
// interface prodData {
//     name:string,
//     price:number,
//     quantity:number,
//     description:string,
// }
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


export const EditProductModal = ({ShowModal,CloseModal,id}:Modal) => {

    let proData:any = [];
    const adminUser = useSelector((state:any) => state.userInfo.userToken)
    const formData = new FormData()
    const [prodData,setProdData] = useState({
        name:proData.name,
        price:proData.price,
        quantity:proData.quantity,
        description:proData.description,
    })
    const [isLoadModal,setIsLoadModal] = useState(false)
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const postEditData = async () => {
        setIsLoading(true)
        try {

            formData.set('name',prodData.name)
            formData.set('price',String(prodData.price))
            formData.set('quantity',String(prodData.quantity))
            formData.set('description',prodData.description)
            // for (const pair of formData.entries()) {
            // console.log(`${pair[0]}, ${pair[1]}`);
            // }
            await postProds(formData,adminUser)
            toast('عملیات با موفقیت انجام شد',toastData)
            setIsLoading(false)

        }catch (err:any) {
            toast.error(err.response.data.message,toastData)
            setIsLoading(false)
        }

    }
    // useEffect( () => {
    //     setIsLoadModal(true)
    //      getSingleProd(id).then(res=> {
    //         proData.push(res.data.product)
    //     }).then(samp=>setIsLoadModal(false))
    // }, []);

    return(
        <>
            <div className='BackDrop' style={{display:ShowModal?'block':'none'}} onClick={CloseModal}></div>
            {
                !isLoadModal?<div className='ModalBox' style={{transform:ShowModal?'translateX(0)':'translateX(-100vw)',
                    opacity:ShowModal?'1':'0'}} >
                    <CloseIcon color='error' onClick={CloseModal} className='CloseIcon'/>
                    <h1 style={{alignSelf:'center'}}>ویرایش کالا</h1>
                    <div className='inpModalAdd'>
                        <p style={{alignSelf:"flex-start"}}>نام کالا:</p>
                        <TextField
                            value={prodData.name}
                            label='نام کالا را وارد کنید...' variant='standard'
                            onChange={(e:ChangeEvent)=>setProdData({...prodData,name:(e.target as HTMLInputElement).value})}/>
                    </div>
                    <div style={{ width: '100%',display:'flex',justifyContent:'space-around',paddingTop:'1.5rem'}}>
                        <div >
                            <label>
                                تعداد:
                                <input
                                    type='number'
                                    value={prodData.quantity}
                                    style={{width: '4rem',height:'2rem',marginRight:'2.5rem',backgroundColor:'transparent'}}
                                    onChange={(e:ChangeEvent)=>setProdData({...prodData,quantity:+(e.target as HTMLInputElement).value})}/>
                            </label>
                        </div>
                        <div>
                            <label>
                                قیمت:
                                <input
                                    type='number'
                                    value={prodData.price}
                                    style={{width: '5rem',height:'2rem',marginRight:'2.5rem',backgroundColor:'transparent'}}
                                    onChange={(e:ChangeEvent)=>setProdData({...prodData,price:+(e.target as HTMLInputElement).value})}/>
                            </label>
                        </div>
                    </div>

                    <div className='inpModalAdd'>
                        <h5 style={{alignSelf:"flex-start"}}>توضیحات:</h5>
                        <TextField
                            value={prodData.description}
                            label='توضیحات'
                            style={{width:'100%',overflow:"auto"}}
                            onChange={(e:ChangeEvent)=>setProdData({...prodData,description:(e.target as HTMLInputElement).value})}/>
                    </div>
                    <Button
                        style={{alignSelf: 'center',width:'10rem'}}
                        color='success'
                        disabled={isLoading}
                        variant='contained'
                        onClick={postEditData}>{!isLoading?"ویرایش کالا":<CircularProgress color="inherit" />}</Button>
                </div>:null
            }

        </>
    );
}

