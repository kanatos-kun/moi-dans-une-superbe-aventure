
// You can write more code here

/* START OF COMPILED CODE */

class m3_scene extends MapExtends {
	
	constructor() {
	
		super("m3_scene");
		
	}
	
	_create() {

	}
	
	/* START-USER-CODE */

	// Write your code here.
	create(){
		
		
		this.eventMap = []
		
		this.eventMap[8] ={tag: "character",
						   atlas: "atlas",
						   frame: "npc_3.png",
						   collide: true,
							xOrigin:-48,
							yOrigin:-130,
						   dialogue:[
							"OUUUUUIIII !!Recolte pleins de pieces !"
						],
							xDialogue: 0,
							yDialogue:0,
		}
		
		
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
		
		
		
		this.eventMap[14] ={tag: "character",
						   atlas: "atlas",
						   frame: "enemie_1.png",
						   collide: true,
							xOrigin:0,
							yOrigin:0,
						   dialogue:[
							"hello, je suis un asticot :o"
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
				this.tp = 
			[
				{x:5,y:-1,go: "m1_scene",xtp:5,ytp:12},
				{x:18,y:-1,go: "m4_scene",xtp:4,ytp:12},
				{x:5,y:24,go: "m5_scene",xtp:46,ytp:0},
			]
			
			

			
			
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
