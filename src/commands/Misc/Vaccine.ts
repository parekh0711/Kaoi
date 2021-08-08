/* eslint-disable @typescript-eslint/no-explicit-any */
import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'vaccine',
            description: 'Displays vaccination status of Deception',
            adminOnly: true,
            category: 'misc',
            usage: `${client.config.prefix}vaccine`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void (await M.reply(`Hi! This group has 11/11 partially vaccinated and 4/11 fully vaccinated.`))
    }
}
