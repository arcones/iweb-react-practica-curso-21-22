import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { LangContext } from '../../App';

const Reset = (props) => {

  const contextValue = useContext(LangContext);

  const buttonStyle = {
    width: '100px',
    height: '50px',
    backgroundColor: '#18363E',
    color: '#93C4D1',
    borderRadius: '5px',
    fontFamily: 'Gabriola',
    fontSize: '25px'
  }

  const click = () => {
    props.resetClick();
  }
  return (
    <Button style={buttonStyle} onClick={click}>{contextValue.dictionary.tictactoe_reset}</Button>
  )
}

export default Reset
