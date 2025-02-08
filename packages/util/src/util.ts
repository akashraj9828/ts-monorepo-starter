export const capitalize = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const sum = (numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

export const groupBy = <T>(array: T[], key: keyof T): Record<string, T[]> => {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    return {
      ...result,
      [groupKey]: [...(result[groupKey] || []), item],
    };
  }, {} as Record<string, T[]>);
};

export const util = (): void => {
  console.log('This is the util package');
}; 