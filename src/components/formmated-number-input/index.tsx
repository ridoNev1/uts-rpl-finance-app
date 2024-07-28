import { forwardRef, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

const FormattedNumberInput = forwardRef<HTMLInputElement, any>(
  ({ value, onChange, ...props }, ref) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
      setInputValue(formatNumber(value));
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = event.target.value.replace(/\./g, "");
      if (/^\d*\.?\d*$/.test(rawValue)) {
        setInputValue(rawValue);
        onChange(rawValue);
      }
    };

    const handleBlur = () => {
      setInputValue(formatNumber(inputValue));
    };

    const formatNumber = (value: string | number): string => {
      const num = parseFloat(String(value).replace(/\./g, ""));
      if (isNaN(num)) {
        return "";
      }
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return (
      <Input
        {...props}
        ref={ref}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        inputMode="numeric"
      />
    );
  }
);

export default FormattedNumberInput;
