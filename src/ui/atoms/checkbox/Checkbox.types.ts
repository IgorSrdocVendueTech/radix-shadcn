export enum LabelPosition {
  LEFT = "left",
  RIGHT = "right",
}

export type CheckboxProps = {
  label?: React.ReactNode;
  labelPosition?: LabelPosition;
  name?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
};
