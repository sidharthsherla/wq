import { useState } from "react";
import ReactDOM from "react-dom/client";
import Button from 'react-bootstrap/Button';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
   
    
    setInputs({...inputs,[event.target.name]:event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input type="text" name="username"  onChange={handleChange} /> </label>
      <label>Enter your age:
        <input type="number" name="age" onChange={handleChange}/>
        </label>
        <Button variant="primary">Submit</Button>
    </form>
  )}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
