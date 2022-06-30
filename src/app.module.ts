import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { Participante } from './participante/entity/participante.entity';
import { ParticipanteModule } from './participante/participante.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Participante],
      synchronize: true,
    }),
    ParticipanteModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
