import { Form, Input } from 'antd';
import { Controller } from 'react-hook-form';
type TInputProps = {
    type: string,
    name: string,
    label?:string
}
const StdUniInput = ({type,name,label}: TInputProps) => {
  return (
    <div style={{marginBottom: "20px"}}>
   <Controller name={name} render={({field})=> <Form.Item label={label}>
   <Input {...field} type={type} id={name}    style={{ width: "100%" }}
     size='large'/>
   </Form.Item> } />
    </div>
  );
};

export default StdUniInput;