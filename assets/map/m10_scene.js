
// You can write more code here

/* START OF COMPILED CODE */

class m10_scene extends MapExtends {
	
	constructor() {
	
		super("m10_scene");
		
	}
	
	_create() {

	}
	
	/* START-USER-CODE */

	// Write your code here.
	create(){
		
		this.tp = 
			[
				{x:6,y:-1,go: "m9_scene",xtp:32,ytp:11},
			]
			
			
		this.eventMap = []
		
		
		this.eventMap[5] ={tag: "character",
						   atlas: "atlas",
						   frame: "npc_1.png",
						   collide: true,
							xOrigin:0,
							yOrigin:-64,
						   dialogue:[
							"Bravo mon ami, tu as reussi de terminer le jeu!"
						],
						xDialogue: 0,
						yDialogue:0,
						sceneTP: "gameOverScreenScene"

		}
		
		
		
		this.musicData = {
			name: "music_bytes_the_retro_adventure",
			volume: 0.4,
			loop: true
		}
		
		
		this.mapCreate();
		this._create();

			
			
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
