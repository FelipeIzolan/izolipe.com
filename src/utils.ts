export const slugify = (...args: string[]) => {
  const value = args.join(' ');
  return value
    .replaceAll('-', ' ')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, '-')
}
