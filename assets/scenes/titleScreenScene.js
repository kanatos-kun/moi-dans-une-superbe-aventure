
// You can write more code here

/* START OF COMPILED CODE */

class titleScreenScene extends Phaser.Scene {
	
	constructor() {
	
		super("titleScreenScene");
		
	}
	
	_create() {
	
		var titleBackground = this.add.image(2.523126, -0.68339014, "ecran_titre");
		titleBackground.setOrigin(0.0, 0.0);
		
		this.fTitleBackground = titleBackground;
		
	}
	
	
	/* START-USER-CODE */
	create(){
		this._create();
		this.scene.get("Scene1").musicManager("music_kids_play_loop_01",0.4,true);
		this.click = this.sound.add("simple_click");
		
		var bouton_png_1 = this.add.image(600, 600, "hud", "bouton.png");
		bouton_png_1.setData("tag", "button");
		bouton_png_1.setData("name", "newgame");
		bouton_png_1.setScale(1.5,1);
		
		var text_1 = this.add.text(500, 580, "NEW GAME\r\n\r\n", {
    "align": "center",
    "fontFamily": "MySonIsTebe",
    "fontSize": "30px",
    "color": "#000000",
    "fixedWidth": 200,
    "fixedHeight": 50
	});
		text_1.setOrigin(0);
		
		
		
		var bouton_png_2 = this.add.image(600, 700, "hud", "bouton.png");
		bouton_png_2.setData("tag", "button");
		bouton_png_2.setData("name", "newgame");
		bouton_png_2.setScale(1.5,1);
		
		var text_2 = this.add.text(500, 680, "CREDIT\r\n\r\n", {
    "align": "center",
    "fontFamily": "MySonIsTebe",
    "fontSize": "30px",
    "color": "#000000",
    "fixedWidth": 200,
    "fixedHeight": 50
	});
		text_2.setOrigin(0);
		
		
		
		
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
					this.scene.start("m1_scene",{x:3,y:5});
				},this);
				
				
				
				
				
			bouton_png_2.setInteractive();
				
			bouton_png_2.on('pointerover',function(pointer, localX,localY,e){
			var counter = this.tweens.addCounter({
				from: 255,
				to: 200,
				callbackScope: this,
				duration: 100,
				onUpdateScope: this,
				onUpdate: function(){
					let c = Phaser.Math.FloorTo(counter.getValue() )  ;
					let cc = Phaser.Display.Color.RGBToString(c,c,c,255,"0x");

					bouton_png_2.setTint(cc);

				}
			})
			
		},this)
		
			bouton_png_2.on('pointerout',function(pointer, localX,localY,e){
				bouton_png_2.clearTint();
			},this)
				
				
			bouton_png_2.on('pointerdown',function(pointer, localX,localY,e){
					this.click.play();
					this.scene.start("CreditScreenScene");
				},this);
				
				
		
		
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
