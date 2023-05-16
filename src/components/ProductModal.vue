<template>
  <div 
    class="modal fade"
    id="productModal" 
    ref="productModal" 
    tabindex="-1" 
    aria-labelledby="productModalLable" 
    aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div v-for="item in products" :key="item.id" class="d-flex">
          {{ item }}
          <div>img</div>
          <div>title</div>
        </div>
        <div class=text-end>NT$</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger">加入購物車</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['products']
}
</script>