export type DropdownItems = {
  destination?: string,
  classes?: string,
  action?: (event: MouseEvent) => void,
  label: string,
  separator?: boolean
}[];
