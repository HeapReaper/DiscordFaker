import {
    Client,
    Collection,
    Guild,
    GuildMember,
    Role,
    User
} from 'discord.js';

export function fakeMember(
    client: Client,
    memberId: string = '123456789012345678',
    username: string = 'fakerMember',
    discriminator: string = '0069',
): GuildMember {

    const guild: Guild|undefined = client.guilds.cache.first()

    const fakeUser = {
        id: memberId,
        username,
        discriminator,
        tag: `${username}#${discriminator}`,
        bot: false,
        avatar: null,
    } as unknown as User;

    return {
        id: memberId,
        user: fakeUser,
        guild,
        joinedAt: new Date(),
        nickname: null,
        displayName: username,
        roles: {
            cache: new Collection<string, Role>(),
            add: async () => {
            },
            remove: async () => {
            },
        },
        kick: async () => {
        },
        ban: async () => {
        },
        permissions: {
            has: () => true,
        },
        manageable: true,
        voice: {
            channel: null,
            mute: false,
            deaf: false,
            disconnect: async () => {
            },
        },
        toString: () => `<@${memberId}>`,
    } as unknown as GuildMember;
}
