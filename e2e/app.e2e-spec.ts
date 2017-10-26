import { NgZingchartConsumerAppPage } from './app.po';

describe('ng-zingchart-consumer-app App', () => {
  let page: NgZingchartConsumerAppPage;

  beforeEach(() => {
    page = new NgZingchartConsumerAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
