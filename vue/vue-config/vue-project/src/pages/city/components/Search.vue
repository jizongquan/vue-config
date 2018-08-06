<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li  @click="handleCityClick(item.name)"  v-for="item of list" :key="item.id" class="search-item">{{item.name}}</li>
        <li class="search-item" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props:{
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout( () => {
        const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
                if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){} {
                  result.push(value)
                }
            })
          }
          this.list = result
       }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity',city)
      this.$router.push('/')
    }
  }
}

</script>

<style lang="stylus" scoped>
.search
  height: .72rem
  background: #00bcd4
  padding: 0 .1rem
  .search-input
    box-sizing: border-box
    height: .62rem
    line-height: .62rem
    width: 100%
    padding: 0 .1rem
    border-radius: .06rem
    text-align: center
    color: #666
.search-content
  position: absolute
  overflow: hidden
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  background: #eee
  z-index: 1
  .search-item
    line-height: .62rem
    padding-left: .62rem
    color: #666
    background: #fff
</style>
