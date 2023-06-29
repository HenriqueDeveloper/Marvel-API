import { MarvelApiConsumer } from '../infra/http/marvel-api-consumer';

export class SearchNameUseCase {
  private marvelApi = new MarvelApiConsumer();

  async execute(name: string) {
    const heroe = await this.marvelApi.searchHeroesByName(name);
    const result = {
      name: heroe.name,
      description: heroe.description,
      imageUrl: heroe.thumbnail.path.concat('.' + heroe.thumbnail.extension)
    }
    return result;
  }
}

