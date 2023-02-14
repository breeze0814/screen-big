<template>
  <div class="root">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Header from '../src/components/Header.vue'

const zoom = ref(null)
window.addEventListener('optimizedResize', function () {
  let app = document.getElementById('app')
  let scale = document.documentElement.clientWidth / 1920
  app.style.cssText = 'zoom:' + scale + ''
})

const scale = () => {
  let app = document.getElementById('app')
  zoom.value = document.documentElement.clientWidth / 1920
  app.style.cssText = 'zoom:' + zoom.value + ''

  // 防抖
  ;(function () {
    let throttle = function (type, name, obj) {
      obj = obj || window
      let running = false
      let func = function () {
        if (running) {
          return
        }
        running = true
        requestAnimationFrame(function () {
          obj.dispatchEvent(new CustomEvent(name))
          running = false
        })
      }
      obj.addEventListener(type, func)
    }

    throttle('resize', 'optimizedResize')
  })()
}

onMounted(() => {
  scale()
})
</script>

<style scoped>
.root {
  margin: 0 auto;
  position: relative;
  color: #ffffff;
  background-image: url(@/assets/images/bg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
