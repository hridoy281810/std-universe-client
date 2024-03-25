
import { Form, Select } from 'antd';
import { useEffect } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
type TSelectProps = {
   name: string,
   label: string,
   options: {value: string; label: string; disabled?:boolean}[] | undefined
   disabled?:boolean,
   mode?: 'multiple' | undefined
   onValueChange: React.Dispatch<React.SetStateAction<string>>
}
const StdUniSelectWithWatch = ({label,name,options,disabled,mode,onValueChange}:TSelectProps) => {
  const {control}= useFormContext()
const inputValue = useWatch({
  control,
  name
})
// console.log(inputValue);
useEffect(()=>{
    onValueChange(inputValue)
},[inputValue])
  return (
    <Controller name={name} render={({field,fieldState: {error}})=> <Form.Item   label={label}>
    <Select  mode={mode} {...field} 
    disabled={disabled}
      style={{ width: "100%" }}
      options={options} size='large'
        />
        {error && <small style={{color: "red"}}>{error.message}</small>}
        </Form.Item> } />
  
 

  );
};


export default StdUniSelectWithWatch;