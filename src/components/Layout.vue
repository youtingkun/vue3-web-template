<template>
  <div class="layout">
    <div class="nav-bar">
      <Navbar></Navbar>
    </div>
    <div class="main"><router-view></router-view></div>
    <div><Footer></Footer></div>
  </div>
</template>

<script lang="ts">
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import { reactive, toRefs, onMounted, ref } from "vue";
export default {
  name: "layout",
  components: { Navbar, Footer },
  setup() {
    const state = reactive({
      loading: false,
    });
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };
    const showTopGo = ref(false);
    window.addEventListener("scroll", function () {
      let rootElement = document.documentElement;
      rootElement.scrollTop / rootElement.clientHeight > 0.8
        ? (showTopGo.value = true)
        : (showTopGo.value = false);
    });
    return {
      state,
      scrollToTop,
      showTopGo,
    };
  },
};
</script>
<style lang="scss"></style>
