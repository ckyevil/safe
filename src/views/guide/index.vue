<template>
  <div class="app-container">
    <aside>
      这是对于隐私星链系统使用说明，我们将在这里展示我们的项目导航功能，感谢您支持并使用我们的系统
      <!-- <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a> -->
    </aside>
    <el-button icon="el-icon-question" type="primary" @click.prevent.stop="guide">
      开始教程^o^
    </el-button>
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps'

export default {
  name: 'Guide',
  data() {
    return {
      driver: null
    }
  },
  mounted() {
    this.driver = new Driver()
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>
