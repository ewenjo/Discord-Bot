module.exports = {
  name: "poll",
  description: "A simple command for making polls",
  args: true,
  execute(message, args) {
    message.channel.send(`${message.author} asks:
      *${args[0]}*
    `);
  }
};
