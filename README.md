#Test Double TDD + Angular Workshop

## Why You Should Care

JavaScript gives you superpowers. If you already know Rails, then familiarity with JavaScript and a framework like Angular or Ember acts as a force multiplier. According to Hired.com's RailsConf program insert,

>Ruby engineers that know Angularjs get **20%** more interview requests.

More importantly, this stuff can be super fun.



By Zach Briggs, Todd Kaufman, and Justin Searls of [Test Double](http://testdouble.com/)

## Setup

### With Internet Access

1. Clone this repo: `git@github.com:testdouble/railsconf-test-drive-javascript.git`
* Install [node](http://nodejs.org/download/)
* Install [lineman](http://linemanjs.com/) by running `npm install -g lineman`
* Open 2 terminal tabs and cd into the project's `lineman_start` directory
* In tab 1, run `lineman run`
* In tab 2, run `lineman spec`
* In your browser, go to `[http://localhost:8000/](http://localhost:8000/)

### Without Internet Access
1.  Copy the project from a provided USB stick to where you put code
* `cd static_start`
* `open index.html`

## Building Battleship
![Mockup](/mockup.png?raw=true)

MVP:
* Single grid, single player game
* User fires blindly until they sink all opponent ships
* The player doesn't have ships of their own

Bonus:
* Randomize opponent ship positions
* Let the player know when they sink a ship
* Give the player ships and make an AI opponent that can fire back

## Research

From the wikipedia Battleship [page](http://en.wikipedia.org/wiki/Battleship_(game)):

>After the ships have been positioned, the game proceeds in a series of rounds. In each round, each player takes a turn to announce a target square in the opponent's grid which is to be shot at. The opponent announces whether or not the square is occupied by a ship, and if it is a "hit" they mark this on their own primary grid. The attacking player notes the hit or miss on their own "tracking" grid, in order to build up a picture of the opponent's fleet.
When all of the squares of a ship have been hit, the ship is sunk, and the ship's owner announces this (e.g. "You sank my battleship!"). If all of a player's ships have been sunk, the game is over and their opponent wins.



