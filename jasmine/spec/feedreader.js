/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('has URL defined and URL are not empty', function(){
           allFeeds.forEach(function(feed){
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           });
         });

         /* This test loops through each feed
          * in the allFeeds object and ensures it has a name defined
          * and that the name is not empty.
          */

         it('has the name defined and the name is not empty', function(){
           allFeeds.forEach(function(feed){
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           });
         });
    });


    describe('The menu', function(){

        /* This test ensures that the menu element is
         * hidden by default.
         */

         it('is hidden by default', function(){
            let bodyElement = document.querySelector('body');
            expect(bodyElement.classList.contains('menu-hidden')).toBe(true);
         });

         /* This test ensures that the menu changes
          * visibility when the menu icon is clicked.
          */

          it('toggles the visibility on click event', function(){
            let bodyElement = document.querySelector('body');
            let menuElement = document.getElementsByClassName('menu-icon-link');

            $(menuElement).trigger('click'); // show menu (using JQuery)
            expect(bodyElement.classList.contains('menu-hidden')).toBe(false);

            $(menuElement).trigger('click'); // hide menu (using JQuery)
            expect(bodyElement.classList.contains('menu-hidden')).toBe(true);
          });
     });

    describe('Ititial Entries', function(){

        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
        */

         beforeEach(function(done){
           loadFeed(0, done);
         });

         it('define if feed has at least a single entry', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
          });
    });

    describe('New Feed Selection', function(){

        /* This test ensures that when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

        let oldContent;

        beforeEach(function(done){
          loadFeed(0, function(){
            oldContent = $('.feed').html(); // return content using JQuery html() method
            loadFeed(1, done);
          });
        });

        it('is changed', function(){
          expect($('.feed').html()).not.toBe(oldContent);
        });
    });
}());
