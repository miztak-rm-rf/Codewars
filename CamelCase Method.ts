export function camelCase(str: string): string {
  return str.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase()).join('');
}
