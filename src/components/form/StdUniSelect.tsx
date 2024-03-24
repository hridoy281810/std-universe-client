
import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';
type TSelectProps = {
   name: string,
   label: string,
   options: {value: string; label: string; disabled?:boolean}[] | undefined
   disabled?:boolean,
   mode?: 'multiple' | undefined
}
const StdUniSelect = ({label,name,options,disabled,mode}:TSelectProps) => {

  return (
    <Controller name={name} render={({field,fieldState: {error}})=> <Form.Item   label={label}>
    <Select mode={mode} {...field} 
    disabled={disabled}
      style={{ width: "100%" }}
      options={options} size='large'
        />
        {error && <small style={{color: "red"}}>{error.message}</small>}
        </Form.Item> } />
  
 

  );
};

export default StdUniSelect;