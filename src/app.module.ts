import { Module } from '@nestjs/common';
import { HeroModule } from './core/infra/nestJs/modules/hero.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './core/infra/nestJs/config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    HeroModule
  ],
})
export class AppModule {}