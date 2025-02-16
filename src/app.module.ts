import { Module } from '@nestjs/common'
import { IntentsBitField } from 'discord.js'
import { NecordModule } from 'necord'

import { AppService } from './app.service'

@Module({
  imports: [
    NecordModule.forRoot({
      token: 'DISCORD_BOT_TOKEN_HERE',
      intents: [IntentsBitField.Flags.Guilds],
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
