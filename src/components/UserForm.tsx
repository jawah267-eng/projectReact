import { useState, type FormEvent } from 'react';
import InputField from './UI/InputField';

interface UserFormProps {
  onSubmit: (data: { name: string; email: string }) => void;
  formData: { name: string; email: string };
  setFormData: (data: { name: string; email: string }) => void;
}

function UserForm({ onSubmit, formData ,setFormData }: UserFormProps) {
 

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   onSubmit({ name, email });
  // };
const onCancle=(e)=>{
  e.preventDefault();
  setFormData({ name: '', email: '' });
}
  return (
    <form >
      {/* <InputField name="Name" 
      value={formData.name}
       onchange={(e) => setFormData({...formData, name: e.target.value})} />
      <InputField name="Email" value={formData.email} onchange={(e) => setFormData({...formData, email: e.target.value})} />
      <button type="submit">Submit</button>
      <button type="button" onClick={onCancle}>Cancel</button> */}
    </form>
  );
}

export default UserForm;
