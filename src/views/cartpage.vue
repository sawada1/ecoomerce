<template>
    <div class="cartbanner">
        <h1>#cart</h1>
    </div>

    <div class="formcart" v-if="alldata.length >=  1">
      <div class="header">
        <h3>product</h3>
        <div class="text1">
         <h3>Quantity</h3>
         <h3>Subtotal</h3>
        </div>
      </div>
      <div class="maincart" >
       <div class="thecart" v-for="data in alldata">
          <div class="theimage">
           <img :src="data.img" alt="">
             <div class="text">
               <h3>{{ data.name }}</h3>
               <h3>price: <span>{{ data.price }}</span></h3>
               <button @click="removeItem(data.id)">remove</button>
             </div>
          </div>
          <div class="countt" >
          <div class="main" v-for="bask in basket">
            <!-- bask.id == thebox.id ? bask.item : "" -->
            <div class="thecount" v-if="bask.id == data.id">
              <i @click= add(data.id) class="fa-solid fa-plus"></i>
                <span>{{ bask.item }}</span>
                <i  @click="minus(data.id)" class="fa-solid fa-minus"></i>
            </div>
            <div class="theprice" v-if="bask.id == data.id">
             <span>${{ bask.item * data.price }}</span>
            </div>
          </div>
          
          </div>
       </div>
    
      </div>
      <div class="total">
      <div class="mainn">
        <div class="boxx">
          <p>subtotal</p>
          <span>{{ thetotal }}</span>
        </div>
        <div class="boxx">
          <p>tax</p>
          <span>5%</span>
        </div>
        <div class="boxx">
          <p>total</p>
          <span>{{ (thetotal * 0.05) + thetotal }}</span>
        </div>  
      </div>
         <button>proceed to checkout</button>
      </div>
    </div>
    <div class="empty" v-else>
       <h1>this cart is empty</h1>
       <h3>Cart Is Empty Please Back To Check Your Items</h3>
       <router-link to="/">
        <button>back to home</button>       
       </router-link>
    </div>
</template>

<script>
import axios from 'axios';
import {ref , computed, onMounted} from 'vue';
import {useStore} from 'vuex'

export default {
  setup(){
    const store = useStore();


   let basket = computed(()=>{
    return store.state.basket;
   });

   let alldata = computed(()=>{
    return store.state.searchcart
   });
   
   
   onMounted(()=>{
    console.log(basket.value);
    store.dispatch('getcart'); 
   });



   let serach = ref([]);
   

    let add = (id)=>{

        store.commit('add', id);
        console.log(basket.value);

        basket.value.map((e)=>{
          return serach.value = basket.value.find((f)=>f.id == id) || [];
        });
        console.log(serach.value);
        // localStorage.setItem("data" , JSON.stringify(basket.value));

        
    }



    let minus = (id)=>{

        store.commit('minus', id);
        console.log(basket.value);

        basket.value.map((e)=>{
          return serach.value = basket.value.find((f)=>f.id == id) || [];
        });
        console.log(serach.value);
       store.dispatch('getcart');
    }

    let removeItem = (id)=>{
      let temp = basket.value.filter((e)=> e.id !== id)
        console.log(temp);
        store.state.basket = temp;
        // store.dispatch('getcart');
    localStorage.setItem("data",JSON.stringify(basket.value));
    store.dispatch('getcart');
    }


    let thetotal = computed(()=>{
      return basket.value.map((e)=> {
        let serach = alldata.value.find((f)=> f.id == e.id) || [];
        return serach.price * e.item
      }
      ).reduce((x,y)=>x+y,0);
    })

   return{alldata, basket , add , minus , removeItem , thetotal}

  }


}
</script>

<style lang="scss">
  @import '../sass/main.scss';

  .cartbanner{
    @include banner('../assets/img/about/banner.png', 50px , 50px , 300px);
     margin-top: 50px;
     color: #fff;
  }
.formcart{
  i{
    cursor: pointer;
  }
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // margin: 20px 10%;
  .header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    background-color: $maincolor;
    h3{
      font-size: 16px;
    }
    .text1{
      display: flex;
      align-items: center;
      gap: 30px;
    }
  }


  .maincart{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 30px;
    padding: 5px;
    .thecart{
   display: flex;
   align-items: center;
   width: 100%;
   justify-content: space-around;
   padding: 10px;
   border-bottom: 1px solid $maincolor;
   gap: 5px;
.theimage{
  display: flex;
  align-items: center;
  gap: 10px;
  .text{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    h3{
      font-size: 16px;
    }
    button{
      padding: 5px 15px;
      background-color: tomato;
      border: none;
      border-radius: 20px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      transition: 0.5s;
      &:hover{
        transform: translateX(10px);
      }
    }
  }
  img{
    width: 120px;
    object-fit: cover;
  }
}
.countt{
  width: 100%;
  .main{
    display: flex;
  gap: 50px;
  padding: 15px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  .thecount{
  display: flex;
  align-items: center;
  gap: 5px;
}
  }
  
}

}
  }
 

  .total{
    margin-top: 50px;
    display: flex;
    padding: 20px;
    align-items: center;
    flex-direction: column;
    background-color: $maincolor;
    width: 100%;
    border-radius: 10px;
    .mainn{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 30px;
      .boxx{
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 30px;
      p{
        font-size: 20px;
        padding: 10px;
        background-color: #fff;
        border-radius: 10px;
      }
      span{
        color: #fff;
        font-size: 30px;
      }
    }

    }
    button{
      font-size: 20px;
      padding: 10px 20px;
      border: none;
      background-color: #fff;
      color: $maincolor;
      cursor: pointer;
      border-radius: 20px;
    }
   
  }
  
}


.empty{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: crimson;
  color: #fff;
  padding: 30px;
  margin-bottom: 50px;
  gap: 30px;
  button{
    padding: 10px 20px;
    color: #fff;
    background-color: #333;
    border: none;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
      background-color: #fff;
      color: #333;
    }
  }
}


// @media(max-width:650px){
//   .formcart{
//     width: 100%;
//     margin: 0px;
//   }
// }

@media(max-width:380px){
  .formcart{
    .maincart{

      .thecart{
      .countt{
      .main{
        gap: 10px;
      }
    }
    }

    }
    
    
  }
}

</style>