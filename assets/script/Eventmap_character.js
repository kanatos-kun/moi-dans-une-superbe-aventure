class Eventmap_character extends Phaser.GameObjects.Sprite {

	/**
	 * Event
	 *
	 * @param {Phaser.Scene} scene
	 * @param x 
	 * @param y 
	 * @param texture
	 * @param frame
	 */
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture, frame);
	}
	
	init(){
		if(this.getData("dialogue") !== undefined){
			let xDialogue = this.getData("xDialogue");
			let yDialogue = this.getData("yDialogue");
			this.switch = false;
			this.textDialogue = this.scene.add.text(this.x + xDialogue,this.y + yDialogue,this.getData("dialogue")[0],{fontSize:24,color:"#ffffff",stroke:"#000000",strokeThickness:2.5} );
			this.textDialogue.setDepth(27);
			this.textDialogue.setWordWrapWidth(350);
			this.textDialogue.setVisible(false);
		}

	}
	
	changeScene(){
		var name = this.getData("sceneTP");
		console.log(name);
		this.scene.scene.start(name);

		if(this.scene.scene.isActive("hud") ){
			this.scene.scene.stop("hud");
			
		}
	}
	
	preUpdate(time,delta){
		if(this.switch){
			var time = this.scene.tweens.addCounter({
				from:0,
				to:1000,
				duration:1000,
				onComplete: this.changeScene,
				onCompleteScope: this
			});
		}
	}

}

Phaser.GameObjects.GameObjectFactory.register("eventmap_character", function (x, y, texture, frame) {
	
	var sprite = new Eventmap_character(this.scene, x, y, texture, frame);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});