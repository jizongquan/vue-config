<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState} from 'vuex'
export default{
  name: 'HomeHeader',
  computed:{
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.header
  display: flex
  line-height: .86rem
  background: $bgColor
  color: #fff
  .header-left
    width: .64rem
    float: left
    .back-icon
      text-align: center
      font-size:.4rem
  .header-input
    flex: 1
    height:.64rem
    line-height:.64rem
    margin-left:.2rem
    margin-top: 0.12rem
    background: #fff
    border-radius: 0.1rem
    padding-left:.2rem
    color:#ccc
  .header-right
    width: 1.24rem
    float: right
    text-align: center
    color:#fff
    .arrow-icon
      font-size:.24rem
</style>
