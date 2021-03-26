import EmberRouter from '@ember/routing/router';
import config from 'happy-go-lucky/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('gif', { path: 'gifs/:gif_id' });
});
