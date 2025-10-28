import { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { Input} from "@chakra-ui/react";
import type { InputProps } from "@chakra-ui/react";

interface InputUnformProps extends InputProps {
  name: string;
}

export function InputUnform({ name, ...rest }: InputUnformProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: ref => ref.value,
      setValue: (ref, value) => { ref.value = value; },
      clearValue: ref => { ref.value = ""; },
    });
  }, [fieldName, registerField]);

  return (
    <Input
      ref={inputRef}
      defaultValue={defaultValue}
      isInvalid={!!error}
      {...rest}
    />
  );
}
