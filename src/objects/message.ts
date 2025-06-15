import {
    Client,
    Collection,
    Guild,
    GuildMember,
    Role,
    User,
    Message,
    type TextChannel,
} from 'discord.js';
import { fakeMember } from './member.ts';
import { fakeChannel } from './channel.ts';

export function fakeMessage(
    client: Client,
    content: string = 'Hello, I am a fake message!',
    authorId: string = '999999999999999999',
    channelId: string = '1372190758664405053'
): Message {
    const guild: Guild | undefined = client.guilds.cache.first();
    if (!guild) throw new Error('No guild found in client cache');

    const member: GuildMember = fakeMember(client, authorId);
    const user: User = member.user;
    const channel: TextChannel = fakeChannel(client);

    return {
        id: Date.now().toString(),
        content,
        author: user,
        member,
        guild,
        channel,
        createdAt: new Date(),
        editedAt: null,
        deletable: true,
        editable: true,
        reply: async (msg: string) => {
            console.log(`Fake reply to message: ${msg}`);
            return fakeMessage(client, msg, authorId, channelId);
        },
        edit: async (newContent: string) => {
            console.log(`Fake edit message: ${newContent}`);
            return fakeMessage(client, newContent, authorId, channelId);
        },
        delete: async () => {
            console.log(`Fake message deleted: ${content}`);
        },
        toString: () => content,
    } as unknown as Message;
}