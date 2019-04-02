<template>
  <view class="container">
    <app></app>
  </view>
</template>

<script>
    import App from "../App.vue";

    export default {
  components: { App }
};
</script>

<style>
.container {
  flex: 1;
  padding: 30;
}
</style>
