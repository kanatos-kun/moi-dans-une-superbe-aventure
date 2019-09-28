
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
