export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
export interface DetailsInfo {
  address:string, 
  distance?:string, 
  email?:string, 
  phone?:string, 
  url?:string,
  date?: string,
  time?: string,
  price?: string,
  cat?: Array<string>
}