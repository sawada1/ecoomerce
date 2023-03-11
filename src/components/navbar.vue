<template>
    <div>
        <header>
    <div class="nav-bar">
        <i @click="toogle" class="fa-solid fa-bars" id="bar"></i>
          <router-link to="/">
            <h2><span>sawada</span> store</h2>          
          </router-link>
            <div class="list" :class="{'active': check}">
                <i @click="toogle"  class="fa-solid fa-xmark close"></i>
                <ul>
                    <li>
                     <router-link to="/">home</router-link>
                    </li>
                    <li>  <router-link to="/shop">shop</router-link></li>
                    <li>  <router-link to="/blog">blog</router-link></li>
                    <li>  <router-link to="/contact">contact</router-link></li>
                    <li>  <router-link to="/about">about</router-link></li>
                </ul>
            </div>


                 <div class="cart">
                 <router-link to="/cart">
                    <i class="fa-solid fa-cart-shopping cart-icon "></i>                 
                 </router-link>
                <span id="cart_total">{{ thenum }}</span>      
                 </div>
           
            
            

    </div>
</header>
    </div>
</template>

<script>
import {ref , computed , onMounted} from 'vue';
import {useStore} from 'vuex';
export default {

    setup(){
        const store = useStore();
        let check = ref(false);
        let toogle =()=>{
            check.value = !check.value;
        }


        // let thenum = ref(0);
        const thenum = computed(()=>{
            return store.state.thenum;
        });

        // onMounted(()=>{
        //     thenum.value = basket.value.map((e)=>e.item).reduce((x,y)=> x+y)
        // })


        return{check , toogle , thenum}
    }
}
</script>

<style lang="scss">
@import '../sass/main.scss';
a{
text-decoration: none;
color: #fff;
}
.nav-bar{
    z-index: 11111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 23px;
    background-color: rgb(242, 226, 199);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    h2{
        font-size: 30px;
        color: #333;
        span{
            color: $maincolor;
        }
    }
    #bar{
        display: none;
    }

    .list{
        .close{
            display: none;
        }
        ul{
            display: flex;
            align-items: center;
            gap: 10px;
            li{
                margin: 0px 10px;
                a{
                    color: #333;
                    text-decoration: none;
                    font-size: 22px;
                    transition: 0.5s;
                    &:hover{
                        color: $maincolor;
                        text-decoration: underline;
                    }
                    &.router-link-exact-active {
                        color: $maincolor;
                        text-decoration: underline;                 }
                }
            }
        }
    }
.cart{
    display: flex;
    align-items: center;
    gap: 2px;
    a{
        color: $maincolor;
    }
    i{
        font-size: 30px;
        cursor: pointer;
    }
    span{
        font-size: 20px;
    }
}
}


@media (max-width: 780px){
    .nav-bar{
        position: relative;
        #bar{
            display: block;
            font-size: 30px;
           cursor: pointer;
        }
        .list{
            position: fixed;
            top: 0;
            left: 0;
            background-color: $maincolor;
            height: 100vh;
            width: 300px;
            transition: 0.5s;
            transform: translateX(-100%);
            &.active{
                transform: translateX(0);
            }
            .close{
                display: block;
                position: absolute;
                top: 5%;
                right: 10%;
                font-size: 30px;
                border: 2px solid #fff;
                border-radius: 50%;
                padding: 15px 20px;
                cursor: pointer;
                color: #fff;
            }
            ul{
                flex-direction: column;
                height: 100%;
                justify-content: center;
                gap: 40px;
                li{
                    a{
                        font-size: 30px;
                        color: #fff;

                        &.router-link-exact-active {
                        color: #333;
                        text-decoration: underline;              
                       }
                       &:hover{
                        color: #333;
                        text-decoration: underline;
                    }
                    }
                }
            }
        }
    }
}
</style>