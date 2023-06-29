import { Repository } from 'typeorm';
import { Hero } from '../../domain/hero.entity';
import { HeroRepositoryInterface } from '../../domain/hero-repository.interface';

export class HeroRepository implements HeroRepositoryInterface {
  constructor(private heroRepository: Repository<Hero>) {}

  async insert(hero: Hero): Promise<Hero> {
    return await this.heroRepository.save(hero);
  }
  async findAllFavorites(): Promise<Hero[]> {
    return await this.heroRepository.find({ where: { isFavorite: true } });
  }
  async findByName(name: string): Promise<Hero | null> {
    return await this.heroRepository.findOneBy({ name: name });
  }
}
