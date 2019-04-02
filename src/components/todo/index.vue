<template>
  <view class="container">
    <text-input
      :style="{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }"
      placeholder="ex: hogehoge"
      v-model="messageText"
    ></text-input>
    <button :on-press="saveMessage" title="Save"></button>
    <button :on-press="removeMessage" title="Delete"></button>
  </view>
</template>

<script>
    import Store from "../../store";

    export default {
  data: function() {
    return {
      messageText: ""
    };
  },
  computed: {
    messages: function() {
      return Store.getters.messages;
    }
  },
  methods: {
    saveMessage: function() {
      Store.dispatch("addMessage", this.messageText);
      this.messageText = "";
    },
    removeMessage: function() {
      Store.dispatch("removeMessage");
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
