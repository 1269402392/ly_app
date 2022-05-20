<template>
  <div class="ly-content">
    <img src="~@/assets/labixiaoxin.jpg" alt="" />
    <h1>世家列表</h1>
    <div class="scroll-wrapper" ref="wrapper">
      <div class="scroll-content">
        <div class="scroll-item" v-for="(item, index) in content" :key="index">
          <div
            class="title"
            :style="{
              '--title': color[index],
            }"
          >
            {{ item.title }}
          </div>
          <div class="item-content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BScroll from "better-scroll";

export default defineComponent({
  data() {
    return {
      bs: null as any,
      color: ["red", "blue", "green", "orange", "pink", "yellow", "purple"],
      content: [
        {
          title: "😑说走就走",
          content:
            "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
        },
        {
          title: "🙄轨迹",
          content:
            "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
        },
        {
          title: "🙄安静",
          content:
            "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
        },
        {
          title: "😞给我一首歌的时间",
          content:
            "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
        },
      ],
    };
  },
  mounted() {
    this.bs = new BScroll(this.$refs.wrapper as HTMLElement, {
      probeType: 3,
      click: true,
    });
    // setInterval(() => {
    //
    // }, 2000)
  },
});
</script>

<style lang="scss" scoped>
.ly-content {
  .scroll-content {
  }
  .scroll-wrapper {
    height: calc(100vh - 158px - 20px - 70px);
    overflow: hidden;
    position: relative;

    .scroll-item {
      .title {
        font-weight: bold;
        color: var(--title);
        font-size: 18px;
      }

      .item-content {
        width: 100%;
        text-indent: 2em;
        text-align: justify;
      }
    }
  }

  > img {
    width: 100%;
    height: 158px;
  }

  h1 {
    text-align: center;
  }

  color: #383838;
  font-size: 15px;
  line-height: 30px;
  letter-spacing: 2px;
  word-break: break-word;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
  scroll-behavior: smooth;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(201, 195, 195, 0.329) 25%,
      hsla(0, 8%, 80.4%, 0.05) 26%,
      transparent 27%,
      transparent 74%,
      hsla(0, 5.2%, 81%, 0.185) 75%,
      rgba(180, 176, 176, 0.05) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(204, 196, 196, 0.226) 25%,
      hsla(0, 4%, 66.1%, 0.05) 26%,
      transparent 27%,
      transparent 74%,
      hsla(0, 5.2%, 81%, 0.185) 75%,
      rgba(180, 176, 176, 0.05) 76%,
      transparent 77%,
      transparent
    );
  background-color: #fff;
  background-size: 50px 50px;
  padding: 10px 10px 0 10px;
}
</style>
