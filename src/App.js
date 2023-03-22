
import { Button, Container } from 'react-bootstrap';
import { PrimaryButton, TestButton } from './Components/Buttons';
import './App.css';
import { FormExample } from './Components/Forms';
import { CardExample } from './Components/Cards';
import { Row } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
        React App Demo
        <Button>Test button</Button>

        <TestButton buttonname={'Login'} />
        <TestButton buttonname={'Sign Up'} />
        <PrimaryButton></PrimaryButton>
        <FormExample></FormExample>
      </Container>
      <Container>
        <Row>
          <CardExample link={'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}></CardExample>
          <CardExample link={'https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}></CardExample>
          <CardExample link={'https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}></CardExample>
        </Row>
      </Container>
    </div>

  );
}

export default App;
