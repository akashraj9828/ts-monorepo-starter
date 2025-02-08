import { capitalize, sum, groupBy } from '../util';

describe('Utility Functions', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
    });

    it('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });

    it('should handle already capitalized strings', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });
  });

  describe('sum', () => {
    it('should sum an array of numbers', () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });

    it('should return 0 for empty array', () => {
      expect(sum([])).toBe(0);
    });

    it('should handle negative numbers', () => {
      expect(sum([-1, 1, -2, 2])).toBe(0);
    });
  });

  describe('groupBy', () => {
    interface TestItem {
      id: number;
      category: string;
      value: string;
    }

    const testData: TestItem[] = [
      { id: 1, category: 'A', value: 'first' },
      { id: 2, category: 'B', value: 'second' },
      { id: 3, category: 'A', value: 'third' },
    ];

    it('should group array items by key', () => {
      const result = groupBy(testData, 'category');
      expect(result).toEqual({
        A: [
          { id: 1, category: 'A', value: 'first' },
          { id: 3, category: 'A', value: 'third' },
        ],
        B: [{ id: 2, category: 'B', value: 'second' }],
      });
    });

    it('should handle empty array', () => {
      const result = groupBy([], 'category');
      expect(result).toEqual({});
    });
  });
});
