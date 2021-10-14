<template>
  <div class="nav-wrap">
    <div><img :src="require('@/assets/image/home/logo.png')" /></div>
    <div class="nav">
      <div
        class="item"
        @click="handleMenuClick('HOME')"
        :class="{ 'activity-menu': state.activeMenu === 'HOME' }"
      >
        <a href="#home">HOME</a>
      </div>
      <div
        class="item"
        @click="handleMenuClick('ABOUT')"
        :class="{ 'activity-menu': state.activeMenu === 'ABOUT' }"
      >
        <a href="#about">ABOUT</a>
      </div>
      <div
        class="item"
        @click="handleMenuClick('CONTACT')"
        :class="{ 'activity-menu': state.activeMenu === 'CONTACT' }"
      >
        <a href="#contact">CONTACT US</a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, onMounted, onUpdated, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "navbar",
  components: {},
  setup() {
    const state = reactive({
      activeMenu: "home",
    });
    const handleMenuClick = (name) => {
      state.activeMenu = name;
    };
    return {
      state,
      handleMenuClick,
    };
  },
};
</script>
<style lang="scss">
a {
  text-decoration: none;
  color: #ffffff;
}
a:hover {
  color: #6bf4ff;
}
.nav-wrap {
  box-sizing: border-box;
  padding: 0px 15vw 0px 15vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .nav {
    display: flex;
    flex-direction: row;
    font-size: 18px;
    color: #ffffff;
    font-weight: 400;
    line-height: 25px;
    .item {
      margin: 0px 45px;
      cursor: pointer;
    }
    .item:hover {
      color: #6bf4ff;
    }
  }
}

.activity-menu {
  color: #6bf4ff;
}
</style>
