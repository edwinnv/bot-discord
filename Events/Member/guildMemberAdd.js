const { EmbedBuilder, WebhookClient, GuildMember } = require('discord.js')

module.exports = {
  name: 'guildMemberAdd',
  /**
   *
   * @param {GuildMember} member
   */

  execute(member) {
    const { user, guild } = member

    member.roles.add('884591877196767244')
    const Welcomer = new WebhookClient({
      id: '1022535220882329670',
      token:
        'm_6D5yeaSdtw6zisF1jVNo-SECoaz8Rhnorgh_jTIScZJmsSF8rJlLcuOK-K8ecZqef1',
    })

    const Welcome = new EmbedBuilder()
      .setColor('AQUA')
      .setAuthor(user.tag, user.avatarURL({ dynamic: true, size: 512 }))
      .setThumbnail(user.avatarURL({ dynamic: true, size: 512 }))
      .setDescription(
        `
	  Bienvenido ${member} a el mejor **${guild.name}**!\n
	  Cuenta creada: <t:${parseInt(
      user.createdTimestamp / 1000
    )}:R>\nCantidad de cachones: **${guild.member}**`
      )
      .setFooter(` ID: ${user.id}`)

    Welcomer.send({ embeds: [Welcome] })
  },
}
