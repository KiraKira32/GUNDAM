<template>
  <div class="title-text-block">
    <div class="banner-title fw-bold text-white">
      <span>勝負並不是只靠機動的性能</span>
      <div>不只是靠操縱者的技巧</div>
      <div class="dynamic-text">結果本身就是唯一的真相！</div>
    </div>
  </div>
</template>

<style>
.title-text-block {
  position: relative;
}

.banner-title {
  position: absolute;
  font-size: clamp(16px, 3vw, 28px);
  top: 260px;
  left: 220px;
}

@media screen and (max-width: 1200px) {
  .banner-title {
    top: 180px;
    left: 120px;
  }
}

@media screen and (max-width: 1024px) {
  .banner-title {
    top: 120px;
    left: 100px;
  }
}

@media screen and (max-width: 768px) {
  .banner-title {
    top: 80px ;
    left: 60px;
  }
}
</style>
