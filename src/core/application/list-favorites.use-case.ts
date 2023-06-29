import { HeroRepositoryInterface } from '../domain/hero-repository.interface';

export class ListFavoritesUseCase {
  constructor(private repository: HeroRepositoryInterface) {}

  async execute(): Promise<ListFavoriteOutput[]> {
    const routes = await this.repository.findAllFavorites();
    return routes.map((r) => r.toJSON());
  }
}

type ListFavoriteOutput = {
  name: string;
  description: string;
  isFavorite: boolean;
  imageUrl: string;
};
