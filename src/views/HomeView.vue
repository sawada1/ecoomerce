<template>
  <div class="home">
     <div class="landing">
       <div class="text">
         <h4>Trade-In-Order</h4>
         <h2>Super Value Deals</h2>
         <h3>On All Products</h3>
         <button>shop now</button>
       </div>
     </div>
  </div>
  <div class="theicons">
        <div class="icons-container">
            <div class="box">
                <img src="../assets/img/features/f1.png" alt="">
                <span class="sp1">free shipping</span>
            </div>
            <div class="box">
                <img src="../assets/img/features/f2.png" alt="">
                <span class="sp2">free shipping</span>
            </div>
            <div class="box">
                <img src="../assets/img/features/f3.png" alt="">
                <span class="sp3">free shipping</span>
            </div>
            <div class="box">
                <img src="../assets/img/features/f4.png" alt="">
                <span class="sp4">free shipping</span>
            </div>
            <div class="box">
                <img src="../assets/img/features/f5.png" alt="">
                <span class="sp5">free shipping</span>
            </div>
            <div class="box">
                <img src="../assets/img/features/f6.png" alt="">
                <span class="sp6">free shipping</span>
            </div>
        </div>
    </div>



    <div class="fetured">
      <div class="textt">
       <h2>Featured Products</h2>
       <p>Summer Collection New Modern Design</p>
      </div>

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
                      <!-- <span v-if="serach.length < 1">0</span> -->
                      <p v-if="basket.length >= 1">
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


    <div class="banner">
     <h4>Repair Services</h4>
     <h2>Up To <span>70% Off </span> - All T-Shirts</h2>
     <button>explore more</button>
    </div>

    <div class="newarival">
      <div class="textt">
       <h2>New Arrivals</h2>
       <p>Summer Collection New Modern Design</p>
      </div>
      
      <div class="mainbox">
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
                      <!-- <span v-if="serach.length < 1">0</span> -->
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

    <div class="bigbanner">
    <div class="text1">
      <span>spring/ summer</span>
      <h2>Upcomming Season</h2>
      <p>The Best Classic Dress Is On Sale At Our Store</p>
      <button>collection</button>   
    </div>
    <div class="text2">
      <span>spring/ summer</span>
      <h2>Upcomming Season</h2>
      <p>The Best Classic Dress Is On Sale At Our Store</p>
      <button>collection</button>   
    </div>
 
    </div>
    <div class="smallbanner">
    <div class="text1">
      <span>spring/ summer</span>
      <h2>Upcomming Season</h2>
      <p>The Best Classic Dress Is On Sale At Our Store</p>
      <button>collection</button>   
    </div>
    <div class="text2">
      <span>spring/ summer</span>
      <h2>Upcomming Season</h2>
      <p>The Best Classic Dress Is On Sale At Our Store</p>
      <button>collection</button>   
    </div>
    <div class="text3">
      <span>spring/ summer</span>
      <h2>Upcomming Season</h2>
      <p>The Best Classic Dress Is On Sale At Our Store</p>
      <button>collection</button>   
    </div>
 
    </div>









</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import {ref , computed , onMounted} from 'vue';
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
  name: 'HomeView',
  components: {
  },

  setup(){
    const store = useStore();
     const router = useRouter();

    // onMounted(()=>{
    //   store.dispatch('getalldata');
    //   store.dispatch('getalldata2');
    // });



    let features = computed(()=>{
      return store.state.featured;
    });
  let arrivals = computed(()=>{
    return store.state.arivals;
  });


  // let features = ref([]);
  // let arrivals = ref([]);


  let basket = computed(()=>{
    return store.state.basket;
   });

   let serach = ref([]);
   
   let mainBasket = ref(JSON.parse(localStorage.getItem("data")));

    let add = (id)=>{

        store.commit('add', id);
        console.log(basket.value);
        
    }



    let minus = (id)=>{

        store.commit('minus', id);
        console.log(basket.value);
      
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
 

    return{features , arrivals , add , basket , serach , minus , mainBasket , addtocart}
  }
}
</script>




<style lang="scss">
  @import '../sass/main.scss';

.home{
  margin-top: 80px;
  .landing{
   background-image: url('../assets/img/landing.jpg');
     background-size: cover;
    height: 500px;
    padding: 30px;
    .text{
      padding: 50px;
       display: flex;
       align-items: flex-start;
       flex-direction: column;
       gap: 20px;
       justify-content: center;
         h2{
          font-size: 30px;
         }
         h4{
          font-size: 20px;
         }
         h3{
          font-size: 32px;
          color: $maincolor;
         }
      button{
        @include specialbtn(10px,50px);
        color:#fff;
        &:hover{
          transform: translateX(10px);
        }
      }
    }
  }
}

.theicons{
margin-top: 80px;
margin-bottom: 50px;
  .icons-container{
    display: grid;
    grid-template-columns: repeat(6 , 1fr);
    width: 100%;
    .box{
      width: 80%;
      display: flex;
      align-items: center;
      flex-direction: column;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.291);
      background-color: #fff;
      border-radius: 20px;
      margin: 10px;
      padding: 5px;
      span{
        padding: 5px;
        margin-top: 8px;
        border-radius: 10px;
        color: #fff;
        &.sp1{
          background-color: darkolivegreen;
        }
        &.sp2{
          background-color: pink;
        }
        &.sp3{
          background-color: wheat;
        }
        &.sp4{
          background-color: springgreen;
        }
        &.sp5{
          background-color: crimson;
        }
        &.sp6{
          background-color: cornflowerblue;
        }
      }
    }
  }
}



