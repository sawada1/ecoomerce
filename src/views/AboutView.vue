<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>#about us</h2>
  </div>

  <div class="aboutpage">
    <div class="image">
     <img src="../assets/img/about/a6.jpg" alt="">
    </div>
    <div class="text">
      <h2>Who We Are ?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Labore eligendi accusantium voluptatum dolorum pariatur cupiditate, 
       facere non quo inventore 
      vero aut tenetur laudantium nobis, architecto voluptate deserunt, illo sit alias.</p>
      <span>Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Quisquam dignissimos obcaecati minima est error laborum.</span>
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


</template>




<script>

</script>



<style lang="scss">
    @import '../sass/main.scss';
.about{
  @include banner('../assets/img/about/banner.png', 50px , 50px , 300px);
margin-top: 50px;
color: #fff;
}


.aboutpage{
  display: flex;
  align-items: center;
  gap: 20px;
  width: 90%;
  margin: 20px 5%;
  .image{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .text{
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 30px;
      h2{
        font-size: 35px;
      }
      span{
        color: gray;
        border-bottom: 2px dotted #333;
      }
    }
}


@media (max-width:770px){
  .aboutpage{
    flex-direction: column;
  }
}

</style>