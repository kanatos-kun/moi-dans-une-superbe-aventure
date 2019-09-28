
// You can write more code here

/* START OF COMPILED CODE */

class m4_scene extends MapExtends {
	
	constructor() {
	
		super("m4_scene");
		
	}
	
	_create() {

	}
	
	/* START-USER-CODE */

	// Write your code here.
	create(){
		
				this.tp = 
			[
				{x:4,y:12,go: "m3_scene",xtp:18,ytp:0}
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
