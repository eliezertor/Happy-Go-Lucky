import Route from '@ember/routing/route';
import ENV from 'happy-go-lucky/config/environment';
import { GiphyFetch } from '@giphy/js-fetch-api';

const gf = new GiphyFetch(ENV.GIPHY_API_KEY);

export default class IndexRoute extends Route {
  async model(params) {
    let response;

    const gifs = async () => {
      try {
        const result = await gf.gifs([`${params.gif_id}`]);
        result.data.forEach((gif) => {
          response = gif;
        });
      } catch (error) {
        console.error(`gifs`, error);
      }
    };

    await gifs();

    return response;
  }
}
