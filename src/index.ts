import {
    Client,
} from 'discord.js';
import { fakeMember } from './objects/member.ts';
import { fakeMessage } from './objects/message.ts';
import { fakeChannel } from './objects/channel.ts';

/**
 * Represents a Faker
 */
export class Faker {
    /**
     * Validates that a Discord client instance is provided.
     * Throws an error if client is not passed.
     * @param {Client} client - The Discord.js Client instance.
     * @throws {Error} - Throws an error if the client is not provider
     * @private
     * @returns {void}
     */
    private static checkClient(client: Client): void {
        if (!client) throw new Error('Client is required for this Faker operation');
    }

    /**
     * Emits a simulated guildMemberRemove event with a fake member.
     * Useful for testing event handling of member leaves.
     * @param {Client} client - The Discord.js Client instance.
     * @example
     * Faker.memberRemove(client);
     * @returns {void}
     */
    static memberRemove(client: Client): void {
        this.checkClient(client);
        client.emit('guildMemberRemove', fakeMember(client));
    }

    /**
     * Emits a simulated guildMemberAdd event with a fake member.
     * Useful for testing event handling of member joins.
     * @param {Client} client - The Discord.js Client instance.
     * @example
     * Faker.MemberAdd(client);
     * @returns {void}
     */
    static memberAdd(client: Client): void {
        this.checkClient(client);
        client.emit('guildMemberAdd', fakeMember(client));
    }

    /**
     * Emits a simulated messageCreate event with a fake message.
     * Useful for testing event handling of new messages.
     * @param {Client} client - The Discord.js Client instance.
     * @example
     * Faker.messageCreate(client);
     * @returns {void}
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
     * @param {Client} client - The Discord.js Client instance.
     * @example
     * Faker.messageEdit(client);
     * @returns {void}
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
     * @param {Client} client - The Discord.js Client instance.
     * @example
     * Faker.messageDelete(client);
     * @returns {void}
     */
    static messageDelete(client: Client): void {
        this.checkClient(client);

        // @ts-ignore - ignoring type for the event
        client.emit('messageDelete', fakeMessage(client));
    }

    /**
     * Emits a simulated channelCreate event with a fake channel.
     * Useful for testing event handling when channels are created.
     * @param {Client} client - The Discord.js Client instance.
     * @example
     * Faker.channelCreate(client);
     * @returns {void}
     */
    static channelCreate(client: Client): void {
        this.checkClient(client);

        client.emit('channelCreate', fakeChannel(client));
    }

    /**
     * Emits a simulated channelDelete event with a fake channel.
     * Useful for testing event handling when channels are deleted.
     * @param {Client} client - The Discord.js Client instance.
     * @example
     * Faker.channelDelete(client);
     * @returns {void}
     */
    static channelDelete(client: Client): void {
        this.checkClient(client);

        client.emit('channelDelete', fakeChannel(client));
    }
}

/**
 * Utility class for simulating message spam behavior for testing purposes.
 */
export class Spam {
    /**
     * Validates that a Discord client instance is provided.
     * Throws an error if client is not passed.
     * @param {Client} client - The Discord.js Client instance.
     */
    private static checkClient(client: Client): void {
        if (!client) throw new Error('Client is required for this Spam operation');
    }

    /**
     * Emits fake `messageCreate` events to simulate users sending messages.
     * Useful for stress testing or mocking event handlers in development.
     * @param {Client} client - The Discord.js Client instance.
     * @param {number} channelCount - The number of fake messages to emit.
     * @param {boolean} sameMessage - If true, sends the same message each time; otherwise appends index to each message.
     * @param {string} message - The base message content to send.
     * @example
     * Spam.massMessage(client, 10, false, 'I am a fake message!');
     * @returns {void}
     */
    static massMessage(client: Client, channelCount: number, sameMessage: boolean, message: string): void {
        this.checkClient(client);

        for (let i: number = 0; i < channelCount; i++) {
            let msgToSend = sameMessage ? message : `${message} ${i}`;

            setTimeout(() => {
                // @ts-ignore because fakeMessage might not return a real Message object
                client.emit('messageCreate', fakeMessage(client, msgToSend));
            }, i * 100);
        }
    }
}