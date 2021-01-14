<template>
  <div class="goods">
      <good-list-item v-for="(item,key) of goods" :key="key" :goodsItem='item'></good-list-item>
  </div>
</template>

<script>
  // 引入GoodListItem
  import GoodListItem from './GoodListItem'
  export default {
    name: "GoodList",
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodListItem
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>
