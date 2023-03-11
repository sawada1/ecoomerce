<template>
    <div class="blogbanner">
        <h4>#read more</h4>
     <h2>Read All The Case Studies About Our<span> product ! </span> </h2>
    </div>
     <div class="blogs">
        <div class="blog">
          <div class="image">
           <img src="../assets/img/blog/b1.jpg" alt="">
           <span>13 / 01</span>
          </div>
            <div class="text">
              <h3>How To Style A Quiff</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Minima rem eos dolor pariatur
               repudiandae sunt odit dignissimos culpa aperiam a.</p>
               <p>Continue Reading ........</p>
            </div>
        </div>
        <div class="blog">
          <div class="image">
           <img src="../assets/img/blog/b2.jpg" alt="">
           <span>13 / 01</span>
          </div>
            <div class="text">
              <h3>How To Style A Quiff</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Minima rem eos dolor pariatur
               repudiandae sunt odit dignissimos culpa aperiam a.</p>
               <p>Continue Reading ........</p>
            </div>
        </div>
        <div class="blog">
          <div class="image">
           <img src="../assets/img/blog/b3.jpg" alt="">
           <span>13 / 01</span>
          </div>
            <div class="text">
              <h3>How To Style A Quiff</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Minima rem eos dolor pariatur
               repudiandae sunt odit dignissimos culpa aperiam a.</p>
               <p>Continue Reading ........</p>
            </div>
        </div>
        <div class="blog">
          <div class="image">
           <img src="../assets/img/blog/b4.jpg" alt="">
           <span>13 / 01</span>
          </div>
            <div class="text">
              <h3>How To Style A Quiff</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Minima rem eos dolor pariatur
               repudiandae sunt odit dignissimos culpa aperiam a.</p>
               <p>Continue Reading ........</p>
            </div>
        </div>
        <div class="blog">
          <div class="image">
           <img src="../assets/img/blog/b5.jpg" alt="">
           <span>13 / 01</span>
          </div>
            <div class="text">
              <h3>How To Style A Quiff</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Minima rem eos dolor pariatur
               repudiandae sunt odit dignissimos culpa aperiam a.</p>
               <p>Continue Reading ........</p>
            </div>
        </div>
     </div>
</template>

<script>

</script>

<style lang="scss">
  @import '../sass/main.scss';
.blogbanner{
    @include banner('../assets/img/banner/b19.jpg', 50px , 50px , 300px);
    margin-top: 50px;
    h2{
        font-size: 30px;
        color: #fff;
        span{
            color: tomato
        }
    }
    h4{
        font-size: 30px;
        color: #fff;
    }
}


.blogs{
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 30px 5%;
    gap: 60px;
    .blog{
        display: flex;
        align-items: center;
        gap: 20px;
        .image{
            width: 50%;
            position: relative;
            img{
                width: 100%;
                object-fit: contain;
            }
            span{
                font-size: 30px;
                position: absolute;
                top: -6%;
                left: 0;
            }
        }
        .text{
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 10px;
        }
    }
}


@media (max-width:900px){
    .blogs{
        gap: 100px;
        .blog{
          width: 100%;
            flex-direction: column;
            .image{
              width: 100%;
              span{
                font-size: 35px;
                position: absolute;
                top: -2%;
                left: 0;
            }
            }
        }
    }
}
</style>