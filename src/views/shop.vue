<template>
    <d  iv>
        <div class="banner2">
     <h4>#our store</h4>
     <h2>Up To <span>70% Off </span> - All T-Shirts</h2>
     <button>explore more</button>
    </div>
    </d>
    <div class="allproducts">
        <div class="mainbox">
         <div class="box" v-for="thebox in features">
           <div class="image">
            <img :src="thebox.img" alt="">
           </div>
           <div class="content">
                <span>addidas</span>
                <h3>{{ thebox.name }}</h3>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div class="price">
                    <h4>${{ thebox.price }}</h4>
                    <div class="count">
                      <i @click="add(thebox.id)" class="fa-solid fa-plus"></i>
                      <p >
                        <span v-for="bask in basket">{{bask.id == thebox.id ? bask.item : "" }}</span>
                      </p>
                      <i @click="minus(thebox.id)" class="fa-solid fa-minus"></i>
                    </div>
                    <i @click="addtocart(thebox.id)" class="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        </div>
        
         <div class="box" v-for="thebox in arrivals">
           <div class="image">
            <img :src="thebox.img" alt="">
           </div>
           <div class="content">
                <span>addidas</span>
                <h3>{{ thebox.name }}</h3>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div class="price">
                    <h4>${{ thebox.price }}</h4>
                    <div class="count">
                        <i @click="add(thebox.id)" class="fa-solid fa-plus"></i>
                      <p >
                        <span v-for="bask in basket">{{bask.id == thebox.id ? bask.item : "" }}</span>
                      </p>
                      <i @click="minus(thebox.id)" class="fa-solid fa-minus"></i>
                    </div>
                    <i @click="addtocart(thebox.id)" class="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        </div>
        
     
      </div>
    </div>
</template>

<script>
import {ref , computed , onMounted} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import axios from 'axios'
export default {
    setup(){
        const store = useStore();
        const router = useRouter();


        let features = computed(()=>{
            return store.state. featured
        });
  let arrivals = computed(()=>{
    return store.state.arivals;
  });




  let basket = computed(()=>{
    return store.state.basket;
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
      
    }



  let addtocart = (id)=>{
    let cart = basket.value.filter((e)=> e.id == id);
    console.log(cart);
    if(cart.length < 1){
    store.commit('add', id);
        console.log(basket.value);
        router.push('/cart');
    } else{
      router.push('/cart');
    }
    
    }
 

    return{features , arrivals , minus , add , basket ,addtocart}
    }
}
</script>

<style lang="scss" >
  @import '../sass/main.scss';


.banner2{
    @include banner('../assets/img/banner/b1.jpg', 50px , 50px , 300px);
    margin-top: 50px;
  button{
    @include specialbtn(10px , 50px);
    color: #fff;
  }
  color: #fff;
  gap: 20px;
  h2{
    font-size: 20px;
    span{
      color: tomato;
    }
  }
  h4{
    font-size: 35px;
  }
}

.allproducts{
    @include boxes( 3 , 100% , 40px);
 margin: 10px 2%;
}




@media(max-width: 920px){
    .allproducts{
      .mainbox{
        grid-template-columns: repeat(2 , 1fr);
      }
    }
  }
  @media(max-width: 700px){
    .allproducts{
      .mainbox{
        grid-template-columns: repeat(1 , 1fr);
      }
    }
  }

</style>