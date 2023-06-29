import { Injectable } from '@nestjs/common';
import { MarkFavoriteUseCase } from 'src/core/application/mark-favorite.use-case';
import { SearchNameUseCase } from 'src/core/application/search-name.use-case';
import { ListFavoritesUseCase } from 'src/core/application/list-favorites.use-case';
import { UnmarkFavoriteUseCase } from 'src/core/application/unmark-favorite.use-case';

@Injectable()
export class HeroService {
  constructor(
    private marFavoriteUseCase: MarkFavoriteUseCase,
    private unmarkFavoriteUseCase: UnmarkFavoriteUseCase,
    private searchNameUseCase: SearchNameUseCase,
    private listFavoriteUseCase: ListFavoritesUseCase,
  ) {}

  markFavorite(name: string) {
    return this.marFavoriteUseCase.execute(name);
  }

  unmarkFavorite(name: string) {
    return this.unmarkFavoriteUseCase.execute(name);
  }

  searchName(name: string) {
    return this.searchNameUseCase.execute(name);
  }

  listFavorites() {
    return this.listFavoriteUseCase.execute();
  }
}
