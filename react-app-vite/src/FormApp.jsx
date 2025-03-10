import React, {useState} from 'react';
import './FormApp.css'

function App() {
  const [formData, setFormData] = useState({
    text: '',
    checkbox: '',
    radio: '',
    select: ''
  });

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="App">
      <h1>Dynamic Form Example</h1>
      <form>
        <div className='form-group'>
          <label>Text: </label>
          <input type="text" name='text' value={formData.text} onChange={handleChange}/>
        </div>

        <div className='form-group'>
          <label>Checkbox: </label>
          <input type="checkbox" name='checkbox' checked={formData.checkbox} onChange={handleChange}/>
        </div>

        <div className='form-group'>
            <label>Radio: </label>
            <label>
            <input type="radio" name='radio' checked={formData.radio === "Option1"} value='Option1' onChange={handleChange}/>
             Option 1</label>
            
            <label>
            <input type="radio" name='radio' checked={formData.radio === "Option2"} value='Option2' onChange={handleChange}/>
             Option 2</label>
        </div>
        
        <div className='form-group'>
          <label>Select: </label>
          <select name='select' value={formData.select} onChange={handleChange}>
            <option value=''>--Select an option--</option>
            <option value='Option1'>Option 1</option>
            <option value='Option2'>Option 2</option>
          </select>
        </div>

        <div className='form-data'>
          <h3>Form Data</h3>
          <p><strong>Text: </strong>{formData.text || 'N/A'}</p>
          <p><strong>CheckBox: </strong>{formData.checkbox ? 'Checked' : 'UnChecked'}</p>
          <p><strong>Radio: </strong>{formData.radio || 'N/A'}</p>
          <p><strong>Select: </strong>{formData.select || 'N/A'}</p>
        </div>

      </form>
    </div>
  )
}

export default App;