import { Controller, Get, Post, Patch, Param } from '@nestjs/common';
import { HeroService } from '../services/hero.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('hero')
@ApiTags('Hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Post(':name/markAsFavorite')
  markFavorite(@Param('name') name: string) {
    return this.heroService.markFavorite(name);
  }

  @Patch(':name/unmarkAsFavorite')
  unmarkFavorite(@Param('name') name: string) {
    return this.heroService.unmarkFavorite(name);
  }

  @Get(':name/search')
  searchName(@Param('name') name: string) {
    return this.heroService.searchName(name);
  }

  @Get('favorites')
  listFavorites() {
    return this.heroService.listFavorites();
  }

}
