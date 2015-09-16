function Player(mark){
    this.mark = mark;
}

function Space(x_axis, y_axis){
    this.x_axis = x_axis;
    this.y_axis = y_axis;
}

function Game(p1, p2, board, turns){
    this.p1 = p1;
    this.p2 = p2;
    this.board = board;
    this.turns = 0;
}

function Board(){
    var empty = "";
    this.spaces = [ empty, empty, empty, empty, empty, empty, empty, empty, empty ];
}

Game.prototype.win = function(board, turns){
    console.log(board + " : " + turns);
    var allTaken = false;
    var combos = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
                    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
    for (var i = 0; i < combos.length; i++){
        for(var j = 0; j < combos[i].length; j++){
            //console.log(combos[i] + " = combo index 'i': " + combos[i][j] + " = combos[i][j]");
            if((board.spaces[combos[i][j]] === board.spaces[combos[i][j+1]]) &&
                (board.spaces[combos[i][j+1]] === board.spaces[combos[i][j+2]])
                && (board.spaces[combos[i][j]] !== "")){
                return board.spaces[combos[i][j]];
            }else if((i === combos.length - 1 && j === combos[i].length - 1) && turns === 9){
                return "DRAW";
            }
        }
    }

}
Game.prototype.advanceTurns = function(){
    this.turns++;
    return this.turns;
}
// POSSIBLY ALSO ADD 'GAME TO THE PARAMETERS TO BE ABLE TO INCREMENT 'GAME.TURNS'
Space.prototype.mark_by = function(player, board, game){
    console.log(board);
    this.player = player.mark;
    board.markedSquare(this);
    game.advanceTurns();
}

Space.prototype.markedBy = function(){
    return this.player;
}

Space.prototype.spaceCheck = function(x, y, player){
    if (this.markedBy() === player){
        return true;
    } else {return false;}
}

Board.prototype.markedSquare = function(space){
    var x = space.x_axis;
    var y = space.y_axis;
    if (x === 1) {
        if (y === 1 ) {
            this.spaces[0] = space.markedBy();
            return this.spaces[0];
        } else if (y === 2){
            this.spaces[1] = space.markedBy();
            return this.spaces[1];
        } else {
            this.spaces[2] = space.markedBy();
            return this.spaces[2];
        }
    }
    if (x === 2) {
        if (y === 1 ) {
            this.spaces[3] = space.markedBy();
            return this.spaces[3];
        } else if (y === 2){
            this.spaces[4] = space.markedBy();
            return this.spaces[4];
        } else {
            this.spaces[5] = space.markedBy();
            return this.spaces[5];
        }
    }
    if (x === 3) {
        if (y === 1 ) {
            this.spaces[6] = space.markedBy();
            return this.spaces[6];
        } else if (y === 2){
            this.spaces[7] = space.markedBy();
            return this.spaces[7];
        } else {
            this.spaces[8] = space.markedBy();
            return this.spaces[8];
        }
    }
}
