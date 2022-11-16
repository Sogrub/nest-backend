import { TicketsMiddleware } from './tickets.middleware';

describe('TicketsMiddleware', () => {
  it('should be defined', () => {
    expect(new TicketsMiddleware()).toBeDefined();
  });
});
