const finalPosition = function (moves) {
  let x = 0; // begins at [0,0]
  let y = 0; // begins at [0,0]
  let result = [x,y];
  for (let move of moves) {
    if (move === "north") {
      y = y + 1; //y++;
    }
    else if (move === "south") {
      y = y - 1; //y--
    }
    else if (move === "east") {
      x = x + 1; //x++;
    }
    else if (move === "west") {
      x = x - 1; //x--;
    }

  }
  return [x,y]
}
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
finalPosition(moves);