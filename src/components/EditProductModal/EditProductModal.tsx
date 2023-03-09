import React, {ChangeEvent, useEffect, useState,} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";
import {getSingleProd, patchProd, postProds} from "../../middleware/api/api";
import {toast} from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import {useSelector} from "react-redux";
interface Modal {
    CloseModal:() => void;
    ShowModal:boolean,
    id:string,
    description:string,
    price:number,
    quantity:number,
    name:string
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


export const EditProductModal = ({ShowModal,CloseModal,id,description,price,quantity,name}:Modal) => {


    let proData:any = [];

    const adminUser = useSelector((state:any) => state.userInfo.userToken)

    const [prodData,setProdData] = useState({
        name:name,
        price:price,
        quantity:quantity,
        description:description,
    })
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const postEditData = async () => {
        setIsLoading(true)
        try {
            const formData = new FormData();
            await getSingleProd(id).then(res=> {
                proData.push(res.data.product)
            })
            const newData = {...proData[0] ,
                name:prodData.name,
                price:prodData.price,
                quantity:prodData.quantity,
                description:prodData.description
            }

            formData.set('name',newData.name)
            formData.set('price',String(newData.price))
            formData.set('quantity',String(newData.quantity))
            formData.set('description',newData.description)
            formData.set('image',proData[0].image)
            formData.set('subCategory',newData.subCategory._id)
            // for (const pair of formData.entries()) {
            // console.log(`${pair[0]}, ${pair[1]}`);
            // }
            await patchProd(formData,id,adminUser)
            toast('عملیات با موفقیت انجام شد',toastData)
            setIsLoading(false)

        }catch (err:any) {
            toast.error(err.response.data.message,toastData)
            setIsLoading(false)
        }

    }

    return(
        <>
            <div className='BackDrop' style={{display:ShowModal?'block':'none'}} onClick={CloseModal}></div>
            {
                <div className='ModalBox' style={{transform:ShowModal?'translateX(0)':'translateX(-100vw)',
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
                </div>
            }

        </>
    );
}

