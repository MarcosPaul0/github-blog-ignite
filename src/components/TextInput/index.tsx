import { InputHTMLAttributes, forwardRef, ForwardedRef } from "react";
import { Input } from "./styles";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = forwardRef(
  (
    { type = "text", ...rest }: TextInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return <Input type={type} {...rest} ref={ref} />;
  }
);
