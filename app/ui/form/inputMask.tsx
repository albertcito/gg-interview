import { Input as AntdInput, type InputProps, type InputRef } from "antd";
import IMask, { type AnyMaskedOptions, type MaskedPattern } from "imask";
import { useState, useMemo, useRef, type RefAttributes } from "react";

type SubmitOptions =
  | {
      unmask: false;
      fixedChars?: never;
    }
  | {
      unmask: true;
      fixedChars?: string;
    };

type InputPropsType = InputProps &
  RefAttributes<InputRef> & {
    mask?: AnyMaskedOptions["mask"];
    definitions?: MaskedPattern["definitions"];
    maskOptions?: Omit<AnyMaskedOptions, "mask">;
    submitOptions?: SubmitOptions;
  };

export const Input = ({
  name,
  value,
  defaultValue,
  ref,
  mask,
  definitions,
  maskOptions: _maskOptions,
  submitOptions = { unmask: true },
  ...props
}: InputPropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { unmask, fixedChars } = submitOptions;
  const maskOptions = useMemo(() => {
    return !mask
      ? { mask: String }
      : ({
          mask,
          definitions: {
            // @ts-ignore
            ..._maskOptions?.definitions,
            ...definitions,
          },
          ..._maskOptions,
          lazy: true, // make placeholder always hidden
        } as AnyMaskedOptions);
  }, [_maskOptions, definitions, mask]);

  const masked = {
    mask: IMask.createPipe(
      maskOptions,
      IMask.PIPE_TYPE.MASKED,
      IMask.PIPE_TYPE.TYPED
    ),
    unmask: (value: string) => {
      const unmasked = IMask.pipe(
        value,
        maskOptions,
        IMask.PIPE_TYPE.MASKED,
        IMask.PIPE_TYPE.UNMASKED
      );
      return fixedChars
        ? value
            .split("")
            .filter((char) => (fixedChars + unmasked).includes(char))
            .join("")
        : unmasked;
    },
  };
  const initialValue = masked.mask(value ?? defaultValue ?? "");
  const [fieldValue, setFieldValue] = useState(initialValue);
  const [maskedFieldValue, setMaskedFieldValue] = useState(initialValue);

  const handleChange = (e: any) => {
    const input = e.target as HTMLInputElement;
    const maskedValue = masked.mask(input.value);
    const currentValue = unmask ? masked.unmask(maskedValue) : maskedValue;
    input.value = currentValue;
    setFieldValue(currentValue);
    setMaskedFieldValue(maskedValue);

    if (props.onChange) props.onChange(e);

    console.log({
      current: input.value,
      unmaskedValue: masked.unmask(maskedValue),
      maskedValue,
    });
  };

  return (
    <>
      <input type="hidden" name={name} value={fieldValue} />
      <AntdInput {...props} value={maskedFieldValue} onChange={handleChange} />
    </>
  );
};
