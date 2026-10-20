import { useState } from 'react'
import InputField from './UI/InputField'
import './Form.css'

const Form = () => {
    const [formData, setFormData]=useState({name:'', email:'', password:''})
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
    }
  return (
    <form className="form-card">
      <h2 className="form-title">Create your account</h2>
      <InputField name="Name" value={formData.name}
       onchange={(e) => setFormData({...formData, name: e.target.value})}/>
        <InputField name="Email" value={formData.email} 
        onchange={(e) => setFormData({...formData, email: e.target.value})} />
         <InputField name="Password" value={formData.password} 
         onchange={(e) => setFormData({...formData, password: e.target.value})} />
        <button className="submit-button" type="submit">Submit</button>
    </form>
  )
}

export default Form
