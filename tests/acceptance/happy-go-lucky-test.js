import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

import click from '@ember/test-helpers/dom/click';

module('Acceptance | happy go lucky', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Happy-Go-Lucky');

    await click('.nav .nav__logo');
    assert.equal(currentURL(), '/');

    await click('.gifs .gifs__link');
  });

  test('visiting /gifs/:gif_id', async function (assert) {
    setupApplicationTest(hooks);
    await visit('/gifs/AP500KNHFQh18AdVpp');

    assert.equal(currentURL(), '/gifs/AP500KNHFQh18AdVpp');
    assert.dom('nav').exists();

    await click('.nav .nav__logo');
    assert.equal(currentURL(), '/');
  });
});
