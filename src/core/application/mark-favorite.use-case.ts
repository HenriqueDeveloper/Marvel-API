import { Hero } from '../domain/hero.entity';
import { HeroRepositoryInterface } from '../domain/hero-repository.interface';
import { MarvelApiConsumer } from '../infra/http/marvel-api-consumer';

export class MarkFavoriteUseCase {
  constructor(private heroRepository: HeroRepositoryInterface) {}

  private marvelApi = new MarvelApiConsumer();

  async execute(name: string): Promise<MarkHeroOutput> {
    const heroeApi = await this.marvelApi.searchHeroesByName(name);
    const heroe = new Hero();
    heroe.name = heroeApi.name;
    heroe.description = heroeApi.description;
    heroe.isFavorite = true;
    heroe.description = heroeApi.description;
    heroe.imageUrl = heroeApi.thumbnail.path.concat('.' + heroeApi.thumbnail.extension);
    this.heroRepository.insert(heroe);
    return heroe.toJSON();
  }
}
type MarkHeroOutput = {
  name: string;
  description: string;
  isFavorite: boolean;
  imageUrl: string;
};
