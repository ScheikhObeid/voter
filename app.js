const app = Vue.createApp({
  data: function () {
    return {
      submissions: submissions,
      totalVotes: 0,
    };
  },
  // computed: {
  //   totalVotes() {
  //     console.log("computed property ausgeführt.");
  //     return this.submissions.reduce((totalVotes, submission) => {
  //       return totalVotes + submission.votes;
  //     }, 0);
  //   },
  // },

  watch: {
    // submissions(newValue, oldValue) {
    //   console.log(newValue);
    //   console.log(oldValue);
    // },
    submissions: {
      handler(newValue, oldValue) {
        this.totalVotes = this.submissions.reduce((totalVotes, submission) => {
          return totalVotes + submission.votes;
        }, 0);
      },
      deep: true,
      immediate: true,
    },
    totalVotes(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
    },
  },
  methods: {
    upvote() {
      this.submissions[0].votes++;
    },
  },
});

const vm = app.mount("#app");