.fetured{
  .textt{
   @include centertext();
  }

  .mainbox{
      display: grid;
      grid-template-columns: repeat(3 , 1fr);
      gap: 30px;
      width: 95%;
      margin: 10px 2%;
      // margin: 20px 10%;
      .box{
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.364);
        cursor: pointer;
        transition: 0.5s;
        &:hover{
          transform: translateY(-10px);
        }
        .image{
 
          width: 100%;
          height: 100%;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
          }
        }

        .content{
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 7px 20px;
          align-items: flex-start;
          .stars{
            display: flex;
            align-items: center;
            gap: 5px;
            color: yellow;
          }
          .price{
            margin-top: 20px;
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;
            h4{
                font-size: 25px;
              }
            .count{
              display: flex;
              align-items: center;
              gap: 20px;
             
              i{
                cursor: pointer;
                font-size: 16px;
                background-color: transparent;
                color: #333;
              }
            }
            i{
              font-size: 20px;
              color: $maincolor;
              border-radius: 50%;
              padding: 13px;
              background-color: #fff;
            }
          }
        }

      }
  }

}


.banner{
  @include banner('../assets/img/banner/b2.jpg', 50px , 50px , 300px);
  button{
    @include specialbtn(10px , 50px);
    color: #fff;
  }
  color: #fff;
  gap: 20px;
  h2{
    font-size: 35px;
    span{
      color: tomato;
    }
  }
}

.newarival{
 .textt{
  @include centertext();
 }
 @include boxes(3 , 95% , 40px);
 margin: 10px 2%;
}


.smallbanner{
  margin-top: 50px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(3 , 1fr);
  gap: 30px;
  
  width: 90%;
  margin: 10px 5%;
  .text1,.text2,.text3{
    padding: 30px;
    h2{
      color: tomato;
    }
    p{
      color: black;
    }
    height: 200px;
    background-position: 0%;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    gap: 20px;
    button{
      background-color: $maincolor;
      border-radius: 20px;
      border: none;
      padding: 10px 15px;
      transition: 0.5s;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
      &:hover{
        background-color: #fff;
        color: $maincolor;
      }
    }  
  }
  .text1{
    background-image: url('../assets/img/banner/b7.jpg');
  }
  .text2{
    background-image: url('../assets/img/banner/b4.jpg');
  }
  .text3{
    background-image: url('../assets/img/banner/b18.jpg');
  }
}

.bigbanner{
  margin-top: 50px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(2 , 1fr);
  gap: 30px;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  .text1,.text2{
    height: 250px;
    background-position: 0%;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    gap: 20px;
    button{
      background-color: $maincolor;
      border-radius: 20px;
      border: none;
      padding: 15px 25px;
      transition: 0.5s;
      font-size: 18px;
      color: #fff;
      cursor: pointer;
      &:hover{
        background-color: #fff;
        color: $maincolor;
      }
    }
  }
  .text1{
    background-image: url('../assets/img/banner/b10.jpg');

  }
  .text2{
    background-image: url('../assets/img/banner/b17.jpg');
  }
}













@media(max-width:780px){
  .home{
    margin-top: 0px;
    .landing{
      background-position: right;
    }
  }
}


@media(max-width:1000px){
  .theicons{
    .icons-container{
      grid-template-columns: repeat(5,1fr);
    }
  }
}
@media(max-width:892px){
  .theicons{
    .icons-container{
      width: 100%;
      grid-template-columns: repeat(4,1fr);
    }
  }
}
@media(max-width:800px){
  .theicons{
    .icons-container{
      width: 100%;
      grid-template-columns: repeat(3,1fr);
  
    }
  }
}
@media(max-width:750px){
  .theicons{

    .icons-container{
      width: 100%;
      grid-template-columns: repeat(2,1fr);
      gap: 10px;
      .box{
        width: 100%;
        margin: 10px;
      }
    }
  }
}
@media(max-width:600px){
  .theicons{
    .icons-container{
      width: 100%;
      grid-template-columns: repeat(1,1fr);
      gap: 70px;
      .box{
        margin: 20px 5px;
        width: 100%;
        padding: 20px;
      }
    }
  }

  .home{
    .landing{
     background-position: 50%;
  }
  }
 
}


@media(max-width:436px){
  .home{
    .landing{
      .text{
        width: 100%;
        justify-content: center;
        
      
      }
  }
  }
}



@media(max-width:840px){
  .bigbanner{
    grid-template-columns: repeat(1,1fr);
    .text1,.text2{
      height: 500px;
         background-position: 70%;
  }
}

}
@media(max-width:1000px){
  .smallbanner{
    grid-template-columns: repeat(2 , 1fr);
  }
}
@media(max-width:700px){
  .smallbanner{
    grid-template-columns: repeat(1 , 1fr);
    .text1,.text2,.text3{
      height: 400px;
      background-position: 70%;
    }
  }
}
</style>
