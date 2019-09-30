
// You can write more code here

/* START OF COMPILED CODE */

class m8_scene extends MapExtends {
	
	constructor() {
	
		super("m8_scene");
		
	}
	
	_create() {

	}
	
	/* START-USER-CODE */

	// Write your code here.
	create(){
		
		this.tp = 
			[
				{x:22,y:-1,go: "m7_scene",xtp:9,ytp:11},	
				{x:4,y:24,go: "m9_scene",xtp:32,ytp:0},	
			]
			
			
		this.eventMap = []
		this.eventMap[13] ={tag: "character",
						   atlas: "atlas",
						   frame: "enemie_1.png",
						   collide: true,
							xOrigin:0,
							yOrigin:0,
						   dialogue:[
							"swwwig swwig!"
						],
							xDialogue: 0,
							yDialogue:0,
		}
		
		this.eventMap[9] ={tag: "character",
						   atlas: "atlas",
						   frame: "enemie_2.png",
						   collide: true,
							xOrigin:0,
							yOrigin:-64,
						   dialogue:[
							"GRRRR...."
						],
							xDialogue: 0,
							yDialogue:0,
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
