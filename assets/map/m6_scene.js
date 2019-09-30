
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
						],
							xDialogue: 0,
							yDialogue:0,
		}
		
		this.eventMap[6] ={tag: "character",
						   atlas: "atlas",
						   frame: "npc_2.png",
						   collide: true,
							xOrigin:0,
							yOrigin:-64,
						   dialogue:[
							"Ici tout le monde est doux."
						],
							xDialogue: 0,
							yDialogue:0,
		}
		
		
		this.eventMap[7] ={tag: "character",
						   atlas: "atlas",
						   frame: "npc_1.png",
						   collide: true,
							xOrigin:0,
							yOrigin:-64,
						   dialogue:[
							"Il y a une porte verouillé au sud du village."
						],
							xDialogue: 0,
							yDialogue:0,
		}
		
		this.eventMap[8] ={tag: "character",
						   atlas: "atlas",
						   frame: "npc_3.png",
						   collide: true,
							xOrigin:-32,
							yOrigin:-120,
						   dialogue:[
							":x"
						],
							xDialogue: 0,
							yDialogue:0,
		}
		
			
		this.eventMap[9] ={tag: "character",
						   atlas: "atlas",
						   frame: "npc_3.png",
						   collide: true,
							xOrigin:-32,
							yOrigin:-120,
						   dialogue:[
							"hahaha"
						],
							xDialogue: 0,
							yDialogue:0,
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
