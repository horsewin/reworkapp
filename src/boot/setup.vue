<template>
  <view class="container">
    <app></app>
  </view>
</template>
<script>
    import App from "../App.vue";

    export default {
  component: { App }
};
</script>

<style>
.container {
  flex: 1;
}
</style>
