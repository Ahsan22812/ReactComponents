import { Buton, Button } from 'react-bootstrap'
import './style.css'

export const TestButton = ({buttonname}) => {
  return (
    <div className='TestButton'>
      <Button className='demoButton'>{buttonname}</Button>
      <h2>DEMO BUtTON</h2>
 
    </div>
  )
}

export const PrimaryButton = () => {
  return (
    <div className='PrimaryButton'>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
    </div>
  )
}