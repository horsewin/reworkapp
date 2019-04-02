<template>
  <app-navigation></app-navigation>
</template>

<script>
    import React from "react";
    import {StackNavigator} from "vue-native-router";
    import TodoScreen from "./components/todo/index.vue";

    const AppNavigation = StackNavigator(
  {
    Todo: { screen: TodoScreen }
  },
  {
    initialRouteName: "Todo"
  }
);

export default {
  components: { AppNavigation }
};
</script>
