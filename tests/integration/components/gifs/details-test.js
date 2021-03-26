import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | gifs/details', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      gif: {
        id: 'X1hi07NJLkXWwiBbI7',
        user: {
          avatar_url: 'https://media0.giphy.com/avatars/news/hggHJAb9dlmy.gif',
          display_name: 'GIPHY News',
          username: 'news',
          banner_image:
            'https://media0.giphy.com/channel_assets/news/s2pdBLQhzA3Z.gif',
        },
        url: 'https://giphy.com/gifs/news-vanita-gupta-X1hi07NJLkXWwiBbI7',
        title: 'Vanita Gupta GIF by GIPHY News',
        images: {
          downsized: {
            url:
              'https://media4.giphy.com/media/X1hi07NJLkXWwiBbI7/giphy-downsized.gif?cid=6ff8b7a5cb6fcb60525a4dce87966153dfa2f18d2e263475&rid=giphy-downsized.gif&ct=g',
          },
        },
      },
    });
  });

  test('it renders the gifs in gifs/:gif_id', async function (assert) {
    await render(hbs`<Gifs::Details @gif={{this.gif}} />`);
    assert
      .dom('.id .id__banner')
      .hasAttribute(
        'src',
        'https://media0.giphy.com/channel_assets/news/s2pdBLQhzA3Z.gif'
      );
    assert
      .dom('.id__avatar')
      .hasAttribute(
        'src',
        'https://media0.giphy.com/avatars/news/hggHJAb9dlmy.gif'
      );
    assert.dom('.id__name').containsText('GIPHY News');
    assert.dom('.id__title').containsText('Vanita Gupta GIF by GIPHY News');
    assert
      .dom('.id__image')
      .hasAttribute(
        'src',
        'https://media4.giphy.com/media/X1hi07NJLkXWwiBbI7/giphy-downsized.gif?cid=6ff8b7a5cb6fcb60525a4dce87966153dfa2f18d2e263475&rid=giphy-downsized.gif&ct=g'
      );

    // ! Ask about conditional test
    // assert
    //   .dom('id__user-name-url')
    //   .hasAttribute(
    //     'href',
    //     'https://giphy.com/gifs/news-vanita-gupta-X1hi07NJLkXWwiBbI7'
    //   );

    await render(hbs`<Gifs::Details @gif={{@model}} />`);

    assert.dom('main').hasClass('id').exists();
    assert.dom('.id .id__banner').exists();
    assert.dom('.id__avatar').exists();
    assert.dom('.id__name').exists();
    assert.dom('.id__title').exists();
  });
});
