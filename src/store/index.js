import { createStore } from 'vuex'
import axios from 'axios';




export default createStore({
  state: {
    thenum: JSON.parse(localStorage.getItem("data")) == null ? 0 :  JSON.parse(localStorage.getItem("data")).map((e)=>e.item).reduce((x,y)=>x+y,0),
    basket:JSON.parse(localStorage.getItem("data")) == null ? [] :  JSON.parse(localStorage.getItem("data")),
    featured:[
      {
       "id": 1,
       "img": "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
       "name": "new t-shirt 1",
        "price": 70
       },
      {
       "id": 2,
       "img": "https://images.unsplash.com/photo-1532296075534-cc428d395281?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
       "name": "new t-shirt 2",
        "price": 150
       },
      {
       "id": 3,
       "img": "https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
       "name": "new t-shirt 3",
        "price": 100
       },
      {
       "id": 4,
       "img": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
       "name": "new t-shirt 4",
        "price": 200
       },
      {
       "id": 5,
       "img": "https://images.unsplash.com/photo-1544995228-a7a3abc39d89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
       "name": "new t-shirt 5",
        "price": 80
       },
      {
       "id": 6,
       "img": "https://images.unsplash.com/photo-1468283268201-f31115a19e2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
       "name": "new t-shirt 6",
        "price": 90
       },
      {
       "id": 7,
       "img": "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=503&q=80",
       "name": "new t-shirt 7",
        "price": 95
       },
      {
       "id": 8,
       "img": "https://images.unsplash.com/photo-1528905895600-30137e04d936?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
       "name": "new t-shirt 8",
        "price": 120
       }
],
"arivals":[
  {
   "id": 9,
   "img": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
   "name": "new t-shirt 1",
    "price": 70
   },
  {
   "id": 10,
   "img": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
   "name": "new t-shirt 2",
    "price": 150
   },
  {
   "id": 11,
   "img": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
   "name": "new t-shirt 3",
    "price": 100
   },
  {
   "id": 12,
   "img": "https://images.unsplash.com/photo-1589310243389-96a5483213a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
   "name": "new t-shirt 4",
    "price": 200
   },
  {
   "id": 13,
   "img": "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
   "name": "new t-shirt 5",
    "price": 80
   },
  {
   "id": 14,
   "img": "https://images.unsplash.com/photo-1588795904317-2f4ab1a0a852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
   "name": "new t-shirt 6",
    "price": 90
   },
  {
   "id": 15,
   "img": "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
   "name": "new t-shirt 7",
    "price": 95
   },
  {
   "id": 16,
   "img": "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
   "name": "new t-shirt 8",
    "price": 120
   }
],
    searchcart:[],
  },
  getters: {
  },
  mutations: {
    add(state , playload){
       let search = state.basket.find((e)=> e.id == playload);
       if(search == undefined){
        state.basket.push({
          id: playload,
          item:1,
        });
       } else{
        search.item += 1;
       }
       
       localStorage.setItem("data", JSON.stringify(state.basket));
      //  state.basket.push({
      //   id: playload,
      //   item:1,
      //  });
      
      // update(playload);
      state.thenum = state.basket.map((e)=>e.item).reduce((x,y)=> x+y);
    
    },
    minus(state , playload){
       let search = state.basket.find((e)=> e.id == playload);
      if(search == undefined) return;
      else if(search.item == 0) return;
     else{
     search.item -= 1;
     }

     state.thenum = state.basket.map((e)=>e.item).reduce((x,y)=> x+y);
     state.basket = state.basket.filter((e)=> e.item !== 0);
     localStorage.setItem("data", JSON.stringify(state.basket));

    
     
    },
 
  
    getdatacart(state , playload){
        state.searchcart = playload;

        state.thenum = state.basket.map((e)=>e.item).reduce((x,y)=> x+y,0);
    },
  },
  actions:{
 
    async getcart(context){
         let arr = [this.state.featured , this.state.arivals];

        let search = this.state.basket.map((f)=>{
          return arr[1].find((e)=> e.id == f.id) || arr[0].find((e)=> e.id == f.id);
         });
         
         context.commit('getdatacart',search);
         console.log(search);
    },
  },
  modules: {
  }
})
