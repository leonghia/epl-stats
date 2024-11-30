export function stringToDate(str: string): Date {
  const parts = str.split("/").map((part) => parseInt(part));
  return new Date(parts[2], parts[1] - 1, parts[0]);
}
