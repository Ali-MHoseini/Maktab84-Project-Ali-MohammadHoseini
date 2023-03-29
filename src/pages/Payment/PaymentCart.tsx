import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./PaymentCart.css";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Button from '@mui/material/Button'

export const PaymentCart = () => {

    const[payment,setPayment] = useState('')
    const navigate = useNavigate()
    const totalPrice = useSelector((state:any) => state.Cart.Total)

  return (
    <div style={{marginTop:'2rem',marginBottom:'2rem'}}>
    <div className="container">
       <div id="Checkout" className="inline">
      <h1>درگاه پرداخت اینترنتی</h1>
      <div className="card-row">
          <span className="visa"></span>
          <span className="mastercard"></span>
          <span className="amex"></span>
          <span className="discover"></span>
      </div>
      <form>
          <div className="form-group">
              <label>مبلغ قابل پرداخت:</label>
              <div className="amount-placeholder">
                  <span>{totalPrice}</span>
                  <span>تومان</span>
              </div>
          </div>
          <div className="form-group" style={{display: 'flex',flexDirection: 'column'}}>
              <label>شماره کارت:</label>
              <input id="CreditCardNumber" className="null card-image inputs form-control" type="text"></input>
          </div>
          <div className="expiry-date-group form-group">
              <label>تاریخ انقضا:</label>
              <input id="ExpiryDate" className="form-control inputs" type="text" placeholder="MM / YY" maxLength={7} ></input>
          </div>
          <div className="security-code-group form-group">
              <label>رمز کارت:</label>
              <div className="input-container" >
                  <input id="SecurityCode" className="form-control inputs" type="text" ></input>
                  <i id="cvc" className="fa fa-question-circle"></i>
              </div>
              <div className="cvc-preview-container two-card hide">
                  <div className="amex-cvc-preview"></div>
                  <div className="visa-mc-dis-cvc-preview"></div>
              </div>
          </div>
          <div className="zip-code-group form-group">
              <label>CVV2:</label>
              <div className="input-container">
                  <input id="ZIPCode" className="form-control inputs" onChange={(e) => setPayment(e.target.value)}
                         type="text" maxLength={10}></input>
                  <a tabIndex={0} role="button" data-toggle="popover" data-trigger="focus" data-placement="left"
                     data-content="Enter the ZIP/Postal code for your credit card billing address.">
                      <i className="fa fa-question-circle"></i></a>
              </div>
          </div>
          {
            payment === '0' ?
            (
                <Button variant="contained" color="warning"
                    onClick={()=>navigate({pathname:'/payment_result', search:'?faild'})}>پرداخت</Button>
            )
            :
            (
                <Button variant="contained" color="info"
                    onClick={()=>navigate({pathname:'/payment_result', search:'?success'})}>پرداخت</Button>
            )
          }
      </form>
  </div>
        </div>
    </div>
  )
}