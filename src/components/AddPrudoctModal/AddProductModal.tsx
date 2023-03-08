import React, {ChangeEvent, useState,} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";
import {postProds} from "../../middleware/api/api";
import {toast} from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import {useSelector} from "react-redux";
interface Modal {
    CloseModal:() => void;
    ShowModal:boolean,
    categoryList:any
}
interface prodData {
    name:string,
    price:number,
    quantity:number,
    subCategory:string,
    description:string,
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


export const AddProductModal = ({ShowModal,CloseModal,categoryList}:Modal) => {

    const [isCatLoading,setIsCatLoading] = useState<boolean>(false)
    const [category,setCategory] = useState<string>('')



    const adminUser = useSelector((state:any) => state.userInfo.userToken)
    const formData = new FormData()
    const [prodData,setProdData] = useState<prodData>({
        name:"",
        price:0,
        quantity:0,
        subCategory:"",
        description:"",
    })
    const [isLoading,setIsLoading] = useState(false)
    const postData = async () => {
        setIsCatLoading(true)
        try {

                formData.set('name',prodData.name)
                formData.set('price',String(prodData.price))
                formData.set('quantity',String(prodData.quantity))
                formData.set('subCategory',category)
                formData.set('description',prodData.description)
                // for (const pair of formData.entries()) {
                // console.log(`${pair[0]}, ${pair[1]}`);
                // }
                await postProds(formData,adminUser)
                toast('عملیات با موفقیت انجام شد',toastData)
                setIsCatLoading(false)

        }catch (err:any) {
            toast.error(err.response.data.message,toastData)
            setIsCatLoading(false)
        }

    }

    const createImage = (e:ChangeEvent) => {
        const files = (e.target as HTMLInputElement).files;
        if (files && files[0]) {
            const image = files[0];
            console.log(image)
            formData.set('image', image)
        }
    }
    const setProdCat = (value:string):void => {
        const selCat = categoryList.filter(item => item.label === value)
        setCategory(selCat[0].id)

    }
    return(
        <>
            <div className='BackDrop' style={{display:ShowModal?'block':'none'}} onClick={CloseModal}></div>
            <div className='ModalBox' style={{transform:ShowModal?'translateX(0)':'translateX(-100vw)',
                opacity:ShowModal?'1':'0'}} >
                <CloseIcon color='error' onClick={CloseModal} className='CloseIcon'/>
                <h1 style={{alignSelf:'center'}}>افزودن کالا</h1>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        تصویر کالا:
                        <input
                            type='file'
                            style={{direction:'ltr',width:'15rem',marginRight:'1rem'}}
                            onChange={(e:ChangeEvent)=>createImage(e)}/>
                    </div>
                    <div className='inpModalAdd'>
                        <p>نام کالا:</p>
                        <TextField
                            label='نام کالا را وارد کنید...' variant='standard'
                            onChange={(e:ChangeEvent)=>setProdData({...prodData,name:(e.target as HTMLInputElement).value})}/>
                    </div>
                    <div className='inpModalAdd'>
                        <h5> دسته بندی:</h5>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={categoryList}
                            sx={{ width: '100%' }}
                            onChange={(e:ChangeEvent):void=>setProdCat((e.target as HTMLInputElement).innerText)}
                            renderInput={(params) =>
                                <TextField {...params}
                                     label={!isCatLoading?"دسته بندی ها":"در حال بارگذاری"}
                                     variant='standard'
                                     />}
                        />
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
                        <h5>توضیحات:</h5>
                        <TextField
                            label='توضیحات'
                            style={{width:'100%',overflow:"auto"}}
                            onChange={(e:ChangeEvent)=>setProdData({...prodData,description:(e.target as HTMLInputElement).value})}/>
                    </div>
                <Button
                    style={{alignSelf: 'center',width:'10rem'}}
                    color='success'
                    disabled={isLoading}
                    variant='contained'
                    onClick={postData}>{!isLoading?"ثبت کالا":<CircularProgress color="inherit" />}</Button>
            </div>
        </>
    );
}