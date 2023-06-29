import 'dotenv/config';
import * as CryptoJS from 'crypto-js';
import axios, { AxiosResponse } from 'axios';
import { NotFoundError } from 'src/core/domain/api-error';

export class MarvelApiConsumer {
  async searchHeroesByName(name: string): Promise<CreateHeroOutput> {
    const ts = Date.now().toString();
    const publicKey = process.env.MARVEL_API_PUBLIC_KEY;
    const privateKey = process.env.MARVEL_API_PRIVATE_KEY;
    const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

    const response: AxiosResponse = await axios.get(
      `https://gateway.marvel.com/v1/public/characters`,
      {
        params: {
          ts: ts,
          name: name,
          apikey: publicKey,
          hash: hash,
        },
      },
    );
    const result = response.data.data.results[0];

    if (!result) {
      throw new NotFoundError('Hero not found');
    } else {
      return await result;
    }
  }
}

type CreateHeroOutput = {
  name: string;
  description: string;
  isFavorite: boolean;
  thumbnail: {
    path: string
    extension: string
  };
};
