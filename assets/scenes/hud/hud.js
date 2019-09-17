
// You can write more code here

/* START OF COMPILED CODE */

class hud extends Phaser.Scene {
	
	constructor() {
	
		super("hud");
		
	}
	
	_create() {
	
		var menuBouton = this.add.image(87.39858, 38.0, "hud", "bouton.png");
		
		this.add.text(37.09165, 21.723482, "MENU\r\n\r\n", {
    "align": "center",
    "fontFamily": "MySonIsTebe",
    "fontSize": "25px",
    "color": "#000000",
    "fixedWidth": 100,
    "fixedHeight": 50
});
		
		this.add.image(245.672, 38.0, "hud", "hud_life .png");
		
		this.add.image(450.73413, 38.0, "hud", "hud_potion.png");
		
		var ecran_menu_png = this.add.image(1265.4706, 415.31027, "hud", "ecran menu.png");
		ecran_menu_png.visible = false;
		
		var bouton_X_png = this.add.image(1653.623, 135.53568, "hud", "bouton X.png");
		bouton_X_png.setData("tag", "button");
		bouton_X_png.setData("name", "close");
		bouton_X_png.visible = false;
		
		var bouton_png_1 = this.add.image(989.0154, 736.455, "hud", "bouton.png");
		bouton_png_1.setData("tag", "button");
		bouton_png_1.setData("name", "map");
		bouton_png_1.visible = false;
		
		var bouton_png_2 = this.add.image(1125.9503, 737.67755, "hud", "bouton.png");
		bouton_png_2.setData("tag", "button");
		bouton_png_2.setData("name", "inventaire");
		bouton_png_2.visible = false;
		
		var bouton_png_3 = this.add.image(1261.6626, 738.9002, "hud", "bouton.png");
		bouton_png_3.setData("tag", "button");
		bouton_png_3.setData("name", "equip");
		bouton_png_3.visible = false;
		
		var bouton_png_4 = this.add.image(1399.8201, 738.9002, "hud", "bouton.png");
		bouton_png_4.setData("tag", "button");
		bouton_png_4.setData("name", "statut");
		bouton_png_4.visible = false;
		
		var bouton_png_5 = this.add.image(1536.755, 740.12286, "hud", "bouton.png");
		bouton_png_5.setData("tag", "button");
		bouton_png_5.setData("name", "parametre");
		bouton_png_5.visible = false;
		
		var text_2 = this.add.text(937.8503, 720.63153, "MAP\r\n\r\n", {
    "align": "center",
    "fontFamily": "MySonIsTebe",
    "fontSize": "25px",
    "color": "#000000",
    "fixedWidth": 100,
    "fixedHeight": 50
});
		text_2.visible = false;
		
		var text_3 = this.add.text(1075.2087, 726.601, "INVENTAIRE\r\n\r\n\r\n", {
    "align": "center",
    "fontFamily": "MySonIsTebe",
    "fontSize": "18px",
    "color": "#000000",
    "fixedWidth": 100,
    "fixedHeight": 50
});
		text_3.visible = false;
		
		var text_4 = this.add.text(1215.366, 721.6881, "EQUIP\r\n\r\n\r\n", {
    "align": "center",
    "fontFamily": "MySonIsTebe",
    "fontSize": "25px",
    "color": "#000000",
    "fixedWidth": 100,
    "fixedHeight": 50
});
		text_4.visible = false;
		
		var text_5 = this.add.text(1353.0671, 720.64264, "STATUT\r\n", {
    "align": "center",
    "fontFamily": "MySonIsTebe",
    "fontSize": "25px",
    "color": "#000000",
    "fixedWidth": 100,
    "fixedHeight": 50
});
		text_5.visible = false;
		
		var text_6 = this.add.text(1464.5552, 727.8471, "PARAMETRE\r\n\r\n", {
    "align": "center",
    "fontFamily": "MySonIsTebe",
    "fontSize": "18px",
    "color": "#000000",
    "fixedWidth": 150,
    "fixedHeight": 50
});
		text_6.visible = false;
		
		var inventaire_window = this.add.text(2397.9607, 418.6531, "INVENTAIRE\r\n\r\n", {
    "fontSize": "100px",
    "color": "#000000"
});
		inventaire_window.visible = false;
		
		var map_window = this.add.text(1978.8859, 407.5094, "MAP\r\n", {
    "fontSize": "100px",
    "color": "#000000"
});
		map_window.visible = false;
		
		var equip_window = this.add.text(3256.6604, 413.79147, "EQUIP\r\n\r\n", {
    "fontSize": "100px",
    "color": "#000000"
});
		equip_window.visible = false;
		
		var statut_window = this.add.text(3959.828, 412.0548, "STATUT\r\n\r\n", {
    "fontSize": "100px",
    "color": "#000000"
});
		statut_window.visible = false;
		
		var parametre_window = this.add.text(4646.634, 407.81894, "PARAMETRE\r\n\r\n\r\n", {
    "fontSize": "100px",
    "color": "#000000"
});
		parametre_window.visible = false;
		
		this.fMenu = this.add.group([ ecran_menu_png, bouton_X_png, bouton_png_1, bouton_png_2, bouton_png_3, bouton_png_4, bouton_png_5, text_2, text_3, text_4, text_5, text_6 ]);
		this.fMap_window = this.add.group([ map_window ]);
		this.fInventaire_window = this.add.group([ inventaire_window ]);
		this.fEquip_window = this.add.group([ equip_window ]);
		this.fStatut_window = this.add.group([ statut_window ]);
		this.fParametre_window = this.add.group([ parametre_window ]);
		
		this.fMenuBouton = menuBouton;
		
	}
	
	
	
	
	
	
	
	
	/* START-USER-CODE */
	create(){
		this._create();
		this.click = this.sound.add("simple_click");
		
		
		this.menuChoix = "";
		this.fMap_window.name = "map_window";
		
		var grid = this.add.grid(1690,142,738,536,32,32,0xffffff,0,0xcecece,0.8);
		grid.setVisible(false);
		grid.setOrigin(0);
		this.fMap_window.add(grid);
		var cellule_map = this.add.rectangle(2058,415,32,32,0xff0000);
		cellule_map.setStrokeStyle(3,0x000000);
		cellule_map.setVisible(false);
		this.fMap_window.add(cellule_map);
		this.fMenu.getChildren()[1].setDepth(2);
		
		
		this.fInventaire_window.name = "inventaire_window";
		this.fEquip_window.name = "statut_window";
		this.fParametre_window.name = "parametre_window";
		
		this.hiddenPositionMenu = {
			map_window:{x: 1650,y: 0},      menu:{x: 848,y: 0},
			inventaire_window:{x: 2200,y: 0},equip_window:{x: 3100,y: 0},
			statut_window:{x: 3800,y: 0},    parametre_window:{x: 4500,y: 0}
		}
		let heroLife = this.scene.get("Scene1").fHero.getData("life");
		this.add.bitmapText(230,25,"KidsZone",heroLife +"/3",24);
		this.fMenuBouton.setInteractive();
		
		
		
		for(let i = 0 ; i <= this.fMenu.getChildren().length - 1; i++){
			let child = this.fMenu.getChildren()[i];

			if(
				child.getData("tag")!== undefined &&
				child.getData("tag")==="button") {

				child.setInteractive();
				
				
				
			child.on('pointerover',function(pointer, localX,localY,e){
			var counter = this.tweens.addCounter({
				from: 255,
				to: 200,
				callbackScope: this,
				duration: 100,
				onUpdateScope: this,
				onUpdate: function(){
					let c = Phaser.Math.FloorTo(counter.getValue() )  ;
					let cc = Phaser.Display.Color.RGBToString(c,c,c,255,"0x");

					child.setTint(cc);

				}
			})
			
		},this)
		
		child.on('pointerout',function(pointer, localX,localY,e){
			child.clearTint();
		},this)
				
				
				child.on('pointerdown',function(pointer, localX,localY,e){
					this.click.play();
					if(child.getData("name") === "close"){
						this.closeWindowMenu();
					}else{
						this.changeWindowForm(child.getData("name")+ "_window" );
					}


					
				},this);
			}
		}
		
		
		
		this.fMenuBouton.on('pointerover',function(pointer, localX,localY,e){
			var counter = this.tweens.addCounter({
				from: 255,
				to: 200,
				callbackScope: this,
				duration: 100,
				onUpdateScope: this,
				onUpdate: function(){
					let c = Phaser.Math.FloorTo(counter.getValue() )  ;
					let cc = Phaser.Display.Color.RGBToString(c,c,c,255,"0x");

					this.fMenuBouton.setTint(cc);

				}
			})
			
		},this)
		
		this.fMenuBouton.on('pointerout',function(pointer, localX,localY,e){
			this.fMenuBouton.clearTint();
			
		},this)
		
		this.fMenuBouton.on('pointerdown',function(pointer, localX,localY,e){
			this.click.play();
			Phaser.Actions.ToggleVisible(this.fMenu.getChildren() );

							//Phaser.Actions.IncX(this.fMenu.getChildren(), -832);
			if(this.fMenu.getChildren()[0].visible === false){

				//cacher le menu
				Phaser.Actions.IncX(this.fMenu.getChildren(), this.hiddenPositionMenu.menu.x);
				this.changeWindowForm("clean");	
				this.scene.get("Scene1").restartBackground();
				this.scene.resume("Scene1");		
			}else{
				
				//rendre visible le menu
				Phaser.Actions.IncX(this.fMenu.getChildren(),-this.hiddenPositionMenu.menu.x);
				this.changeWindowForm("map_window");
				this.scene.get("Scene1").setBackgroundGray();
			    this.scene.pause("Scene1");
			}

			},this)
			
		
		
	}
	
