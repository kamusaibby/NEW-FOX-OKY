const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = {
  config: {
    name: 'sh',
    aliases: ['$', '×'],
    version: '1.0',
    author: '404',
    role: 2,
    category: 'owner',
    shortDescription: {
      en: 'Executes terminal commands.',
    },
    longDescription: {
      en: 'Executes terminal commands and returns the output.',
    },
    guide: {
      en: '{pn} [command]',
    },
  },
  onStart: async function ({ api, args, message, event }) {
    const permission = ["61552930114349"];
    if (!permission.includes(event.senderID)) {
      api.sendMessage(
        "𝐒𝐫𝐲 𝐬𝐢𝐫 𝐚𝐩𝐧𝐚𝐫 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐧𝐞𝐢 𝐨𝐧𝐥𝐲 𝐚𝐦𝐚𝐫 𝐛𝐨𝐬𝐬 𝐮𝐬𝐞 𝐤𝐨𝐫𝐭𝐞 𝐩𝐚𝐫𝐛𝐞🐣",
        event.threadID,
        event.messageID
      );
      return;
    }
    if (args.length === 0) {
      message.reply('Usage: {pn} [command]');
      return;
    }

    const command = args.join(' ');

    try {
      const { stdout, stderr } = await exec(command);

      if (stderr) {
        message.reply(`${stderr}`); // Fixed string interpolation
      } else {
        message.reply(`${stdout}`); // Fixed string interpolation
      }
    } catch (error) {
      console.error(error);
      message.reply(`Error: ${error.message}`); // Fixed string interpolation
    }
  },
};
