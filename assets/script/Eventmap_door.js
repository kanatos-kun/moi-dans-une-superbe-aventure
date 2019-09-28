class Eventmap_door extends Phaser.GameObjects.Sprite {

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

}

Phaser.GameObjects.GameObjectFactory.register("eventmap_door", function (x, y, texture, frame) {
	
	var sprite = new Eventmap_door(this.scene, x, y, texture, frame);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});