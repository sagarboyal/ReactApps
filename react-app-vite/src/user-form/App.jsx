import { useEffect } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App(){
    const { register, handleSubmit, watch, reset, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        reset();
    };

    // const watchedName = watch('name');
    // const watchedEmail = watch('email');

    // useEffect(() => {
    //     console.log(watchedName);
    //     console.log(watchedEmail);
    // }, [watchedName, watchedEmail]);

    const usernames = ['sagar', 'santu', 'saikat', 'souvik', 'sourav'];
    const checkIfUserName = async (username) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return usernames.includes(username);
    }

    return(
        <div className='form-container'>
            <h1>React Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name: 
                    <input 
                        {...register('name', {
                            required: 'Name is required',
                            minLength: {
                                value: 3, 
                                message: 'Name should not be less than 3 characters'
                            },
                            validate: {
                                isAdmin: value => value !== 'admin' || 'Name cannot be admin',
                                isNumber: value => isNaN(value) || 'Name cannot be a number',
                                checkUserName: async (value) => {
                                    const exists = await checkIfUserName(value);
                                    return !exists || 'username already exists';
                                }
                            }
                        })}
                        placeholder="Enter your name"
                    />
                    {errors.name && <span style={{color: 'red'}}> <br />{errors.name.message}</span>}
                </label>
                <br/>
                <label>Email: 
                <input 
                        {...register("email", {
                            required: { 
                                value: true, 
                                message: "Email is required" 
                            },
                            pattern: { 
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, 
                                message: "Enter a valid email" 
                            }
                        })}
                        placeholder="Enter your email"
                    />
                    {errors.email && <span style={{color: 'red'}}> <br />{errors.email.message}</span>}
                </label>
                <br/>
                <label>Password:
                    <input 
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6, 
                                message: 'Password should not be less than 6 characters'
                            }
                        })}
                        type='password'
                        placeholder="Enter your password"
                    />
                    {errors.password && <span style={{color: 'red'}}> <br />{errors.password.message}</span>}
                </label>
                <br/>
                <label>Confirm Password:
                    <input 
                        {...register('confirmPassword', {
                            required: 'Confirm Password is required',
                            validate: value => value === watch('password') || 'Passwords do not match'
                        })}
                        type='password'
                        placeholder="Confirm your password"
                    />
                    {errors.confirmPassword && <span style={{color: 'red'}}> <br />{errors.confirmPassword.message}</span>}
                </label>
                    <br />
                <button type='submit'>Submit</button>
                <button type='button' onClick={() => reset()}>Reset</button>
            </form>
        </div>
    );
}

export default App;