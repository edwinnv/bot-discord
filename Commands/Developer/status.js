const { CommandInteraction, Client, EmbedBuilder } = require('discord.js')
const { connection } = require('mongoose')
require('../../Events/Client/ready')

module.exports = {
  name: 'status',
  description: 'Displays the status of the client and database connection',
  /**
   *
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  async execute(interaction, client) {

    const Response = new EmbedBuilder()
	  .setColor('AQUA')
      .setDescription(`**Client**: \`🟢 ONLINE\`- \`${client.ws.ping}ms\`\n **Uptime**: <t:${parseInt(client.readyTimestamp / 1000)}:R>\n
	**Database**: \`${switchTo(connection.readyState)}\``)

    interaction.reply({ embeds: [Response] })
  },
}

function switchTo(val) {
  var status = ' '
  switch (val) {
    case 0:
      status = `🛑 DISCONNECTED`
      break
    case 1:
      status = `🟢 CONNECTED`
      break
    case 2:
      status = `🟠 CONNECTING`
      break
    case 3:
      status = `🟣 DISCONNECTING`
      break
  }
  return status
}
