class TicTacToe {
  constructor() {
    this.matrix= [
    [null,null,null],
    [null,null,null],
    [null,null,null]
    ];
    this.CurrentPlayer='x';
  }
  getCurrentPlayerSymbol() {
    return this.CurrentPlayer;
  }
  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex]==null) {
      this.matrix[rowIndex][columnIndex]=this.CurrentPlayer;
      if (this.CurrentPlayer=='x') {
              this.CurrentPlayer='o'
          } else {
              this.CurrentPlayer='x'
          }
    }
  }
  isFinished() {
    if (this.getWinner()!=null||this.isDraw()==true) {
          return(true)
      } else {
          return(false)
      }
  }
  getWinner() {
    if (this.matrix[1][0]==this.matrix[0][0]&&this.matrix[0][0]==this.matrix[2][0])  {return(this.matrix[1][0])}
      else if (this.matrix[1][1]==this.matrix[0][1]&&this.matrix[0][1]==this.matrix[2][1])  {return(this.matrix[1][1])}
       else if (this.matrix[1][2]==this.matrix[0][2]&&this.matrix[0][2]==this.matrix[2][2])  {return(this.matrix[1][2])}
        else if (this.matrix[0][0]==this.matrix[0][1]&&this.matrix[0][1]==this.matrix[0][2])  {return(this.matrix[0][1])}
          else if (this.matrix[1][0]==this.matrix[1][1]&&this.matrix[1][1]==this.matrix[1][2])  {return(this.matrix[1][0])}
           else if (this.matrix[2][0]==this.matrix[2][1]&&this.matrix[2][1]==this.matrix[2][2])  {return(this.matrix[2][0])}
            else if (this.matrix[0][0]==this.matrix[1][1]&&this.matrix[1][1]==this.matrix[2][2])  {return(this.matrix[0][0])}
             else if (this.matrix[2][0]==this.matrix[1][1]&&this.matrix[1][1]==this.matrix[0][2])  {return(this.matrix[2][0])}
               else {return(null)};
  }
  noMoreTurns() {
    for (var i=0;i<=2;i++){
      for (var j=0; j<=2;j++){
        if (this.matrix[i][j]==null) {return(false)};
      }
    }
    return (true)
  }

  isDraw() {
    if (this.noMoreTurns()==true&&this.getWinner()==null) {
      return(true)
    } else {
      return(false)
    }
  }

  getFieldValue(rowIndex, colIndex) {
    return (this.matrix[rowIndex][colIndex]);
  }
}

module.exports = TicTacToe;
