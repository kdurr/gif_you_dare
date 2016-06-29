import { test } from 'qunit';
import moduleForAcceptance from 'r-gifs/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | homepage');

test('visiting /gif-selector', function(assert) {
  visit('/gif-selector');

  andThen(function() {
    assert.equal(currentURL(), '/gif-selector');
  });
});

test('should link to new gifs', function(assert) {
  visit('/');
  click('a:contains("new")');
  andThen(function() {
    assert.equal(currentURL(), '/new', 'should navigate to new');
  });
});

test('should link to popular gifs', function(assert) {
  visit('/');
  click('a:contains("hot")');
  andThen(function() {
    assert.equal(currentURL(), '/popular', 'should navigate to popular');
  });
});
