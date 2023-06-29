import { Hero } from "./hero.entity";

export interface HeroRepositoryInterface {
    insert(hero: Hero): Promise<Hero>;
    findAllFavorites(): Promise<Hero[]>;
    findByName(name: string): Promise<Hero | null>;
}