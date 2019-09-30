
// You can write more code here

/* START OF COMPILED CODE */

class gameOverScreenScene extends Phaser.Scene {
	
	constructor() {
	
		super("gameOverScreenScene");
		
	}
	
	_create() {
	
		this.add.image(411.3065, 415.61298, "fin_jeu");
		
		
	}
	
	/* START-USER-CODE */
	create(){
		this._create();
		console.log("gameover!");
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
