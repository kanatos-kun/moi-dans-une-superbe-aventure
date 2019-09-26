
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
