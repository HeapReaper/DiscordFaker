import {
    Client,
} from 'discord.js';
import { fakeMember } from './objects/member.ts';
import { fakeMessage } from './objects/message.ts';
import { fakeChannel } from './objects/channel.ts';

export class Faker {
    private static checkClient(client: Client): void {
        if (!client) throw new Error('Client is required for this Faker operation');
    }

    static memberRemove(client: Client): void {
        this.checkClient(client);
        client.emit('guildMemberRemove', fakeMember(client));
    }

    static memberJoin(client: Client): void {
        this.checkClient(client);
        client.emit('guildMemberAdd', fakeMember(client));
    }

    static messageCreate(client: Client): void {
        this.checkClient(client);
        // @ts-ignore
        client.emit('messageCreate', fakeMessage(client));
    }

    static messageEdit(client: Client): void {
        this.checkClient(client);

        // @ts-ignore
        client.emit(
            'messageUpdate',
            fakeMessage(client),
            fakeMessage(client, 'I am a updated message!')
        );
    }

    static messageDelete(client: Client): void {
        this.checkClient(client);

        // @ts-ignore
        client.emit('messageDelete', fakeMessage(client));
    }

    static channelCreate(client: Client): void {
        this.checkClient(client);

        client.emit('channelCreate', fakeChannel(client));
    }

    static channelDelete(client: Client): void {
        this.checkClient(client);

        client.emit('channelDelete', fakeChannel(client));
    }
}