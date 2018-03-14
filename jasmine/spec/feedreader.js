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

    /* TODO: Create a test that checks the feeds urls and ensures they aren't emtpy.
    Iterate through each feed - make sure it is defined.
    Iterate through each feed - make sure it exists.
     */

     function urlFunc(feed) {
       expect(feed.url).toBeDefined();
       expect(feed.url.length).not.toBe(0);
     }

    it('has a url defined and the urls are not empty', function() {
      allFeeds.forEach(urlFunc);
    });

    /* TODO: Create a test that checks the feeds names and ensures they aren't emtpy.
    Iterate through each feed - make sure it is defined.
    Iterate through each feed - make sure it exists.
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

    /* TODO: This test checks if the menu is hidden from the get-go.
    The expect test uses jQuery's 'hasClass' method to determine if the
    css class 'menu-hidden' is applied on dom load.
    */

    it('menu is hidden', function() {
      let bod = $('body');
      expect(bod.hasClass('menu-hidden')).toBe(true);
    });

    /* TODO: This test will check if the menu responds to the click event properly.
    First test will ensure the menu displays once it is clicked on.
    Second test will ensure the menu is hidden once it is clicked on after being shown.
     */

    it('toggles menu visibility on click', function() {
      $('a.menu-icon-link').trigger('click'); // this triggers a 'click' event on the menu - showing the menu
      expect($('body').hasClass('menu-hidden')).toBe(false);

      $('a.menu-icon-link').trigger('click'); // once again, triggers a 'click' event on the menu - hiding the menu
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

  });

  describe('Initial Entries', function() {

    /* TODO: This test has to be async compatible - otherwise it will fail
    even though the script works as intended. This test will check if at least
    one feed loads.
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

    /* TODO: This test compares the old section to the new section to ensure
    the displayed feed is different from the next feed in the queue.
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