	closeWindowMenu(){
		    this.changeWindowForm("clean");
			Phaser.Actions.SetVisible(this.fMenu.getChildren(), false);
			Phaser.Actions.IncX(this.fMenu.getChildren(), this.hiddenPositionMenu.menu.x);
			this.scene.get("Scene1").restartBackground();
			this.scene.resume("Scene1");		
	}
	
	changeWindowForm(strChange){
				if(this.menuChoix !== strChange){
						
						switch(this.menuChoix){
							case "map_window":
								Phaser.Actions.IncX(this.fMap_window.getChildren(), this.hiddenPositionMenu.map_window.x);
								Phaser.Actions.SetVisible(this.fMap_window.getChildren(), false);
								break;
							case "inventaire_window":
								Phaser.Actions.IncX(this.fInventaire_window.getChildren(), this.hiddenPositionMenu.inventaire_window.x);
								Phaser.Actions.SetVisible(this.fInventaire_window.getChildren(), false);
								break;
							case "equip_window":
								Phaser.Actions.IncX(this.fEquip_window.getChildren(), this.hiddenPositionMenu.equip_window.x);
								Phaser.Actions.SetVisible(this.fEquip_window.getChildren(), false);
								break;
							case "statut_window":
								Phaser.Actions.IncX(this.fStatut_window.getChildren(), this.hiddenPositionMenu.statut_window.x);
								Phaser.Actions.SetVisible(this.fStatut_window.getChildren(), false);
								break;
							case "parametre_window":
								Phaser.Actions.IncX(this.fParametre_window.getChildren(), this.hiddenPositionMenu.parametre_window.x);
								Phaser.Actions.SetVisible(this.fParametre_window.getChildren(), false);
								break;																												
							default:
								break;
						}
						
						switch(strChange){
							case "map_window":
								Phaser.Actions.IncX(this.fMap_window.getChildren(), -this.hiddenPositionMenu.map_window.x);
								Phaser.Actions.SetVisible(this.fMap_window.getChildren(), true);
								break;
							case "inventaire_window":
								Phaser.Actions.IncX(this.fInventaire_window.getChildren(), -this.hiddenPositionMenu.inventaire_window.x);
								Phaser.Actions.SetVisible(this.fInventaire_window.getChildren(), true);
								break;
							case "equip_window":
								Phaser.Actions.IncX(this.fEquip_window.getChildren(), -this.hiddenPositionMenu.equip_window.x);
								Phaser.Actions.SetVisible(this.fEquip_window.getChildren(), true);
								break;
							case "statut_window":
								Phaser.Actions.IncX(this.fStatut_window.getChildren(), -this.hiddenPositionMenu.statut_window.x);
								Phaser.Actions.SetVisible(this.fStatut_window.getChildren(), true);
								break;
							case "parametre_window":
								Phaser.Actions.IncX(this.fParametre_window.getChildren(), -this.hiddenPositionMenu.parametre_window.x);
								Phaser.Actions.SetVisible(this.fParametre_window.getChildren(), true);
								break;			
							default:
								break;
						}
						

						this.menuChoix = strChange;
						console.log("changement effectué!");
				}else{
					console.log("pas de changement au niveau de la fenetre...");
				}

				
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
