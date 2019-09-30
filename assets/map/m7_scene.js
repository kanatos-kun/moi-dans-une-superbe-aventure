
// You can write more code here

/* START OF COMPILED CODE */

class m7_scene extends MapExtends {
	
	constructor() {
	
		super("m7_scene");
		
	}
	
	_create() {

	}
	
	/* START-USER-CODE */

	// Write your code here.
	create(){
		
		this.tp = 
			[
				{x:5,y:-1,go: "m6_scene",xtp:5,ytp:11},	
				{x:9,y:12,go: "m8_scene",xtp:22,ytp:0},	
			]
			
			
		this.eventMap = []



		this.eventMap[5] ={tag: "character",
						   atlas: "atlas",
						   frame: "npc_2.png",
						   collide: true,
							xOrigin:0,
							yOrigin:-64,
						   dialogue:[
							"Toute les maisons sont fermees au village..."
						],
							xDialogue: 0,
							yDialogue:0,
		}

		this.eventMap[6] ={tag: "character",
						   atlas: "atlas",
						   frame: "npc_1.png",
						   collide: true,
							xOrigin:0,
							yOrigin:-64,
						   dialogue:[
							"..."
						],
							xDialogue: 0,
							yDialogue:0,
		}

	    this.eventMap[10] ={tag: "door",
						   atlas: "atlas",
						   frame: "serrure_top.png",
						   collide: true,
							xOrigin:0,
							yOrigin:36,
						   dialogue:[
							"Il vous faut 60 pieces d'or pour ouvrir cette porte...",
							"Deverrouillage!"
						],
							xDialogue: 0,
							yDialogue:-58,
						condition: 
							[
								{
								type: "number",
								var: "coin",
								operator: ">=",
								value: 60
								}
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
