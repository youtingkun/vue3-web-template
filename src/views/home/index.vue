<template>
  <div class="home-wrap">
    <div class="carousel-wrapper" id="home">
      <el-carousel :height="carouselHeight" class="carousel-wrap an-show">
        <el-carousel-item class="one">
          <div class="two-flex">
            <div class="left">
              <img :src="require('@/assets/image/home/big-logo.png')" />
              <div class="font-two" style="margin-top: 6px">
                Roluck Technologies Enterprise
              </div>
              <div class="font-one" style="margin-top: 75px; width: 360px">
                Provide financial support to shoppers and customers
              </div>
              <div class="font-three" style="margin-top: 40px; width: 360px">
                We pay attention to young people who want to continue their
                education, women who want to start a business and invest, and
                the majority of poor farmers
              </div>
            </div>
            <div class="right">
              <div>
                <div class="font-four" style="padding-left: 20px">
                  OUR PRODUCTS
                </div>
                <ul class="font-five" style="margin-top: 51px">
                  <li>Get loans anytime，anywhere</li>
                  <li>Lend quickly, without waiting</li>
                  <li>Amount and period, choose at will</li>
                  <li>The higher the credit, the more you borrow</li>
                </ul>
                <div style="margin-top: 90px; padding-left: 20px">
                  <div class="text-btn">GET IT ON GOOGLE PLAY</div>
                </div>
              </div>
            </div>
          </div>
          <!-- <el-image
            fit="contain"
            :src="require('@/assets/image/home/p1-bg.png')"
          ></el-image> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="about-wrapper" id="about">
      <div class="about">
        <div class="left">
          <div class="font-six">About us</div>
          <div class="font-seven" style="margin-top: 25px">
            About Roluck Technologies Enterprise
          </div>
          <div class="font-eight" style="margin-top: 11px; width: 362px">
            As a microfinance company, Roluck Technologies Enterprise has
            launched a number of financial products in Ghana. We provide credit
            support services to tens of thousands of Ghanaians. We focus on
            young people who want to continue their education, women who want to
            start a business and invest, and the vast number of poor farmers.
            Our goal is to provide financial support to more shoppers who are
            willing to spend and customers who are short of cash flow.
          </div>
        </div>
        <div class="right">
          <img :src="require('@/assets/image/home/about-right.png')" />
        </div>
      </div>
    </div>
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
            <el-input
              v-model="state.email"
              placeholder="Your Email"
              style="margin-top: 42px; border-radius: 10px"
            ></el-input>
            <el-input
              v-model="state.message"
              placeholder="Message"
              type="textarea"
              :autosize="{ minRows: 7, maxRows: 8 }"
              style="margin-top: 26px; border-radius: 10px"
            ></el-input>
            <el-button type="pramiy" class="btn-send" @click="handleSend"
              >SEND</el-button
            >
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
import { ElMessage } from "element-plus";
export default {
  name: "",
  components: {},
  setup() {
    const state = reactive({
      loading: false,
      email: "",
      message: "",
    });
    const carouselHeight = ref(`895px`);
    // window.addEventListener("resize", function () {
    //   carouselHeight.value = `${document.body.clientWidth * 0.53}px`;
    // });
    const handleSend = () => {
      ElMessage.success("success");
      state.email = "";
      state.message = "";
    };

    return {
      handleSend,
      state,
      carouselHeight,
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/style/index.scss";
.home-wrap {
  .carousel-wrapper {
    position: relative;
    .one {
      background-image: url("../../assets/image/home/p1-bg.png");
    }
    .two-flex {
      z-index: 1000;
      position: absolute;
      width: 100%;
      top: 0px;
      left: 0px;
      box-sizing: border-box;
      padding: 0px 15vw;
      display: flex;
      flex-direction: row;
      .left {
        flex: 1;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 127px;
      }
      .right {
        flex: 1;
        width: 50%;
        margin-top: 203px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .text-btn {
          font-size: 28px;
          font-weight: 600;
          color: #4a4a4a;
          line-height: 63px;
          width: 411px;
          height: 63px;
          background: #ffffff;
          border-radius: 54px;
          text-align: center;
        }
      }
    }
  }
  .about-wrapper {
    background: #f3f2f2;
    padding: 7vw 3vw;
    .about {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 650px;
      background: #ffffff;
      box-shadow: 0px 0px 44px 0px rgba(105, 105, 105, 0.33);
      border-radius: 54px;
      .left {
        width: 362px;
        margin-right: 35px;
      }
      .right {
      }
    }
  }
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
    }
  }
}
</style>
