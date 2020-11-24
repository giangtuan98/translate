import { messages } from "../lang/messages";

export const translate = {
  data() {
    return {
      messages: {},
    };
  },
  methods: {
    trans(value) {
      console.log(messages);
      return this.messages[value];
    },
  },
  mounted() {
    console.log("mounted");
    this.messages = this.$store.state.lang.translatedMessages;
  },
};
