import React from 'react'

class RegistrationForm extends React.Component{
  render() {
    return (
      <form>
        <p>
          <input type='text'/>
        </p>
        <p>
          <input type='password'/>
        </p>
        <p>
          <button type="submit"/>
        </p>
      </form>
    )
  }
}


export default RegistrationForm;
