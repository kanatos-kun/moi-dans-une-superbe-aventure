
// You can write more code here

/* START OF COMPILED CODE */

class m1_scene extends MapExtends {
	
	constructor() {
	
		super("m1_scene");
	}
	

	
	_create() {
		
	}
	
	create(){
				
		this.tp = 
			[
				{x:5,y:-1,go: "m2_scene",xtp:5,ytp:23},
				{x:5,y:12,go: "m3_scene",xtp:5,ytp:0},
			]
			
		this.eventMap = []

		this.eventMap[5] ={tag: "character",
						   atlas: "atlas",
						   frame: "npc_1.png",
						   collide: true,
							xOrigin:0,
							yOrigin:-64,
						   dialogue:[
							"hello mon ami, comment va tu?"
						]
					
		}
		
		
		this.mapCreate();
		this._create();


		//this.setBackgroundGray();
		//console.log(new mapExtends() );
	}
	
	

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
