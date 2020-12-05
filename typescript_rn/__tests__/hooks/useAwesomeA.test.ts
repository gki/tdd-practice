import {renderHook} from '@testing-library/react-hooks';
import useAwesomeA from '../../src/hooks/useAwesomeA';
import useAwesomeB from '../../src/hooks/useAwesomeB';
import {useAwesomeD} from '../../src/hooks/useAwesomeD';

jest.mock('../../src/hooks/useAwesomeB');
jest.mock('../../src/hooks/useAwesomeD');

describe('Custom Hookのテスト方法', () => {
  const mockMessageB = 'message from mockB';
  const mockMessageD = 'message from mockD';

  beforeAll(() => {
    (useAwesomeB as jest.Mock).mockImplementation(() => ({
      awesomeFuncB: jest.fn().mockReturnValue(mockMessageB),
    }));

    (useAwesomeD as jest.Mock).mockImplementation(() => ({
      awesomeFuncD: jest.fn().mockReturnValue(mockMessageD),
    }));
  });

  beforeEach(() => {
    (useAwesomeB as jest.Mock).mockClear();
  });

  test('Custom Hookが別のCustom Hookを呼び出しているときののテスト', () => {
    const {result} = renderHook(() => useAwesomeA());

    expect(result.current.awesome()).toBe(
      `Hellow! Here are messages for you!: ${mockMessageB}, message from C!, ${mockMessageD}`,
    );
  });
});
