import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import React,{useState} from 'react'
import Button from "@mui/material/Button";
import Input from '@mui/material/Input'
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AdminProds} from "../../components/AdminProds/AdminProds";
import {QuantityAndPrices} from "../../components/QuantityAndPrices/QuantityAndPrices";
import {AdminOrders} from "../../components/AdminOrders/AdminOrders";

export const Dashboard = () => {
    const adminUser = useSelector((state:any) => state.userInfo.userInfo.bAdmin)
    const navigator = useNavigate()
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return(

        <div className='dashboard'>
            <div>
                        <div className='AdminHeader'>
                            <h1> پنل مدیریت فروشگاه</h1>
                            <Button variant='contained' color='error' onClick={()=> navigator('/')}>بازگشت به صفحه اصلی</Button>
                        </div>

                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab sx={{fontSize:"1.5rem"}} label="کالاها" value="1" />
                                    <Tab sx={{fontSize:"1.5rem"}} label="موجودی و قیمت ها" value="2" />
                                    <Tab sx={{fontSize:"1.5rem"}} label="سفارش ها" value="3" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <AdminProds />
                            </TabPanel>
                            <TabPanel value="2">
                                <QuantityAndPrices />
                            </TabPanel>
                            <TabPanel value="3">
                                <AdminOrders />
                            </TabPanel>
                        </TabContext>
                    </div>


        </div>
    );
}