const app = Vue.createApp({
  data: function () {
    return {
      submissions: submissions,
    };
  },
});

const vm = app.mount("#app");
