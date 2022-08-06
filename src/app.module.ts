import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mongodb',
      url: 'mongodb+srv://auth_wiki_team10:auth_wiki_team10@cluster0.96g0xco.mongodb.net/authWikiNest?retryWrites=true&w=majority',
      database: 'authWikiNest',
      useNewUrlParser: true,
      autoLoadEntities: true,
      useUnifiedTopology: true,
      entities: [join(__dirname + '/**/*.entity{.ts,.js}')],
    }),
    ConfigModule.forRoot({}),
    AuthModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
