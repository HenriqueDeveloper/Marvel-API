import { Module } from '@nestjs/common';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { HeroSchema } from 'src/core/infra/db/hero.schema';
import { HeroController } from '../controllers/hero.controller';
import { HeroService } from '../services/hero.service';
import { HeroRepository } from 'src/core/infra/db/hero.repository';
import { Hero } from 'src/core/domain/hero.entity';
import { MarkFavoriteUseCase } from 'src/core/application/mark-favorite.use-case';
import { HeroRepositoryInterface } from 'src/core/domain/hero-repository.interface';
import { UnmarkFavoriteUseCase } from 'src/core/application/unmark-favorite.use-case';
import { SearchNameUseCase } from 'src/core/application/search-name.use-case';
import { ListFavoritesUseCase } from 'src/core/application/list-favorites.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([HeroSchema])],
  controllers: [HeroController],
  providers: [
    HeroService,
    {
      provide: HeroRepository,
      useFactory: (dataSource: DataSource) => {
        return new HeroRepository(dataSource.getRepository(Hero));
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: MarkFavoriteUseCase,
      useFactory: (heroRepo: HeroRepositoryInterface) => {
        return new MarkFavoriteUseCase(heroRepo);
      },
      inject: [HeroRepository],
    },
    {
      provide: UnmarkFavoriteUseCase,
      useFactory: (heroRepo: HeroRepositoryInterface) => {
        return new UnmarkFavoriteUseCase(heroRepo);
      },
      inject: [HeroRepository],
    },
    {
      provide: SearchNameUseCase,
      useFactory: () => {
        return new SearchNameUseCase();
      },
    },
    {
      provide: ListFavoritesUseCase,
      useFactory: (heroRepository: HeroRepositoryInterface) => {
        return new ListFavoritesUseCase(heroRepository);
      },
      inject: [HeroRepository],
    },
  ],
})
export class HeroModule {}