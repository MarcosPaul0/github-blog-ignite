import { InputHTMLAttributes } from "react";
import { Input } from "./styles";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput({ ...rest }: TextInputProps) {
  return <Input {...rest} />;
}
