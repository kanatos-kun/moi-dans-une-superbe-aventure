
window.addEventListener('load', function() {

	var game = new Phaser.Game({
    "title": "Moi dans une sacre aventure",
    "width": 832,
    "height": 832,
    "type": Phaser.AUTO,
    "backgroundColor": "#ffffff",
    "parent": "game-container",
    "scale": {
        "mode": Phaser.Scale.NONE ,
		//"width": 200,
		//"height": 200,
        "autoCenter": Phaser.Scale.CENTER_BOTH
    }
	});
	game.scene.add("Boot", Boot, true);
	
});

class Boot extends Phaser.Scene {

	preload() {
		this.load.script('MapExtends','assets/map/MapExtends.js')
		//this.load.sceneFile('MapExtends','assets/map/mapExtends.js');
		this.load.pack("pack", "assets/pack.json");
		this.load.bitmapFont('KidsZone','assets/font/KidsZone.png','assets/font/KidsZone.xml');
		//this.load.sceneFile('test','assets/map/mapExtends.js');
	}

	create() {
		this.scene.start("Scene1");
	}

}
