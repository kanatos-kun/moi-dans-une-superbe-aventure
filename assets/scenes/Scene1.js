
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var map_1 = this.add.image(-2.0026503, 64.3907, "map 1");
		map_1.visible = false;
		map_1.setOrigin(0.0, 0.0);
		
		var hero = this.add.image(223.07228, 371.40167, "atlas", "hero.png");
		
		this.fHero = hero;
		
	}
	
	
	/* START-USER-CODE */

	create() {
		this._create();
		this.generateMap();
		this.fHero.setData("life",3);
		this.fHero.setDepth(21);
		this.scene.launch("hud");
		this.keys = this.input.keyboard.addKeys("down,left,right,up,a");
		this.keys.up.on("down", function(key,event){
			this.fHero.setY(this.fHero.y - 64);
		},this)
		this.keys.right.on("up", function(key,event){
			this.fHero.setX(this.fHero.x + 64);
		},this)
		
		this.keys.down.on("up", function(key,event){
			this.fHero.setY(this.fHero.y + 64);
		},this)
		
		this.keys.left.on("up", function(key,event){
			this.fHero.setX(this.fHero.x - 64);
		},this)
		
	}

	update() {
		
	}
	
	setBackgroundGray(){
		this.cameras.main.alpha = 0.5;//Phaser.Display.Color.RGBStringToColor('rgb(200,200,200)')
		this.cameras.main.backgroundColor=Phaser.Display.Color.RGBStringToColor('rgb(100,100,100)');
		//this.cameras.main.fadeOut(1000,200,200,200);
	}
	
	restartBackground(){
		this.cameras.main.alpha = 1;
		this.cameras.main.backgroundColor=Phaser.Display.Color.RGBStringToColor('rgb(255,255,255)');
	}


	generateMap(){
		this.map = this.add.tilemap('map 1');
		var tileset = this.map.addTilesetImage('tileset','tileset');
		var limite = this.map.createStaticLayer('limite',tileset,0,64);
		var maison = this.map.createStaticLayer('maison',tileset,0,64);
		var pierre = this.map.createStaticLayer('pierre',tileset,0,64);
		var arbre = this.map.createStaticLayer('arbre',tileset,0,64);
		
		limite.setDepth(20);
		maison.setDepth(20);
		pierre.setDepth(20);
		arbre.setDepth(20);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
