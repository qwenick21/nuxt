export default {
  methods: {
    showApiMessage(message) {
      const messageArr = message.split(' ')
      return messageArr.slice(1, messageArr.length - 1).join(' ')
    },
  },
}
