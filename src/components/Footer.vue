<template>
  <div class="footer-wrap">
    <div style="margin-right: 107px">
      <img :src="require('@/assets/image/home/footer-left.png')" />
    </div>
    <div class="text font-eight" style="margin-right: 61px">
      <div>About Us</div>
      <div style="margin-top: 12px">
        As a microfinance company, Roluck Technologies Enterprise has launched a
        number of financial products in Ghana.
      </div>
    </div>
    <div>
      <div class="footer-btn">Contact Us</div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import QRCode from "qrcode";

export default {
  name: "footer",
  components: {},
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.footer-wrap {
  height: 527px;
  background: #edfcff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .text {
    width: 362px;
  }
  .footer-btn {
    width: 87px;
    height: 22px;
    background: #7c99ff;
    border-radius: 11px;
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    color: #ffffff;
    line-height: 22px;
  }
}
</style>
