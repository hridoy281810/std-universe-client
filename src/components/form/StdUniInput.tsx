import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';
type TInputProps = {
    type: string,
    name: string,
    label?:string,
    defaultValues?: string
    disabled?:boolean
}
const StdUniInput = ({type,name,label,defaultValues,disabled}: TInputProps) => {
  return (
    <div style={{marginBottom: "20px"}}>
   <Controller name={name} render={({field})=> <Form.Item label={label}>
   <Input disabled={disabled} {...field} type={type} id={name}  defaultValue={defaultValues}  style={{ width: "100%" }}
     size='large'/>
   </Form.Item> } />
    </div>
  );
};

export default StdUniInput;