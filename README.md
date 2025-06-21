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
### Faker
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

### Spam
```ts
import { Spam } from '@heapreaper/discordfaker';

Spam.massMessage(client, 10, true, 'I am a fake message!');
```


## License
This project is licensed under the GNU GENERAL PUBLIC LICENSE Version 3, License - see the LICENSE file for details

