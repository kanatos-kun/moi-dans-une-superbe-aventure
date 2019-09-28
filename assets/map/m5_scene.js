
// You can write more code here

/* START OF COMPILED CODE */

class m5_scene extends MapExtends {
	
	constructor() {
	
		super("m5_scene");
		
	}
	
	_create() {

	}
	
	/* START-USER-CODE */

	// Write your code here.
	create(){
		
		this.tp = 
			[
				{x:46,y:-1,go: "m3_scene",xtp:5,ytp:23},
				{x:-1,y:6,go: "m6_scene",xtp:25,ytp:6}
			]
			
			
		this.eventMap = []
			
		this.eventMap[7] ={tag: "character",
						   atlas: "atlas",
						   frame: "npc_1.png",
						   collide: true,
							xOrigin:0,
							yOrigin:-64,
						   dialogue:[
							"mince! Je perds toute mes pieces..."
						]		
		}
		
		
		this.eventMap[9] ={tag: "character",
						   atlas: "atlas",
						   frame: "enemie_2.png",
						   collide: true,
							xOrigin:0,
							yOrigin:-64,
						   dialogue:[
							"GRRRR...."
						]		
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
