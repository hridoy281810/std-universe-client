import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';

const Login = () => {
 const dispatch = useAppDispatch()
  const {register,handleSubmit} = useForm(
    )
    const [login,] = useLoginMutation()
  const onSubmit = async(data) => {
   const userInfo = {
    id: data.id,
    password: data.password
   }
   const res =  await login(userInfo).unwrap()
   const user = verifyToken(res.data.accessToken)
   console.log(user);
   dispatch(setUser({user: user, token: res.data.accessToken}))
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