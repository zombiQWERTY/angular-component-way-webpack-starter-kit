describe('Component: Home', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Home –– Angular Webpack Starter Kit');
  });
});
