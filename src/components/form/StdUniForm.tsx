
import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
type TFromConfig = {
    defaultValues?: Record<string , any>
}
type TFromProps ={
    onSubmit: SubmitHandler<FieldValues>,
    children: ReactNode
} & TFromConfig
const StdUniForm = ({onSubmit,children,defaultValues}: TFromProps) => {
    const formConfig:TFromConfig = {}
    if(defaultValues){
        formConfig['defaultValues'] = defaultValues;
    }
const methods = useForm(formConfig)
  return (
    <FormProvider {...methods}>
        <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}> {children}</Form>
    </FormProvider>
    
  );
};

export default StdUniForm;