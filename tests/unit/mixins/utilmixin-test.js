import Ember from 'ember';
import UtilmixinMixin from 'online-test/mixins/utilmixin';
import { module, test } from 'qunit';

module('Unit | Mixin | utilmixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let UtilmixinObject = Ember.Object.extend(UtilmixinMixin);
  let subject = UtilmixinObject.create();
  assert.ok(subject);
});
