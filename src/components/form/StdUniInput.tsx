import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';
type TInputProps = {
    type: string,
    name: string,
    label?:string,
    defaultValues?: string
}
const StdUniInput = ({type,name,label,defaultValues}: TInputProps) => {
  return (
    <div style={{marginBottom: "20px"}}>
   <Controller name={name} render={({field})=> <Form.Item label={label}>
   <Input {...field} type={type} id={name}  defaultValue={defaultValues}  style={{ width: "100%" }}
     size='large'/>
   </Form.Item> } />
    </div>
  );
};

export default StdUniInput;