import { EntitySchema } from "typeorm";
import { Hero } from "../../domain/hero.entity";

export const HeroSchema = new EntitySchema<Hero>({
    name: "hero",
    target: Hero,
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true
        },
        name: {
            type: "varchar",
            length: 50
        },

        description: {
            type: "varchar",
            length: 255
        },

        isFavorite: {
            type: "boolean",
            default: false,
            name: "is_favorite"
        },

        imageUrl: {
            type: "varchar",
            name: "image_url",
        } 
    }
})