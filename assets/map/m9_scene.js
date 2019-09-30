
// You can write more code here

/* START OF COMPILED CODE */

class m9_scene extends MapExtends {
	
	constructor() {
	
		super("m9_scene");
		
	}
	
	_create() {

	}
	
	/* START-USER-CODE */

	// Write your code here.
	create(){
		
		this.tp = 
			[
				{x:32,y:-1,go: "m8_scene",xtp:4,ytp:23},	
				{x:32,y:12,go: "m10_scene",xtp:6,ytp:0},	
			]
			
			
		this.eventMap = []
	    this.eventMap[10] ={tag: "door",
						   atlas: "atlas",
						   frame: "serrure_top.png",
						   collide: true,
							xOrigin:0,
							yOrigin:36,
						   dialogue:[
							"Il vous faut 64 pieces d'or pour ouvrir cette porte...",
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
								value: 64
								}
							]
						
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
