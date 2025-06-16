import {
    Client,
} from 'discord.js';
import { fakeMember } from './objects/member.ts';
import { fakeMessage } from './objects/message.ts';
import { fakeChannel } from './objects/channel.ts';

export class Faker {
    /**
     * Validates that a Discord client instance is provided.
     * Throws an error if client is not passed.
     * @param client - The Discord.js Client instance
     */
    private static checkClient(client: Client): void {
        if (!client) throw new Error('Client is required for this Faker operation');
    }

    /**
     * Emits a simulated guildMemberRemove event with a fake member.
     * Useful for testing event handling of member leaves.
     * @param client - The Discord.js Client instance
     */
    static memberRemove(client: Client): void {
        this.checkClient(client);
        client.emit('guildMemberRemove', fakeMember(client));
    }

    /**
     * Emits a simulated guildMemberAdd event with a fake member.
     * Useful for testing event handling of member joins.
     * @param client - The Discord.js Client instance
     */
    static MemberAdd(client: Client): void {
        this.checkClient(client);
        client.emit('guildMemberAdd', fakeMember(client));
    }

    /**
     * Emits a simulated messageCreate event with a fake message.
     * Useful for testing event handling of new messages.
     * @param client - The Discord.js Client instance
     */
    static messageCreate(client: Client): void {
        this.checkClient(client);
        // @ts-ignore - ignoring type because event expects Message type, which fakeMessage simulates
        client.emit('messageCreate', fakeMessage(client));
    }

    /**
     * Emits a simulated messageUpdate event with two fake messages:
     * the old message and the updated message.
     * Useful for testing message editing event handling.
     * @param client - The Discord.js Client instance
     */
    static messageEdit(client: Client): void {
        this.checkClient(client);

        // @ts-ignore - ignoring type for similar reasons as above
        client.emit(
            'messageUpdate',
            fakeMessage(client),
            fakeMessage(client, 'I am a updated message!')
        );
    }

    /**
     * Emits a simulated messageDelete event with a fake message.
     * Useful for testing message deletion event handling.
     * @param client - The Discord.js Client instance
     */
    static messageDelete(client: Client): void {
        this.checkClient(client);

        // @ts-ignore - ignoring type for the event
        client.emit('messageDelete', fakeMessage(client));
    }

    /**
     * Emits a simulated channelCreate event with a fake channel.
     * Useful for testing event handling when channels are created.
     * @param client - The Discord.js Client instance
     */
    static channelCreate(client: Client): void {
        this.checkClient(client);

        client.emit('channelCreate', fakeChannel(client));
    }

    /**
     * Emits a simulated channelDelete event with a fake channel.
     * Useful for testing event handling when channels are deleted.
     * @param client - The Discord.js Client instance
     */
    static channelDelete(client: Client): void {
        this.checkClient(client);

        client.emit('channelDelete', fakeChannel(client));
    }
}
