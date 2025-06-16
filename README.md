# DiscordFaker
Fake events in Discord.js to cut down on development time!

## Current available fakes
- GuildMemberAdd (use it with memberAdd)
- GuildMemberRemove (use it with memberRemove)
- messageCreate
- messageEdit
- messageDelete
- channelCreate
- channelDelete

## How to use?
```ts
import { Faker } from '@heapreaper/discordfaker';

Faker.memberRemove(client);
Faker.memberAdd(client);
Faker.messageCreate(client);
Faker.messageEdit(client);
Faker.messageDelete(client);
Faker.channelCreate(client);
Faker.channelDelete(client);
```

## License
This project is licensed under the GNU GENERAL PUBLIC LICENSE Version 3, License - see the LICENSE file for details

