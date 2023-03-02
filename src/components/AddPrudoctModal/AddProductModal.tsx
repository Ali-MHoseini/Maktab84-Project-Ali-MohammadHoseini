import React, {ChangeEvent, MouseEventHandler, useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";
interface Modal {
    CloseModal:() => void;
    ShowModal:boolean
}
interface prodData {
    name:string,
    price:number,
    quantity:number,
    image:string,
    subCategory:string,
    description:string,
}

const best = [{ label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },]

export const AddProductModal = ({ShowModal,CloseModal}:Modal) => {

    const [prodData,setProdData] = useState<prodData>({
        name:"",
        price:0,
        quantity:0,
        image:"",
        subCategory:"",
        description:"",
    })

    return(
        <>
            <div className='BackDrop' style={{display:ShowModal?'block':'none'}} onClick={CloseModal}></div>
            <div className='ModalBox' style={{transform:ShowModal === true?'translateX(0)':'translateX(-100vw)',
                opacity:ShowModal === true?'1':'0'}} >
                <CloseIcon color='error' onClick={CloseModal} className='CloseIcon'/>
                <h1 style={{alignSelf:'center'}}>افزودن کالا</h1>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        تصویر کالا:
                        <TextField
                            variant='standard'
                            value={prodData.image}
                            style={{marginRight:'1rem',width:'15rem'}}
                            onChange={(e:ChangeEvent)=>setProdData({...prodData,image:(e.target as HTMLInputElement).value})}/>
                        <input
                            type='file'
                            multiple="multiple"
                            style={{direction:'ltr',width:'5.5rem',marginRight:'1rem'}}
                            onChange={(e:ChangeEvent)=>console.log((e.target as HTMLInputElement).files)}/>
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
                            options={best}
                            sx={{ width: '100%' }}
                            onChange={(e:ChangeEvent)=>setProdData({...prodData,subCategory:(e.target as HTMLInputElement).innerText})}
                            renderInput={(params) =>
                                <TextField {...params}
                                     label="دسته بندی ها"
                                     variant='standard'
                                     onChange={(e:ChangeEvent)=>setProdData({...prodData,subCategory:(e.target as HTMLInputElement).innerText})}/>}
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
                    variant='contained'
                    onClick={()=>console.log(prodData)}>ثبت کالا</Button>
            </div>
        </>
    );
}