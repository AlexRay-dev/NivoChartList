import React, {RefCallback} from 'react';
import {InputBaseComponentProps} from "@mui/material";
import {IMaskInput} from 'react-imask';

interface ICustomOnChangeProp {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const TextMaskCustom = React.forwardRef<HTMLInputElement,
  Omit<InputBaseComponentProps, "onChange"> & ICustomOnChangeProp>((props, ref) => {
  const {onChange, ...other} = props;
  return (
    <IMaskInput
      {...other}
      mask="#$.%$ ^$:&$"
      definitions={{
        "%": /[0-1]/,
        "^": /[0-2]/,
        "#": /[0-3]/,
        "&": /[0-5]/,
        "$": /[0-9]/,
      }}
      inputRef={ref as RefCallback<HTMLTextAreaElement | HTMLInputElement>}
      onAccept={(value) =>
        onChange({target: {name: props.name, value: value as string}})
      }
      overwrite
    />
  );
});