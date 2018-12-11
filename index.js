/**
 * 0 nothing
 * 1 wall
 * 2 player
 * 3 prize
 */

var map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 3, 0, 0, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [1, 0, 1, 1, 3, 0, 0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1, 1, 1, 1, 3, 1, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [1, 3, 1, 0, 1, 2, 1, 3, 1, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]
]

var WALL_SIZE = 5
var WALL_HEIGHT = 8
var wall, prize
var walls = document.querySelector('#walls')
var prizes = document.querySelector('#prizes')

for(var x =0; x < map.length; x++){
  for(var y = 0; y < map.length; y++){
    var position = (x - map.length/2) * WALL_SIZE + ' ' + 1.5 +
        ' ' + (y - map.length/2) * WALL_SIZE

    if (map[x][y] == 0) {
      continue
    } else if (map[x][y] == 1) {
      // wall
      wall = document.createElement('a-box')
      walls.appendChild(wall)
      wall.setAttribute('color', '#fff')
      wall.setAttribute('material', 'src: #wall;')
      wall.setAttribute('width', WALL_SIZE)
      wall.setAttribute('depth', WALL_SIZE)
      wall.setAttribute('height', WALL_HEIGHT)
      wall.setAttribute('postion', position)
      wall.setAttribute('static-body', '')
    } else if (map[x][y] == 2) {
      // player
      document.querySelector('#player').setAttribute('position', position)
    } else if (map[x][y] == 3) {
      // prizes
      prize = document.createElement('a-entity')
      prizeAnimation = document.createElement('a-animation')
      prizeCollada = document.createElement('a-collada-model')
      prizeAll = document.querySelectorAll('prize')
      
      prizes.appendChild(prize)
      prize.setAttribute('position', position)
      prize.setAttribute('class', 'prize')

    }
  }
}

var arrayPrizes = Array.from(document.querySelectorAll('.prize'))
var scoreToWin = 0


document.onkeydown = function(e) {
  if (e.keyCode == 65 || e.keyCode == 87 || e.keyCode == 68 || e.keyCode == 83) {
      stepSound.components.sound.playSound()
  }
}
