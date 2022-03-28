<template>
  <div class="home-wrap">
    <div class="contact-wrapper" id="contact">
      <div class="contact">
        <div style="text-align: center" class="font-six">Contact us</div>
        <img
          :src="require('@/assets/image/home/angle.png')"
          class="bottom-left"
        />
        <img
          :src="require('@/assets/image/home/angle.png')"
          class="top-right"
        />
        <div class="info-wrapper">
          <div class="left">
            <div class="font-nine">Talk to us today !</div>
            <div class="font-seven" style="margin-top: 10px">
              Let us know about you and we’ll start to work on your goals
              together
            </div>
          </div>
          <div class="right">
            <img :src="require('@/assets/image/home/contact-right.png')" />
          </div>
        </div>
      </div>
    </div>
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
@import "@/assets/style/index.scss";
.home-wrap {
  .contact-wrapper {
    padding: 5vw;
    .contact {
      position: relative;
    }
    .bottom-left {
      position: absolute;
      bottom: 0px;
      left: 0px;
    }
    .top-right {
      position: absolute;
      top: 0px;
      right: 0px;
      transform: rotate(180deg);
    }
    .info-wrapper {
      margin-top: 86px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .left {
        margin-right: 60px;
        .btn-send {
          width: 187px;
          height: 46px;
          background: #55bbd1;
          border-radius: 23px;
          font-size: 18px;
          font-weight: 400;
          color: #ffffff;
          margin-top: 50px;
        }
      }
      .right {
        img {
          width: 350px;
        }
      }
    }
  }
}
</style>
