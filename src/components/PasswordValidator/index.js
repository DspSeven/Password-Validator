// Write your code here
import {useState} from 'react'
import {ErrorMsg, Validator} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const lengthOfChar =
    password.length >= 8 ? null : (
      <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
    )
  const updatePassword = event => {
    setPassword(event.target.value)
  }
  return (
    <div>
      <Validator>Password Validator</Validator>
      <p>check how strong and secure is your password</p>
      <input type="password" onChange={updatePassword} />
      {lengthOfChar}
    </div>
  )
}
export default PasswordValidator
