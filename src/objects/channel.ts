import {
    Client, Guild,
    TextChannel,
} from 'discord.js';
import { fakeMessage } from './message.ts';

export function fakeChannel(client: Client): TextChannel {
    const guild: Guild|undefined = client.guilds.cache.first()

    return {
        id: '1372190758664405053',
        name: 'faker-channel-name',
        guild: guild,
        type: TextChannel,
        send: async (msg: string) => {
            console.log(`Fake sending message in channel: ${msg}`);
            return fakeMessage(client);
        },
    } as unknown as TextChannel;
}