import { useState, type FormEvent } from 'react'
import InputField from './UI/InputField'
import './Form.css'

type FormData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', password: '' })
    const [error ,setEror] = useState({name:'',email:'',password:''})

const validateField = (field: keyof FormData, value: string) => {
  switch (field) {
    case 'email':
      if (!value.trim()) {
         alert('Email is required');
         setEror((error) => ({ ...error, email: 'Email is required' }));
         return false;
      }
      if (!/\S+@\S+\.\S+/.test(value)) {
         alert('Invalid email');
         setEror((error) => ({ ...error, email: 'Invalid email' }));
         return false;
      }
      return true;
    case 'password':
      if (value.length < 8) {
         alert('At least 8 characters');
          setEror((error) => ({ ...error, password: 'At least 8 characters' }));
         return false;
      }
      return true;
    default:
      return true;
  }
};
// onSubmit=()=>{
//   alert(formData.email)
// }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const isEmailValid = validateField('email', formData.email);
      const isPasswordValid = validateField('password', formData.password);

      if (isEmailValid && isPasswordValid) {
         alert(`Form submitted with data: ${JSON.stringify(formData)}`);
      }
  const newError={};
  (object.keys(formData) as (keyof FormData)[]).forEach((key) => {
    newError[key] = validateField(key, formData[key]) ? '' : `Invalid ${key}`;
  });
  setEror(newError);
  console.log('Error:', newError);
    };
 
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setEror((error) => ({ ...error, [name]: '' })); 
      setFormData((previousFormData) => ({ ...previousFormData, [name]: value }));
    }

  return (
    <form className="form-card" onSubmit={handleSubmit} action="">
      {/* {object.keys(formData).map((key) => (
        <>
        <InputField 
          key={key}
          name={key}
          value={formData[key as keyof typeof formData]}
          onChange={onChange}
        />
        <p key={key} className="error">
          {error[key as keyof typeof error]}
        </p>
         </>
      ))} */}
     
      <h2 className="form-title">Create your account</h2>
      <InputField name="Name" value={formData.name}
       onChange={onChange}
       />
         <InputField name="Email" value={formData.email} 
         onChange={onChange} 
         />
         {error.email && <p className="error">{error.email}</p>}
         <InputField name="Password" value={formData.password} 
          type="password"
          onChange={onChange} 
         />
         { error.password && <p className="error">{error.password}</p>}
         <button className="submit-button"  type="submit">Submit</button>
    </form>
  )
}

export default Form
