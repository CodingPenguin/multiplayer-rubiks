import './HomePage.css';

function HomePage() {
  return (
    <div className='playerOptions'>
      <button onClick={makeScramble}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="10%" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        </svg>
      </button>
      <button onClick={makeScramble}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="10%" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
        </svg>
      </button>
    </div>
  );
}

function makeScramble() {
  var options = ["F", "F2", "F'", "R", "R2", "R'", "U", "U2", "U'", "B", "B2", "B'", "L", "L2", "L'", "D", "D2", "D'"]
  var numOptions = [0, 1, 2, 3, 4, 5] // 0 = F, 1 = R, 2 = U, 3 = B, 4 = L, 5 = D
  var scramble = []
  var scrambleMoves = []
  var bad = true

  while (bad) {
      scramble = []
      for (var i = 0; i < 20; i++) {
          scramble.push(numOptions[getRandomInt(6)])
      }
      // check if moves directly next to each other involve the same letter
      for (var i = 0; i < 20 - 1; i++) {
          if (scramble[i] == scramble[i + 1]) {
              bad = true
              break
          } else {
              bad = false
          }
      }
  }
  console.log(scramble)
  // switch numbers to letters
  var move
  for (var i = 0; i < 20; i++) {
    switch (scramble[i]) {
      case 0:
          move = options[getRandomInt(3)] // 0,1,2
          scrambleMoves.push(move)
          break
      case 1:
          move = options[getRandomIntBetween(3, 6)] // 3,4,5
          scrambleMoves.push(move)
          break
      case 2:
          move = options[getRandomIntBetween(6, 9)] // 6,7,8
          scrambleMoves.push(move)
          break
      case 3:
          move = options[getRandomIntBetween(9, 12)] // 9,10,11
          scrambleMoves.push(move)
          break
      case 4:
        move = options[getRandomIntBetween(12, 15)] // 12,13,14
        scrambleMoves.push(move)
        break
      case 5:
        move = options[getRandomIntBetween(15, 18)] // 15,16,17
        scrambleMoves.push(move)
        break
      default:
        break
    }
  }
  console.log(scrambleMoves)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) // returns up to max - 1
}

function getRandomIntBetween(min, max) { // return a number from min to max - 1. Ex. 3, 9 returns 3 - 8
  return Math.floor(Math.random() * (max - min) + min)
}
export default HomePage;
