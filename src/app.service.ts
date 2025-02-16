import { Once, Context, ContextOf } from 'necord'
import { Injectable, Logger } from '@nestjs/common'

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name)

  @Once('ready')
  public onReady(@Context() [client]: ContextOf<'ready'>) {
    this.logger.log(`Bot logged in as ${client.user.username}`)
  }
}
