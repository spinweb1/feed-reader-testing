/* feedreader.js
 *
 * This is the spec file that Jasmine will read which contains
 * all of the tests that will be run against this application.
 */

/* All tests are placed within the $() function,
 * since some of these tests may require DOM elements. This
 * ensures they don't run until the DOM is ready.
 */
$(function() {
    /* This is the first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This test makes sure that the allFeeds variable has been
         * defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not empty.
         */
		 it('url defined', function() {
			 for(var i = 0; i<allFeeds.length; i++){
				 expect(allFeeds[i].url).toBeDefined();
				 expect(allFeeds[i].url.length).not.toBe(0);
			 }
		 });


        /* This test loops through each feed in the allFeeds object
         * and ensures it has a name defined and that the name is not empty.
         */		 
		 it('name defined', function() {
			 for(var i = 0; i<allFeeds.length; i++){
				 expect(allFeeds[i].name).toBeDefined();
				 expect(allFeeds[i].name.length).not.toBe(0);
			 }
		 });
    });

	
	describe('The menu', function() {

        /* This test ensures the menu element is hidden by default. */
		 
		 it('hidden by default', function() {
			 expect($('body')).toHaveClass('menu-hidden');
		 });

         /* This test ensures the menu changes visibility when the
          * menu icon is clicked. Specifically: does the menu display when
          * clicked and does it hide when clicked again.
          */
		  		  
		 it('is menu visibile', function() {
			 $('.menu-icon-link').trigger('click');
			 expect($('body')).not.toHaveClass('menu-hidden');
		 });
		 
		 it('is menu hidden', function() {
			 $('.menu-icon-link').trigger('click');
			 expect($('body')).toHaveClass('menu-hidden');			 			 
		 });		  
	});

	
	describe('Initial entries', function() {

        /* This test ensures that when the asynchronous loadFeed function
         * is called and completes its work, there is at least a single .entry
         * element within the .feed container.
         */
		 
		beforeEach(function(done){
			loadFeed(0, done);
		});
		 
		it('Async loadFeed not null', function() {
			expect($('.feed .entry')).toBeDefined();
		});	
	});
			 
	
	describe('New Feed Selection', function() {

        /* This test ensures that when a new feed is loaded by the
         * asynchronous loadFeed function that the content actually changes.
         */
		 
		var feed0;
		 
		beforeEach(function(done){
			loadFeed(1, function() {
				feed0 = $('.feed').html();
				done();
			});
		});
		
		it('content changes when feed loads', function(done) {
			loadFeed(0, function() {
				expect($('.feed').html()).not.toEqual(feed0);
				done();
			});
		});		
	});		 
}());