<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchend"
      @click="handleLetterClick"
      :ref="item"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default{
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
      console.log(e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 20 )
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change',this.letters[index])
            }
        }, 16)
      }
    },
    handleTouchend () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 1.58rem
  right: 0
  bottom: 0
  width: .4rem
  .item
    line-height: .44rem
    color: #00bcd4
    text-align: center
</style>
