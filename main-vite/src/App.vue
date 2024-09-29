<template>
  <div class="menu-con">
    <el-menu class="el-menu-vertical-demo" :router="true" :default-active="activeIndex">
      <el-menu-item index="/vite/">
        <i class="el-icon-setting"></i>
        <span slot="title">vite</span>
      </el-menu-item>
      <el-menu-item index="/self/">
        <i class="el-icon-s-platform"></i>
        <span slot="title">self</span>
      </el-menu-item>
    </el-menu>
  </div>
  <div class="router-con">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated, ref, watch } from "vue";
import { useRouter } from "vue-router";

const activeIndex = ref("/react16/");
const { currentRoute } = useRouter();
watch(currentRoute, (newVal, oldVal) => {
  // console.log(111111, currentRoute.value)
  activeIndex.value = currentRoute.value.path;
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fff;
  width: 100%;
  /* padding: 10px; */
  box-sizing: border-box;
  display: flex;
}

.menu-con {
  width: 200px;
}

.router-con {
  flex: 1;
}

body {
  margin: 0;
}
</style>
