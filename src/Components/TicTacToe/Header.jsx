import { Card } from 'react-bootstrap';
import { LangContext } from '../../App.js';
import { useContext } from 'react';

const Header = (props) => {

  const contextValue = useContext(LangContext);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{contextValue.dictionary.tictactoe_turn}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Header
