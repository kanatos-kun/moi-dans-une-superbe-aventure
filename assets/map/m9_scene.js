
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
