<template>
  <div class="border-2 text-red-700">nav</div>
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
<style lang="scss"></style>
