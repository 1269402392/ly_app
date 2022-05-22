<template>
  <div class="ly-login">
    <div class="content">
      <div class="imgs">
        <img class="avatar" src="~@/assets/logo.jpg" />
        <img class="avatar" src="~@/assets/logo2.jpg" />
      </div>
      <van-form @failed="onFailed" @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            label="用户名"
            placeholder="请输入用户名"
            left-icon="contact"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            label="密码"
            left-icon="shield-o"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button
            style="background: rgba(25, 137, 250, 0.5)"
            round
            block
            type="primary"
            native-type="submit"
          >
            登陆
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Toast, Notify, Dialog } from "vant";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const onFailed = (error: any) => {
  return error;
};
const onSubmit = (error: any) => {
  const date = new Date();
  const hours = date.getHours();
  console.log(hours);
  if (hours < 15) {
    Notify({ type: "warning", message: "过了20点再来试试吧" });
    return;
  }
  Toast.loading("请稍等...");
  setTimeout(() => {
    Toast.clear();
    if (username.value === "luyi" && password.value === "luxiansheng...") {
      Toast.success("登陆成功");
      localStorage.token = "luyi";
      Dialog.alert({
        title: "阅读小提示（必看）🐣",
        message:
          "这是一锅大杂烩，想到什么写什么，没有一句话是真心刻意写的，但确实是心里冒出过的想法，觉得离谱有意思就记录下来了，可以认真看也可以当笑话看，最好看完后当没看过，没有阅读性",
      }).then((_) => {
        router.push("/content");
        Toast.clear();
      });
    } else {
      Toast.fail("账号密码错误");
      localStorage.token = "";
    }
  }, 1000);
};
</script>

<style lang="scss" scoped>
.ly-login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("../assets/loginbg.jpg") 100% 100% no-repeat;
  .imgs {
    display: flex;
    justify-content: space-between;
  }
  .content {
    transform: translateY(-100px);
    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50px;
      display: block;
      margin: 50px auto;
    }
  }
}
</style>
