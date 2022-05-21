<template>
  <div class="ly-login">
    <div class="content">
      <img class="avatar" src="~@/assets/logo.jpg" />
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
import { Toast } from "vant";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const onFailed = (error: any) => {
  console.log(error);
};
const onSubmit = (error: any) => {
  Toast.loading("请稍等...");
  setTimeout(() => {
    Toast.clear();
    if (username.value === "luyi" && password.value === "123") {
      Toast.success("登陆成功");
      localStorage.token = "luyi";
      setTimeout(() => {
        router.push("/content");
        Toast.clear();
      }, 1000);
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
