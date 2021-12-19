import { Button } from 'react-bootstrap';

const Reset = (props) => {

  const click = () => {
    props.resetClick();
  }
  return (
    <Button className="tictactoe-button" onClick={click}>Reset</Button>
  )
}

export default Reset
