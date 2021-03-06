
describe('html-lang-valid test', function () {
	'use strict';
	var results;
	before(function (done) {
		window.addEventListener('load', function () {
			axe.a11yCheck(document, { runOnly: { type: 'rule', values: ['html-lang-valid'] } }, function (r) {
				results = r;
				done();
			});
		});
	});

	describe('violations', function () {
		it('should find 2', function () {
			assert.lengthOf(results.violations[0].nodes, 2);
		});
		it('should find first level iframe', function () {
			assert.deepEqual(results.violations[0].nodes[0].target, ['#frame1', '#violation1']);
		});
		it('should find second level iframe', function () {
			assert.deepEqual(results.violations[0].nodes[1].target, ['#frame1', '#frame2', '#violation2']);
		});
	});

	describe('passes', function () {
		it('should find 1', function () {
			assert.lengthOf(results.passes[0].nodes, 1);
		});

		it('should find #pass1', function () {
			assert.deepEqual(results.passes[0].nodes[0].target, ['#frame1', '#frame3', '#pass1']);
		});
	});

});
