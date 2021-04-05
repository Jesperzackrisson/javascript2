<template>
  <div>
      <div class="hero_image">
          <h1>CLOTHES E-STORE</h1>
          <!-- <img src="@/assets/image2.jpg" alt=""> -->
          <video class="hero_video" src="@/assets/video2.mp4" loop muted autoplay></video>
      </div>
      
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
.hero_image {
    /* background-color: #000000; */
    /* background-color: #16a085; */
    width: 100%;
    height: 20vh;
}

/* .hero_image img {
    width: 100vw;
    height: 50vh;
    filter: grayscale(80%);
} */

.hero_image h1 {
    position: absolute;
    /* z-index: 1; */
    /* color: #fff; */
    /* color: #ecf0f1; */
    color: transparent;
    background-image: url('https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?cs=srgb&dl=pexels-pixabay-325876.jpg&fm=jpg');
    background-size: 100vw 100vh;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    font-size: 7rem;
    width: 1000px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 0.5rem;
    background-clip:text;
    z-index: 1;
}
.hero_image video {
    opacity: 1;
    position: absolute;
    left: 0;
    width: 100%;
    height: calc(100vh - 64px);
    object-fit: cover;
    filter: grayscale(0.7);
    z-index: -1;
}


</style>