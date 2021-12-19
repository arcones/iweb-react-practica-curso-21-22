import { Card } from 'react-bootstrap';

const Header = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Turn</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Header
