import React from 'react';
import './App.css';

function OldForm(){
    const [data, setData] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const changeHandler = (event) => {
        const name = event.target.name;
        setData({
            ...data,
            [event.target.name]: event.target.value
        });

        if(error[name]){
            const newError = {...error};
            delete newError[name];
            setError(newError);
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const errorOcurred = validate();
        if(Object.keys(errorOcurred).length > 0){
            setError(errorOcurred);
        }else console.log(data);  
    };

    const[error, setError] = React.useState({});

    const validate = () => {
        const newError = {};
        if(!data.name.trim()){
            newError.name = 'Name is required';
        }
        return newError;
    };


    return(
        <div className='form-container'>
            <h1>React Form</h1>
            <form onSubmit={submitHandler}>
                <label>Name: 
                <input type='text' name='name' value={data.name} onChange={changeHandler}/>
                {error.name && <span style={{color: 'red'}}><br/>{error.name}</span>}
                </label>
                <br/>
                <label>Email: 
                <input type='text' name='email' value={data.email} onChange={changeHandler}/>
                </label>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default OldForm;