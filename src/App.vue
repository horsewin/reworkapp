<template>
  <app-navigation></app-navigation>
</template>

<script>
import React from "react";
import { StackNavigator } from "vue-native-router";
import TodoScreen from "./components/todo/index.vue";
import LoginScreen from "./components/signin/index.vue";

const AppNavigation = StackNavigator(
  {
    Todo: { screen: TodoScreen },
    Login: { screen: LoginScreen }
  },
  {
    initialRouteName: "Login"
  }
);

export default {
  components: { AppNavigation }
};
</script>
