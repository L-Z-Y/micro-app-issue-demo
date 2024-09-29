<template>
  <div>
    <img
      alt="图片不显示"
      src="https://crm7cdn.wuuxiang.com/pic/20240528/1716899264996M1X554NU_1716899264996_火狐狸.jpeg"
    />
    <span>默认添加了crossorigin="anonymous"</span>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import HelloWorld from "../components/HelloWorld.vue";

const testHref = () => {
  // 通过原生跳转会导致报错
  // location.href = 'http://localhost:7001/micro-app/vite4/#/page2' // 报错
  // location.href = '/micro-app/vite4/#/page2' // 报错
  // location.href = 'https://www.baidu.com/' // 报错
  // location.href = 'http://localhost:3000/micro-app/vite4/#/page2' // -- 不报错

  // vite环境下，通过window.microApp.location进行跳转
  // window.microApp.location.href = 'https://www.baidu.com/' // origin不同，直接跳转页面
  window.microApp.location.href = window.__MICRO_APP_BASE_ROUTE__
    ? window.__MICRO_APP_BASE_ROUTE__ + "/element-plus"
    : "/micro-app/vite4/element-plus";
};

// parent.console.timeEnd('vite')

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
<style></style>
