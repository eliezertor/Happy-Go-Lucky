import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | gif', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.setupRouter();
  });

  test('it renders gif component', async function (assert) {
    await render(hbs`<Gif @gif={{gifs}} />`);
    assert.dom('article').exists();
    assert.dom('.gifs__image').exists();
  });
});
