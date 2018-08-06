<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.title
  line-height: 0.8rem
  background: #eee
  text-indent: .2rem
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 33.9%
  .item-img
   width: 100%
.item-info
  flex: 1
  padding: .1rem
  min-width: 0
  .item-title
    line-height: .54rem
    font-size: .32rem
    verflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
  .item-desc
    line-height: .4rem
    color: #ccc
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
  .item-button
    line-height: .44rem
    margin-top: .16rem
    background: #ff9300
    padding: 0 .2rem
    border-radius: .06rem
    color: #fff
</style>
