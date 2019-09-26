class coin extends Phaser.GameObjects.Sprite {

	/**
	 * coin
	 *
	 * @param {Phaser.Scene} scene
	 * @param x 
	 * @param y 
	 * @param texture
	 * @param frame
	 */
	constructor(scene,x, y) {
		super(scene, x, y, "hud", "piece.png");
	}

}

Phaser.GameObjects.GameObjectFactory.register("coin", function (x, y) {
	
	var sprite = new coin(this.scene, x, y, "hud", "piece.png");

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});