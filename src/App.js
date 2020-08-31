import React, {useState} from 'react';
import './App.css';
import {Button} from 'reactstrap';
const sudoku = require('sudoku');


function App() {
  
  let [puzzle, setPuzzle] = useState(sudoku.makepuzzle());

  let [grid, setGrid] = useState(
    [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
  ]
  )

  const changeHandler = (event) => {
    let row = parseInt(event.target.id);
    let col = parseInt(event.target.name);
    let newGrid = [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
  ];
  for(let i = 0; i < grid.length; i++){
    for(let y = 0; y < grid.length; y++){
      newGrid[i][y] = grid[i][y];
    }
  }
  if(!isNaN(event.target.value)){
    newGrid[row][col] = parseInt(event.target.value);
  }
    setGrid(newGrid);
  }

  const clearBoard = () => {
    let newGrid = [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
  ];
  setGrid(newGrid);
  }

  const clearPuzzle = (newPuzzle) => {
    let puzzles = newPuzzle;
    for(let i = 0; i< newPuzzle.length; i++){
      puzzle[i] = 0;
    }
    return puzzles;
  }
  const solveSudokuBoard = () => {
    let currentPuzzle = clearPuzzle(puzzle);
    let countz = 0;
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid.length; j++){
        if(grid[i][j] === 0){
          currentPuzzle[countz] = null;
        } else {
          currentPuzzle[countz] = grid[i][j]-1;
        }
          
          countz++;
      }
    }
    console.log(currentPuzzle);

    let solvedSudoku = sudoku.solvepuzzle(puzzle);
    let newGrid = [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
  ];
    let count = 0;
    for (let i = 0; i < newGrid.length; i++) {
        for (let y = 0; y < newGrid.length; y++){

            newGrid[i][y] = solvedSudoku[count] + 1;
          
            count++;
        }
    }
    setGrid(newGrid);
  }

  const newSudokoButton = () => {
    let newPuzzle = sudoku.makepuzzle();
    setPuzzle(newPuzzle);
    let newGrid = [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
  ];
  let count = 0;
    for (let i = 0; i < newGrid.length; i++) {
        for (let y = 0; y < newGrid.length; y++){
          if (newPuzzle[count] === null) {
            newGrid[i][y] = 0;
          } else if (newPuzzle === 0) {
            newGrid[i][y] = 1;
          } else {
            newGrid[i][y] = newPuzzle[count] + 1;
          }
            count++;
        }
    }
    setGrid(newGrid);
  }

  return (
<div className="App">
      <h1>Sudoku Solver</h1>
        <table id="sudoku">
          <tbody>
            <tr>
              <td><input 
                    type="number" 
                    value={(grid[0][0] === 0 ? "" : grid[0][0])}
                    id="0"
                    name="0"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[0][1] === 0 ? "" : grid[0][1])}
                    id="0"
                    name="1"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number"  
                    value={(grid[0][2] === 0 ? "" : grid[0][2])}
                    id="0"
                    name="2"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[0][3] === 0 ? "" : grid[0][3])}
                    id="0"
                    name="3"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number"  
                    value={(grid[0][4] === 0 ? "" : grid[0][4])}
                    id="0"
                    name="4"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number"  
                    value={(grid[0][5] === 0 ? "" : grid[0][5])}
                    id="0"
                    name="5"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[0][6] === 0 ? "" : grid[0][6])}
                    id="0"
                    name="6"
                    onChange={changeHandler}/></td>
              <td><input 
                   type="number"  
                    value={(grid[0][7] === 0 ? "" : grid[0][7])}
                    id="0"
                    name="7"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number"                     
                    value={(grid[0][8] === 0 ? "" : grid[0][8])}                    
                    id="0"
                    name="8"
                    onChange={changeHandler}/></td>
            </tr>
            <tr>
              <td><input 
                    type="number" 
                    value={(grid[1][0] === 0 ? "" : grid[1][0])}
                    id="1"
                    name="0"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number"  
                    value={(grid[1][1] === 0 ? "" : grid[1][1])}
                    id="1"
                    name="1"
                    onChange={changeHandler}/></td>
              <td><input 
                   type="number" 
                    value={(grid[1][2] === 0 ? "" : grid[1][2])}
                    id="1"
                    name="2"
                    onChange={changeHandler}/></td>
              <td><input 
                   type="number" 
                    value={(grid[1][3] === 0 ? "" : grid[1][3])}
                    id="1"
                    name="3"
                    onChange={changeHandler}/></td>
              <td><input 
                   type="number" 
                    value={(grid[1][4] === 0 ? "" : grid[1][4])}
                    id="1"
                    name="4"
                    onChange={changeHandler}/></td>
              <td><input 
                   type="number"  
                    value={(grid[1][5] === 0 ? "" : grid[1][5])}
                    id="1"
                    name="5"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number"  
                    value={(grid[1][6] === 0 ? "" : grid[1][6])}
                    id="1"
                    name="6"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[1][7] === 0 ? "" : grid[1][7])}
                    id="1"
                    name="7"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number"  
                    value={(grid[1][8] === 0 ? "" : grid[1][8])}
                    id="1"
                    name="8"
                    onChange={changeHandler}/></td>
            </tr>
            <tr>
              <td><input 
                   type="number" 
                    value={(grid[2][0] === 0 ? "" : grid[2][0])}
                    id="2"
                    name="0"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number"  
                    value={(grid[2][1] === 0 ? "" : grid[2][1])}
                    id="2"
                    name="1"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[2][2] === 0 ? "" : grid[2][2])}
                    id="2"
                    name="2"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[2][3] === 0 ? "" : grid[2][3])}
                    id="2"
                    name="3"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[2][4] === 0 ? "" : grid[2][4])}
                    id="2"
                    name="4"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[2][5] === 0 ? "" : grid[2][5])}
                    id="2"
                    name="5"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[2][6] === 0 ? "" : grid[2][6])}
                    id="2"
                    name="6"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[2][7] === 0 ? "" : grid[2][7])}
                    id="2"
                    name="7"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[2][8] === 0 ? "" : grid[2][8])}
                    id="2"
                    name="8"
                    onChange={changeHandler}/></td>
            </tr>
            <tr>
              <td><input 
                    type="number" 
                    value={(grid[3][0] === 0 ? "" : grid[3][0])}
                    id="3"
                    name="0"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[3][1] === 0 ? "" : grid[3][1])}
                    id="3"
                    name="1"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[3][2] === 0 ? "" : grid[3][2])}
                    id="3"
                    name="2"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[3][3] === 0 ? "" : grid[3][3])}
                    id="3"
                    name="3"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[3][4] === 0 ? "" : grid[3][4])}
                    id="3"
                    name="4"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[3][5] === 0 ? "" : grid[3][5])}
                    id="3"
                    name="5"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[3][6] === 0 ? "" : grid[3][6])}
                    id="3"
                    name="6"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[3][7] === 0 ? "" : grid[3][7])}
                    id="3"
                    name="7"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[3][8] === 0 ? "" : grid[3][8])}
                    id="3"
                    name="8"
                    onChange={changeHandler}/></td>
            </tr>
            <tr>
              <td><input 
                    type="number" 
                    value={(grid[4][0] === 0 ? "" : grid[4][0])}
                    id="4"
                    name="0"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[4][1] === 0 ? "" : grid[4][1])}
                    id="4"
                    name="1"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[4][2] === 0 ? "" : grid[4][2])}
                    id="4"
                    name="2"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[4][3] === 0 ? "" : grid[4][3])}
                    id="4"
                    name="3"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[4][4] === 0 ? "" : grid[4][4])}
                    id="4"
                    name="4"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[4][5] === 0 ? "" : grid[4][5])}
                    id="4"
                    name="5"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[4][6] === 0 ? "" : grid[4][6])}
                    id="4"
                    name="6"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[4][7] === 0 ? "" : grid[4][7])}
                    id="4"
                    name="7"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[4][8] === 0 ? "" : grid[4][8])}
                    id="4"
                    name="8"
                    onChange={changeHandler}/></td>
            </tr>
            <tr>
              <td><input 
                    type="number" 
                    value={(grid[5][0] === 0 ? "" : grid[5][0])}
                    id="5"
                    name="0"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[5][1] === 0 ? "" : grid[5][1])}
                    id="5"
                    name="1"
                    onChange={changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[5][2] === 0 ? "" : grid[5][2])}
                    id="5"
                    name="2"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[5][3] === 0 ? "" : grid[5][3])}
                    id="5"
                    name="3"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[5][4] === 0 ? "" : grid[5][4])}
                    id="5"
                    name="4"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[5][5] === 0 ? "" : grid[5][5])}
                    id="5"
                    name="5"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[5][6] === 0 ? "" : grid[5][6])}
                    id="5"
                    name="6"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[5][7] === 0 ? "" : grid[5][7])}
                    id="5"
                    name="7"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[5][8] === 0 ? "" : grid[5][8])}
                    id="5"
                    name="8"
                    onChange={ changeHandler}/></td>
            </tr>
            <tr>
              <td><input 
                    type="number" 
                    value={(grid[6][0] === 0 ? "" : grid[6][0])}
                    id="6"
                    name="0"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[6][1] === 0 ? "" : grid[6][1])}
                    id="6"
                    name="1"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[6][2] === 0 ? "" : grid[6][2])}
                    id="6"
                    name="2"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[6][3] === 0 ? "" : grid[6][3])}
                    id="6"
                    name="3"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[6][4] === 0 ? "" : grid[6][4])}
                    id="6"
                    name="4"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[6][5] === 0 ? "" : grid[6][5])}
                    id="6"
                    name="5"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[6][6] === 0 ? "" : grid[6][6])}
                    id="6"
                    name="6"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[6][7] === 0 ? "" : grid[6][7])}
                    id="6"
                    name="7"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[6][8] === 0 ? "" : grid[6][8])}
                    id="6"
                    name="8"
                    onChange={ changeHandler}/></td>
            </tr>
            <tr>
             <td><input 
                    type="number" 
                    value={(grid[7][0] === 0 ? "" : grid[7][0])}
                    id="7"
                    name="0"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[7][1] === 0 ? "" : grid[7][1])}
                    id="7"
                    name="1"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[7][2] === 0 ? "" : grid[7][2])}
                    id="7"
                    name="2"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[7][3] === 0 ? "" : grid[7][3])}
                    id="7"
                    name="3"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[7][4] === 0 ? "" : grid[7][4])}
                    id="7"
                    name="4"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[7][5] === 0 ? "" : grid[7][5])}
                    id="7"
                    name="5"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[7][6] === 0 ? "" : grid[7][6])}
                    id="7"
                    name="6"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[7][7] === 0 ? "" : grid[7][7])}
                    id="7"
                    name="7"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[7][8] === 0 ? "" : grid[7][8])}
                    id="7"
                    name="8"
                    onChange={ changeHandler}/></td>
            </tr>
            <tr>
              <td><input 
                    type="number" 
                    value={(grid[8][0] === 0 ? "" : grid[8][0])}
                    id="8"
                    name="0"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[8][1] === 0 ? "" : grid[8][1])}
                    id="8"
                    name="1"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[8][2] === 0 ? "" : grid[8][2])}
                    id="8"
                    name="2"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[8][3] === 0 ? "" : grid[8][3])}
                    id="8"
                    name="3"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[8][4] === 0 ? "" : grid[8][4])}
                    id="8"
                    name="4"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[8][5] === 0 ? "" : grid[8][5])}
                    id="8"
                    name="5"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[8][6] === 0 ? "" : grid[8][6])}
                    id="8"
                    name="6"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[8][7] === 0 ? "" : grid[8][7])}
                    id="8"
                    name="7"
                    onChange={ changeHandler}/></td>
              <td><input 
                    type="number" 
                    value={(grid[8][8] === 0 ? "" : grid[8][8])}
                    id="8"
                    name="8"
                    onChange={changeHandler}/></td>
            </tr>
          </tbody>
        </table>
        <Button color="primary"  onClick={newSudokoButton}> new </Button>
        <Button color="primary" onClick={solveSudokuBoard}> Solve</Button>
        <Button color="primary" onClick={clearBoard}> Clear</Button>
    </div>
  );
}

export default App;
