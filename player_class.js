var Position

;(function(Position) {
  Position["Goalkeeper"] = "Goalkeeper"
  Position["Defender"] = "Defender"
  Position["Midfielder"] = "Midfielder"
  Position["Forward"] = "Forward"
})(Position || (Position = {}))

class Player {
  constructor(name, position, goals, gamesPlayed) {
    this.setName(name)
    this.setPosition(position)
    this.setGoals(goals)
    this.setGamesPlayed(gamesPlayed)
  }

  setName(name) {
    const regex = /^[A-Z][a-z]+( [A-Z][a-z]+)*$/
    if (!regex.test(name))
      throw new Error("Invalid player name: must start with a capital letter.")
    this.name = name
  }

  getName() {
    return this.name
  }

  setPosition(position) {
    this.position = position
  }

  getPosition() {
    return this.position
  }

  setGoals(goals) {
    if (goals < 0) throw new Error("Goals must be a non-negative number.")
    this.goals = goals
  }

  getGoals() {
    return this.goals
  }

  setGamesPlayed(gamesPlayed) {
    if (gamesPlayed < 0)
      throw new Error("Games played must be a non-negative number.")
    this.gamesPlayed = gamesPlayed
  }

  getGamesPlayed() {
    return this.gamesPlayed
  }

  toString() {
    return `Name: ${this.name}<br>Position: ${this.position}<br>Goals: ${this.goals}<br>Games Played: ${this.gamesPlayed}`
  }
}

const player1 = new Player("Bukayo Saka", Position.Midfielder, 15, 30)
const player2 = new Player("Aaron Ramsdale", Position.Goalkeeper, 0, 38)

document.addEventListener("DOMContentLoaded", () => {
  const outputDiv = document.getElementById("playersOutput")
  if (outputDiv) {
    outputDiv.innerHTML = `
<h3>Player 1</h3>
${player1.toString()}<br><br>
<h3>Player 2</h3>
${player2.toString()}
    `
  }
})
