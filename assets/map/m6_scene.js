
// You can write more code here

/* START OF COMPILED CODE */

class m6_scene extends MapExtends {
	
	constructor() {
	
		super("m6_scene");
		
	}
	
	_create() {

	}
	
	/* START-USER-CODE */

	// Write your code here.
	create(){
		
		this.tp = 
			[
				{x:26,y:6,go: "m5_scene",xtp:0,ytp:6},
				{x:5,y:12,go: "m7_scene",xtp:5,ytp:0}
			]
			
			
		this.eventMap = []
			
		this.eventMap[5] ={tag: "character",
						   atlas: "atlas",
						   frame: "npc_2.png",
						   collide: true,
							xOrigin:0,
							yOrigin:-64,
						   dialogue:[
							"Bienvenue au village des Doubadoux! :D"
						]		
		}
			
		this.musicData = {
			name: "music_harp_peaceful_loop",
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
