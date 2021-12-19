import Square from './Square';

const Board = (props) => {
  const boardClick = (rowNumber, columnNumber) => {
    props.appClick(rowNumber, columnNumber);
  }

  let board = props.values.map((rowValues, rowIndex) => {
    let row = rowValues.map((value, columnIndex) => {
        return (
          <Square value={value} key={rowIndex + "-" + columnIndex} rowIndex={rowIndex}
                  columnIndex={columnIndex} boardClick={boardClick}/>
      );
    });
    return (
      <div key={"row" + rowIndex}>{row}</div>
    );
  });

  return (
    <div>{board}</div>
  )
}

export default Board
