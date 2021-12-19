import '../../css/styles.css';

const Square = (props) => {

  const squareStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: '#18363E',
    color: '#93C4D1',
    borderRadius: '5px',
    fontSize: '30px',
    fontFamily: 'Gabriola'
  }

  const squareClick= () => {
    if (props.value === "-") {
      props.boardClick(props.rowIndex, props.columnIndex);
    }
  }

  return (
    <button style={squareStyle} onClick={squareClick} className={props.value === "-" ? "clickable" : "no_clickable"}>
      {props.value}
    </button>
  )
}

export default Square
