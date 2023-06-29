import { Hero } from '../domain/hero.entity';
import { HeroRepositoryInterface } from '../domain/hero-repository.interface';

export class UnmarkFavoriteUseCase {
  constructor(private heroRepository: HeroRepositoryInterface) {}

  async execute(name: string) {
    const hero = await this.heroRepository.findByName(name);
      const newHero = new Hero();
      newHero.id = hero.id;
      newHero.updateIsFavorite(false);
      await this.heroRepository.insert(newHero);
      return { message: 'hero removed from favorites', status: true };
    }
  }
