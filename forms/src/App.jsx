import { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./App.css"
function App() {
  const [input, setInput] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitButton = (userInfro) => {
    console.log(userInfro)
    setInput(true);
  };
return (
    <div className='main'>
      <h1>Form</h1>
      <div style={{backgroundColor: "green" , textAlign: 'center' , fontSize: "2rem"}}>{input == true ? 'Registration Successfull' : ''}</div>
      <form onSubmit={handleSubmit(submitButton)}>
        <div>
          <input type="text" placeholder="Enter First Name.." {...register('firstName', {
              required: 'Please dont keep input empty',})}/>
          <div style={{ color: 'red' }}>
            {errors.firstName ? errors.firstName.message : null}
          </div>
        </div>
        <div>
          <input type="text" placeholder="Enter Last Name.." {...register('lastName', {
              required: 'Please dont keep input empty', })}/>
          <div style={{ color: 'red' }}>
            {errors.lastName ? errors.lastName.message : null}
          </div>
        </div>
        <div>
          <input type="email" placeholder="Enter Email Id.." {...register('email', { required: true,
          validate: (value) => {
          if (value.includes('@')) {
            return true;
          }
            return 'invalid email id';
          },})}/>
          <div style={{ color: 'red' }}>
            {errors.email ? errors.email.message : null}
          </div>
        </div>
        <div>
          <input type="password" placeholder="Enter strong Password.." {...register('password', {required: true,
              minLength: {
                value: 5,
                message: 'Password must be more than 4 characters',
              },
              maxLength: {
                value: 20,
                message: 'Password cannot be more than 20 characters',
              },
            })}
          />
          <div style={{ color: 'red' }}>
            {errors.password ? errors.password.message : null}
          </div>
        </div>
        <input type="submit" value={'Register'} />
      </form>
    </div>
  );
}

export default App;