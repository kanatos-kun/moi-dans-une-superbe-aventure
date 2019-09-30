
// You can write more code here

/* START OF COMPILED CODE */

class CreditScreenScene extends Phaser.Scene {
	
	constructor() {
	
		super("CreditScreenScene");
		
	}
	
	_create() {
	
		this.add.image(414.74863, 417.6948, "credit");
		
		
	}
	
	/* START-USER-CODE */
	create(){
		this._create();
		this.click = this.sound.add("simple_click");
		this.scene.get("Scene1").musicManager("music_kids_play_loop_01",0.4,true);
		var bouton_png_1 = this.add.image(100, 50, "hud", "bouton.png");
		bouton_png_1.setData("tag", "button");
		bouton_png_1.setData("name", "newgame");
		bouton_png_1.setScale(1.5,1);
		
		var text_1 = this.add.text(0, 30, "RETOUR", {
	    "align": "center",
	    "fontFamily": "MySonIsTebe",
	    "fontSize": "30px",
	    "color": "#000000",
	    "fixedWidth": 200,
	    "fixedHeight": 50
		});
		text_1.setOrigin(0);
		
		
			bouton_png_1.setInteractive();
				
			bouton_png_1.on('pointerover',function(pointer, localX,localY,e){
			var counter = this.tweens.addCounter({
				from: 255,
				to: 200,
				callbackScope: this,
				duration: 100,
				onUpdateScope: this,
				onUpdate: function(){
					let c = Phaser.Math.FloorTo(counter.getValue() )  ;
					let cc = Phaser.Display.Color.RGBToString(c,c,c,255,"0x");

					bouton_png_1.setTint(cc);

				}
			})
			
		},this)
		
			bouton_png_1.on('pointerout',function(pointer, localX,localY,e){
				bouton_png_1.clearTint();
			},this)
				
				
			bouton_png_1.on('pointerdown',function(pointer, localX,localY,e){
					this.click.play();
					this.scene.start("titleScreenScene",{x:3,y:5});
				},this);
		
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
