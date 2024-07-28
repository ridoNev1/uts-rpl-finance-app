import { forwardRef, useState } from "react";
import { Input } from "@/components/ui/input";

const FormattedNumberInput = forwardRef<HTMLInputElement, any>(
  ({ value, onChange, ...props }, ref) => {
    const [formattedValue, setFormattedValue] = useState(value);

    const handleChange = (event: any) => {
      const inputValue = event.target.value;
      const numericValue = inputValue.replace(/,/g, "");
      if (!/^\d*\.?\d*$/.test(numericValue)) {
        return;
      }
      const formatted = Number(numericValue).toLocaleString();

      setFormattedValue(formatted);
      onChange(numericValue);
    };

    return (
      <Input
        {...props}
        ref={ref}
        value={formattedValue}
        onChange={handleChange}
        inputMode="numeric"
        pattern="[0-9]*"
      />
    );
  }
);

export default FormattedNumberInput;
