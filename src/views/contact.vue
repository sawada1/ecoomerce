<template>
    <div class="contactbanner">
        <h4>#Let's Get In Touch</h4>
     <h2>Leave A Message Here</h2>
        
    </div>

    <div class="contact">
      <div class="box">
        <h4>Get In Touch</h4>
        <h3>Visit One Of Our Agency Location Or Contact Us</h3>
        <h5>Head Office</h5>
         <div class="icon">
            <i class="fa-solid fa-envelope"></i>
            <p>Khaledsawada1@gamil.com</p>
         </div>
         <div class="icon">
            <i class="fa-solid fa-phone"></i>
            <p>+201021189596</p>
         </div>
         <p>Monday To Saturday: 9:00am To 12:00</p>
      </div>
      <div class="box">
        <div class="iframe"><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=egypt%20,%20cairo+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe></div>
      </div>
    </div>

    <div class="message">
      <form action="" @click.prevent>
        <p>leave message</p>
        <h3>We Love To Hear From You</h3>
        <input type="text" placeholder="your name">
        <input type="text" placeholder="your email">
        <input type="text" placeholder="subject">
        <textarea style="resize: none;" name="" id="" cols="30" rows="10" placeholder="message"></textarea>
        <button>submit</button>
      </form>
      <div class="images">
       <div class="image">
          <img src="../assets/img/people/1.png" alt="">
          <div class="text">
           <h4>khaled sawada</h4>
            <p>web developer</p>
            <p>phone: +201021189596</p>
            <p>email:khaledsawada1@gmail.com</p>
          </div>
       </div>
       <div class="image">
          <img src="../assets/img/people/2.png" alt="">
          <div class="text">
           <h4>khaled sawada</h4>
            <p>web developer</p>
            <p>phone: +201021189596</p>
            <p>email:khaledsawada1@gmail.com</p>
          </div>
       </div>
       <div class="image">
          <img src="../assets/img/people/3.png" alt="">
          <div class="text">
           <h4>khaled sawada</h4>
            <p>web developer</p>
            <p>phone: +201021189596</p>
            <p>email:khaledsawada1@gmail.com</p>
          </div>
       </div>
      </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
  @import '../sass/main.scss';


.contactbanner{

    @include banner('../assets/img/about/banner.png', 50px , 50px , 300px);
    margin-top: 50px;
    color: #fff;
    h4{
        font-size: 35px;
    }
    h2{
        font-size: 30px;
    }
}

.message{
    width: 90%;
    margin: 100px 5%;
    display: flex;
    padding: 30px;
    align-items: center;
    gap: 20px;
    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 50%;
        input,textarea{
            width: 100%;
            padding: 10px;
            font-size: 18px;
            outline: none;
        }
        button{
            
            padding: 10px 30px;
            cursor: pointer;
            background-color: $maincolor;
            color: #fff;
            border: none;
            border-radius: 10px;
            transition: 0.5s;
            font-size: 20px;
            &:hover{
                background-color: #ccc;
                color: $maincolor;
            }
        }
    }
    .images{
        width: 50%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 50px;
        .image{
           display: flex;
           align-items: center;
           gap: 20px;
        }
    }
}

.contact{
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 30px;
    .box{
        width: 50%;
        height: 300px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        h3{
            font-size: 32px;
            color: $maincolor;
        }
        .icon{
            display: flex;
            align-items: center;
            gap: 7px;
        }
      
    }
}



@media (max-width:880px){
    .message{
        flex-direction: column;
        gap: 100px;
        form{
            width: 90%;
        }
        .message{
            width: 90%;
        }
    }
}
@media (max-width:435px){
    .message{
        flex-direction: column;
        gap: 100px;
        width: 100%;
        margin: 0;
        form{
            width: 100%;
        }
    .images{
        width: 100%;
    }
    }
}
@media (max-width:880px){
    .message{
        flex-direction: column;
        gap: 100px;
        form{
            width: 90%;
        }
        .message{
            width: 90%;
        }
    }
}


@media (max-width:800px){
    .contact{
        flex-direction: column;
        gap: 200px;
        .box{
            width: 90%;
        }
    }
}
</style>