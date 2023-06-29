export class Hero {
  public id: number;
  public name: string;
  public description: string;
  public isFavorite: boolean;
  public imageUrl: string;

  updateIsFavorite(isFavorite: boolean) {
    this.isFavorite = isFavorite;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      isFavorite: this.isFavorite,
      imageUrl: this.imageUrl,
    };
  }
}
