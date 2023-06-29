/*mport express, {Express, Request, Response} from 'express';
import { MarkFavoriteUseCase } from '../../application/mark-favorite.use-case';
import { AppDataSource } from '../db/data-source';
import { UnmarkFavoriteUseCase } from '../../application/unmark-favorite.use-case';
import { SearchNameUseCase } from '../../application/search-name.use-case';

const app: Express = express();

AppDataSource.initialize();

app.post('/:name/markAsFavorite', async (req: Request, res: Response) => {
    const name = req.params.name;
    const markAsFavorite = new MarkFavoriteUseCase();
    const result = await markAsFavorite.execute(name);
    res.status(200).json(result);
});

app.get('/:name/', async (req: Request, res: Response) => {
    const name = req.params.name;
    const markAsFavorite = new MarkFavoriteUseCase();
    const result = await markAsFavorite.execute(name);
    res.status(200).json(result);
});

app.patch('/:name/unmarkAsFavorite', async (req: Request, res: Response) => {
    const name = req.params.name;
    const markAsFavorite = new UnmarkFavoriteUseCase();
    const result = await markAsFavorite.execute(name);
    res.status(200).json(result);
});

app.get('/:name/search', async (req: Request, res: Response) => {
    const name = req.params.name;
    const markAsFavorite = new SearchNameUseCase();
    const result = await markAsFavorite.execute(name);
    res.status(200).json(result);
});

app.listen(3000, () => {
    console.log("rodou")

})*/