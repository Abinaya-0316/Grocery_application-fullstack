import { Component, OnInit } from '@angular/core';
declare var Razorpay: any;23
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  {
  PayNow(){
    const amountInput = document.getElementById("amountInput") as HTMLInputElement;
    const userAmount = amountInput.valueAsNumber;
    const checkoutAmount = userAmount * 100; 
    const RozarpayOptions = {
     
     description: 'Sample Razorpay demo',
     currency: 'INR',
     amount: checkoutAmount,
     name: 'Abi',
     key: 'rzp_test_nbrjUKziIancUK',
     image: 'https://i.imgur.com/FApqk3D.jpeg',
     prefill: {
     name: 'Abinaya',
     email: 'pabinaya2000@gmail.com',
     phone: '9898989898'
     },
     theme: {
     color: '#6466e3'
     },
     modal: {
     ondismiss:  () => {
     console.log('dismissed')
     }
     }
     }
    
     const successCallback = (paymentid: any) => {
     console.log(paymentid);
     }
    
     const failureCallback = (e: any) => {
     console.log(e);
     }
    
     Razorpay.open(RozarpayOptions,successCallback, failureCallback)
    }
  }

