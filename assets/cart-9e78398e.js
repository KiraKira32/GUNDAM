import{U as o,V as e}from"./index-e149919d.js";import{S as i}from"./sweetalert2.all-a83a55a9.js";const l=o("cart",{state:()=>({cartData:{carts:[]}}),actions:{getCart(){const a="https://vue3-course-api.hexschool.io/v2/api/asher_api/cart";e.get(a).then(t=>{this.cartData=t.data.data}).catch(t=>{alert(t)})},addToCart(a,t=1){const s={data:{product_id:a,qty:t}},r="https://vue3-course-api.hexschool.io/v2/api/asher_api/cart";e.post(r,s).then(()=>{this.getCart(),i.fire({icon:"success",title:"加入購物車成功！",showConfirmButton:!1,timer:1500})})},deleteProduct(a){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/v2/api/asher_api/cart/${a.id}`;e.delete(t).then(()=>{this.getCart(),this.isLoading=!1}).catch(s=>{alert(s)})},deleteCartAll(){const a="https://vue3-course-api.hexschool.io/v2/api/asher_api/carts";e.delete(a).then(()=>{this.isLoading=!1,this.getCart()}).catch(t=>{alert(t)})}}});export{l as c};