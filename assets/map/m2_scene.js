
// You can write more code here

/* START OF COMPILED CODE */

class m2_scene extends MapExtends {
	
	constructor() {
	
		super("m2_scene");
		
	}
	
	_create() {
	
		
	}
	
	/* START-USER-CODE */
	create(){
		this.mapCreate();
		this._create();
		
				this.tp = 
			[
				{x:5,y:24,go: "m1_scene",xtp:5,ytp:0}
			]
			
		this.eventMap = []
		
		
		
		this.musicData = {
			name: "music_bytes_the_retro_adventure",
			volume: 0.4,
			loop: true
		}
			
			
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
