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
	
	init(){
		if(this.getData("dialogue") !== undefined){
			let xDialogue = this.getData("xDialogue");
			let yDialogue = this.getData("yDialogue");
			this.textDialogue = this.scene.add.text(this.x + xDialogue,this.y + yDialogue,this.getData("dialogue")[0],{fontSize:24,color:"#ffffff",stroke:"#000000",strokeThickness:2.5} );
			this.textDialogue.setDepth(27);
			this.textDialogue.setWordWrapWidth(350);
			this.textDialogue.setVisible(false);
		}
	}
	
	checkCondition(){
		var condition = this.getData("condition")[0];
		var operator = condition.operator;
		var variable = condition.var;
		var type = condition.type;
		var value = condition.value;

		var operatorType = ()=>{
			if(operator === ">="){

				return (varType() >= value)
			}
			if(operator === "<="){
				return (varType() <= value)
			}
			
			if(operator === "=="){
				return (varType() === value)
			}
			
		}
		
		var varType = ()=>{
			if(variable === "coin") return this.scene.game.global.coin;
			return null;
		}
		
		if(operatorType() ){
			return true;
		}else{
			return false;
		}
		
		
	}
	


}

Phaser.GameObjects.GameObjectFactory.register("eventmap_door", function (x, y, texture, frame) {
	
	var sprite = new Eventmap_door(this.scene, x, y, texture, frame);

	this.scene.sys.displayList.add(sprite);
	this.scene.sys.updateList.add(sprite);

	return sprite;
});