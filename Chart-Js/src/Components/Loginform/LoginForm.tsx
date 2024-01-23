import { Button, Input } from 'semantic-ui-react';
import './LoginForm.css';
import { useState } from 'react';




const  LoginForm = () => 
  {
  const [emailState, setEmailState] = useState<string>(""); 
  const [pwState, setPwState] = useState<string>(""); 



  return <>


  <h1>Login</h1>
  <Input onChange={(event) => { setEmailState(event.target.value); } } />
  <p>email</p>
  
  <Input onChange={(event) => { setPwState(event.target.value); } } />
  <p>Password</p>
   
   <Button onClick={() => {console.log(emailState,pwState);}}>Submit</Button>
   </>

} 


  export default LoginForm;