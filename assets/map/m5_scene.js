
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
		this.mapCreate();
		this._create();
				this.tp = 
			[
				{x:46,y:-1,go: "m3_scene",xtp:5,ytp:23},
				{x:-1,y:6,go: "m6_scene",xtp:25,ytp:6}
			]
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
