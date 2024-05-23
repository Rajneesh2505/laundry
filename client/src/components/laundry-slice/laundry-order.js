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
       products:[]
    },
    reducers:{
        addName:(state,action)=>{
obj.ProductName=action.payload
        },
        addValue:(state,action)=>{
            obj.quantity+=Number(action.payload)
             
        },
        addWashType:(state,action)=>{
            obj.washtype.push(action.payload)
        },
        addPrice:(state,action)=>{
            obj.price+=Number(action.payload)
        },
        confirmOrder:(state,action)=>{
            state.products.push(obj)
            obj={
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