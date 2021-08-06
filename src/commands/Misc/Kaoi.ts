import { MessageType } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'desc',
            description: 'Displays the info',
            category: 'misc',
            usage: `${client.config.prefix}desc`,
            dm: true
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void M.reply(`👾 *Deceptabot* 👾\n\n🍀 *Description:* I'm your friendly neighbourhood Deceptabot.`
        ).catch((reason: any) =>
            M.reply(`an error occured, Reason: ${reason}`))
    }
}
