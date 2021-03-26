import Route from '@ember/routing/route';
import ENV from 'happy-go-lucky/config/environment';
import { GiphyFetch } from '@giphy/js-fetch-api';

const gf = new GiphyFetch(ENV.GIPHY_API_KEY);

export default class IndexRoute extends Route {
  async model() {
    let response = [];

    const trending = async () => {
      try {
        const result = await gf.trending({ limit: 200, offset: 3 });
        result.data.forEach((gif) => {
          response.push(gif);
        });
      } catch (error) {
        console.error(`trending`, error);
      }
    };
    await trending();

    return response;
  }
}
