import { useState, forwardRef, useEffect } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { CheckboxProps, LabelPosition } from "./Checkbox.types";

const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps
>(
  (
    { className, label, labelPosition = LabelPosition.RIGHT, ...props },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(props.checked);

    function handleChange(checked: boolean) {
      if (props.onCheckedChange) {
        props.onCheckedChange(checked);
      }
      if (props.checked === undefined) {
        setIsChecked(!isChecked);
      }
    }

    useEffect(() => {
      setIsChecked(props.checked);
    }, [props.checked]);

    return (
      <div className={cn("flex items-center justify-start", className)}>
        {label && labelPosition === LabelPosition.LEFT && (
          <div className={"mr-2"}>
            <p>{label}</p>
          </div>
        )}
        <CheckboxPrimitive.Root
          ref={ref}
          className={cn(
            "peer h-4 w-4 shrink-0 rounded-sm border border-zinc-200 border-zinc-900 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-zinc-900 data-[state=checked]:text-zinc-50 dark:border-zinc-800 dark:border-zinc-50 dark:focus-visible:ring-zinc-300 dark:data-[state=checked]:bg-zinc-50 dark:data-[state=checked]:text-zinc-900",
            className
          )}
          {...props}
          checked={isChecked}
          onCheckedChange={handleChange}
        >
          <CheckboxPrimitive.Indicator
            className={cn("flex items-center justify-center text-current")}
          >
            <Check className="h-4 w-4" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && labelPosition === LabelPosition.RIGHT && (
          <div className="ml-2">
            <p>{label}</p>
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
