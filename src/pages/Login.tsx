import { Button } from 'antd';
import { FieldValues, useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { TUser, setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate()
 const dispatch = useAppDispatch()
  const {register,handleSubmit} = useForm()
    const [login] = useLoginMutation()
  const onSubmit = async(data: FieldValues) => {
   const toastId = toast.loading('logging in')
  try{
    const userInfo = {
      id: data.id,
      password: data.password
     }
     const res =  await login(userInfo).unwrap()
     const user = verifyToken(res.data.accessToken) as TUser;
     console.log(user);
     dispatch(setUser({user: user, token: res.data.accessToken}))
     toast.success('logged in',{id:toastId,duration:2000})
     navigate(`/${user.role}/dashboard`)
  }catch(error){
toast.error('something went wrong',{id:toastId,duration:2000})
  }
  }
  return (
    <div>
   <form onSubmit={handleSubmit(onSubmit)}>
   <div>
        <label htmlFor="id">ID: </label>
        <input type="text" {...register('id')} id='id'/>
      </div>
      <div>
        <label htmlFor="password">ID: </label>
        <input type="text" {...register('password')} id='password'/>
      </div>
      <Button htmlType='submit'> submit</Button>
   </form>
    </div>
  );
};

export default Login;