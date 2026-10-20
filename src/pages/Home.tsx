import React, { useState } from "react";
import UserForm from "../components/UserForm";
import Login from "../components/login";
import Card from "../components/card";
import Form from "../components/form";

interface HeaderProps {
  firstlink: string;
  secondlink: string;
}

const Header = ({firstlink , secondlink}: HeaderProps)=>{
 return(
 <header>
   <h1>{firstlink}</h1>
   <p>{secondlink}</p>
 </header>
)
}
const Main =({children}:{children: React.ReactNode})=>{
  return(
    <main>
      <div>test</div>
      {children}
      <h1>main</h1>
    </main>
  )
}

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const onSubmit=()=>{
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
  }
  return (
    <>
    <div>jawa</div>
<Header firstlink="firstlink" secondlink="secondlink" />
<Main>
  <h1>first</h1>
  <h2>hello</h2>
</Main>
{/* <UserForm  /> */}
  {/* <InputField name="Name" value="John Doe" onchange={() => {}} /> */}
  <UserForm onSubmit={(data) => console.log(data)} formData={formData} setFormData={setFormData} />
    <UserForm onSubmit={onSubmit} formData={formData} setFormData={setFormData} />
  <Login />
  <Card /><br/><hr/>
  <Form/>
    </>

  )
}

export default Home
