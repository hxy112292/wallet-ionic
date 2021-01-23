import { XrpKeyPair } from './xrp-key-pair';

describe('XrpKeyPair', () => {
  it('should create an instance', () => {
    expect(new XrpKeyPair()).toBeTruthy();
  });
});
