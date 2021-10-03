import { act, renderHook } from '@testing-library/react-hooks';
import { useClientDimensions } from '../src';

describe('useClientDimensions() hook', () => {
  let windowSpy: jest.SpyInstance;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('basic test', () => {
    let resizeFn = () => {};
    windowSpy.mockImplementation(() => ({
      innerHeight: 100,
      innerWidth: 200,
      addEventListener: (_: string, fn: () => void) => (resizeFn = fn),
      removeEventListener: jest.fn(),
    }));

    const { result } = renderHook(() => useClientDimensions());

    expect(result.current.vh).toBe(100);
    expect(result.current.vw).toBe(200);
    windowSpy.mockImplementation(() => ({
      innerHeight: 400,
      innerWidth: 800,
    }));
    expect(result.current.vh).toBe(100);
    expect(result.current.vw).toBe(200);
    act(() => {
      // invoke a mock window resize event to trigger hook
      resizeFn();
    });
    expect(result.current.vh).toBe(400);
    expect(result.current.vw).toBe(800);
  });
});
