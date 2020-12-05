import {renderHook} from '@testing-library/react-hooks';
import useAwesomeC from '../../src/hooks/useAwesomeC';

describe('Custom Hookのテスト方法', () => {
  test('他のCustom Hookに依存していないCustom Hookのテスト', () => {
    const {result} = renderHook(() => useAwesomeC());

    expect(result.current.awesomeFuncC()).toBe('message from C!');
  });
});
