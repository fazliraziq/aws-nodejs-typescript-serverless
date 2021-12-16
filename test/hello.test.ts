import { handler } from '../src/functions/hello';

describe('[hello]', () => {
  it('should not crash', async () => {
    await handler({}, {});
  });
});