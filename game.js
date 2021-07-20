class Cell {
	constructor(name, dir) {
		this.name = name;
		this.dir = dir;
		this.neighbors = null;
	}
	move(n) {
		this.dir = (this.dir + n) % 4;
		for (let cell of this.neighbors) {
			cell.dir = (cell.dir + n) % 4;
		}
	}
}

class Board {
	constructor() {
		let a = new Cell("A", 3);
		let b = new Cell("B", 2);
		let c = new Cell("C", 0);
		let d = new Cell("D", 1);
		a.neighbors = [b, d];
		b.neighbors = [a, c];
		c.neighbors = [b, d];
		d.neighbors = [a, c];
		this.cells = [a, b, c, d];
	}
	display() {
		let text = this.cells.map(cell => `[${cell.name}:${cell.dir}]`).join("");
		console.log(text);
	}
	isWon() {
		let x = 0;
		for (let cell of this.cells) {
			x += cell.dir;
		}
		return x === 0;
	}
}

class Game {
	play() {
		let board = new Board();
		board.display();
		loop:
		for (let i = 0; i < 1000; i++) {
			let m = Math.floor(Math.random() * 4);
			let n = Math.floor(Math.random() * 3) + 1;
			console.log(`Move cell ${board.cells[m].name} for ${n} quarters`);
			board.cells[m].move(n);
			board.display();
			if (board.isWon()) {
				break loop;
			}
		}
	}
}

let game = new Game();
game.play();
