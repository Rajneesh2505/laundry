import { createSlice } from "@reduxjs/toolkit";
let obj={
    ProductName:"",
    quantity:0,
    washtype:[],
    price:0
}
const laundrySlice=createSlice({
    name:"laundrySlice",
    initialState:{
       products:[],
       obj:{
        ProductName:"",
        quantity:0,
        washtype:[],
        price:0
    }
    },
    reducers:{
        addName:(state,action)=>{
state.obj.ProductName=action.payload
        },
        addValue:(state,action)=>{
            state.obj.quantity+=Number(action.payload)
             
        },
        addWashType:(state,action)=>{
            state.obj.washtype.push(action.payload)
        },
        addPrice:(state,action)=>{
            state.obj.price+=Number(action.payload)
        },
        confirmOrder:(state,action)=>{
            state.products.push(state.obj)
            state.obj={
                ProductName:"",
                quantity:0,
                washtype:[],
                price:0
            }
        }
    }
})

export const {addValue,addName,addPrice,addWashType,confirmOrder}=laundrySlice.actions
export default laundrySlice.reducer