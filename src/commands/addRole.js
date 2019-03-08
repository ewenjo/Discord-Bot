module.exports = {
  name: "role",
  description: "A simple command to add a role to an user",
  args: true,
  execute(message, args) {
    let { visitorRole, adminRole } = require("../config.json").ids;
    let author = message.guild.members.get(message.author.id);

    if (author.roles.has(adminRole)) {
      let user = message.guild.members.get(args[0].id);
      let roles = args.shift;
      message.channel.send(`${user}`);
    } else {
      message.channel.send("You can't add roles");
    }
  }
};
