<template>
  <view class="container">
    <text-input
      :style="{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }"
      placeholder="email or id"
      v-model="userId"
    ></text-input>
    <button :on-press="login" title="login"></button>
  </view>
</template>

<script>
    import Store from "../../store";

    export default {
        data: function () {
            return {
                userId: ""
            };
        },
        props: {
            navigation: {
                type: Object
            }
        },
        computed: {
            messages: function () {
                return Store.getters.messages;
            }
        },
        methods: {
            login: function () {
                this.navigation.navigate("Todo");
            }
        }
    };
</script>
<style>
  .container {
    background-color: white;
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-direction: column;
  }

  .text-color-primary {
    color: blue;
  }

  .text-container {
    color: blue;
    padding: 2;
    font-size: 22;
  }

  .text-input-container {
    width: 300;
    height: 40;
    font-size: 22;
    border-color: gray;
  }
</style>
