<template>
  <div class="home-wrap">
    <div>Contact us</div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, ref, onMounted, computed } from "vue";
export default {
  name: "",
  components: {},
  setup() {
    const state = reactive({
      loading: false,
      email: "",
      message: "",
    });

    const handleSend = () => {
      state.email = "";
      state.message = "";
    };

    return {
      handleSend,
      state,
    };
  },
};
</script>
<style lang="scss">
// @import "@/assets/style/index.scss";
</style>
