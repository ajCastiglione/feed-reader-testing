/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* TODO: Write a test that loops through each feed
     in the allFeeds object and ensures it has a URL
     defined and that the URL is not empty.
     */

     function urlFunc(feed) {
       expect(feed.url).toBeDefined();
       expect(feed.url.length).not.toBe(0);
     }

    it('has a url defined and the urls are not empty', function() {
      allFeeds.forEach(urlFunc);
    });

    /* TODO: Write a test that loops through each feed
    in the allFeeds object and ensures it has a name
    defined and that the name is not empty.
     */

    function eachFunc(feed) {
      expect(feed.name).toBeDefined();
      expect(feed.name.length).not.toBe(0);
    }

    it("Feed has a name and the field isn't empty", function() {
      allFeeds.forEach(eachFunc);
    });
  });

  describe('The Menu', function() {

    /* TODO: Write a test that ensures the menu element is hidden by default.
        You'll have to analyze the HTML and the CSS to determine how we're performing
        the hiding/showing of the menu element.
    */

    it('menu is hidden', function() {
      let bod = $('body');
      expect(bod.hasClass('menu-hidden')).toBe(true);
    });

    /* TODO: Write a test that ensures the menu changes visibility
     when the menu icon is clicked. This test should have two expectations:
     does the menu display when clicked and does it hide when clicked again.
     */

    it('toggles menu visibility on click', function() {
      $('a.menu-icon-link').trigger('click'); // this triggers a 'click' event on the menu - showing the menu
      expect($('body').hasClass('menu-hidden')).toBe(false);

      $('a.menu-icon-link').trigger('click'); // once again, triggers a 'click' event on the menu - hiding the menu
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

  });

  describe('Initial Entries', function() {

    /* TODO: Write a test that ensures when the loadFeed function
    is called and completes its work, there is at least a single
    .entry element within the .feed container.
     */

    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it('are present', function() {
      let entry = $('.feed .entry');
      expect(entry.length).toBeGreaterThan(0); // this checks if there is at least 1 entry
    });
  });

  describe('New Feed Selection', function() {
    let oldFeed;

    /* TODO: Write a test that ensures when a new feed is loaded
     by the loadFeed function that the content actually changes.
     */
    beforeEach(function(done) {
      loadFeed(0, function() {
        // store old feed
        oldFeed = $('.feed').html();
        // fetch newer feed
        loadFeed(1, done);
      });
    });

    it('is different from the old feed', function() {
      let feed = $('.feed');
      expect(feed.html()).not.toBe(oldFeed);
    });
  });

}());
