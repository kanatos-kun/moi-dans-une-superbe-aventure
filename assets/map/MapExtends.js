
// You can write more code here

/* START OF COMPILED CODE */

class MapExtends extends Phaser.Scene {
	
	constructor(name) {
	
		super(name);
		this.tp;
		this.eventMap=[];
		this.grid_width = 0;
		this.grid_height = 0;
		this.lastDirection;
	}
	
	_create() {
	
		
	}
	
	init(data){
		this.posHero = {
			x: data.x,
			y: data.y
		}
	}
	
	/* START-USER-CODE */
	mapCreate(){
		var hud = this.scene.launch("hud");
		this.musicManager();
		this.coinGroup = this.add.group();
		this.eventMapGroup = this.add.group();
		this.heroInteract = false;
		
		
		this.game.global.map.name = this.parseKeyName();
		this.game.global.minimap[this.parseKeyName() ] = true;
		hud.bringToTop("hud");
		//this.parseKeyName();
		this.grid = this.game.global.mapGrid[this.parseKeyName()].data;//this.mapTextParser(this.parseKeyName() + "_txt");
		this.grid_height = this.game.global.mapGrid[this.parseKeyName()].height;
		this.grid_width = this.game.global.mapGrid[this.parseKeyName()].width;		
		this.centerCameraOnHero();
		this.createEvent();
		this.generateMap();

		this.fHero = this.add.image(this.posHero.x * 64, this.posHero.y * 64, "atlas", "hero.png");
		this.fHero.setOrigin(-0.2,0);
		this.fHero.setData("life",3);
		this.fHero.setDepth(26);
		
		

		//this.cameras.main.startFollow(this.fHero);
		this.grayRectangle = this.add.rectangle(0,64,this.grid_width * 64,this.grid_height * 64,0x000000,0.7);
		this.grayRectangle.setDepth(100);
		this.grayRectangle.visible=false;
		this.grayRectangle.setOrigin(0,0);

		this.keys = this.input.keyboard.addKeys("down,left,right,up,a,space");
		
		var pos = this.whereIsHero(this.fHero);
		this.keys.up.on("up", function(key,event){

			pos = this.whereIsHero(this.fHero);

			if(this.heroInteract === false){
				

				pos.y --;
				if( !this.isHeroOutOfMap(pos) && !this.isHeroCollideWith(pos) ){

					this.fHero.setY(this.fHero.y - 64);
					this.moveCamera(pos,"up");
				}
				this.lastDirection = "top";
				this.isHeroInTPPoint(pos);
				
				
			}


		},this)
		this.keys.right.on("up", function(key,event){
			pos = this.whereIsHero(this.fHero);
			pos.x++;
			if(this.heroInteract === false){
				
				if( !this.isHeroOutOfMap(pos) && !this.isHeroCollideWith(pos) ){
					this.fHero.setX(this.fHero.x + 64);
					this.moveCamera(pos,"right");
				}
				this.lastDirection = "right";
				this.isHeroInTPPoint(pos);
				
				
				
			}


		},this)
		
		this.keys.down.on("up", function(key,event){

			pos = this.whereIsHero(this.fHero);
			if(this.heroInteract === false){
				
				pos.y++;
				if( !this.isHeroOutOfMap(pos) && !this.isHeroCollideWith(pos) ){
					this.fHero.setY(this.fHero.y + 64);
					this.moveCamera(pos,"down");
	
				}
				this.lastDirection = "down";
				this.isHeroInTPPoint(pos);
				
				
				
			}


		},this)
		
		this.keys.left.on("up", function(key,event){

			pos = this.whereIsHero(this.fHero);
			if(this.heroInteract === false){
				
				
				pos.x--;
				if( !this.isHeroOutOfMap(pos) && !this.isHeroCollideWith(pos) ){
					this.fHero.setX(this.fHero.x - 64);
					this.moveCamera(pos,"left");
				}
				this.lastDirection = "left";
				this.isHeroInTPPoint(pos);
				
				
			}

			
		},this)
		
		
		this.keys.space.on("up", function(key,event){

			pos = this.whereIsHero(this.fHero);

			if (this.lastDirection === "left") pos.x--;
			if (this.lastDirection === "down") pos.y++;
			if (this.lastDirection === "right") pos.x++;
			if (this.lastDirection === "top") pos.y--;									
			
			this.interractionWith(pos);
			
		},this)
	}
	// Write your code here.
	
	setBackgroundGray(){
		this.cameras.main.setAlpha(0.2);//Phaser.Display.Color.RGBStringToColor('rgb(200,200,200)')
		this.grayRectangle.visible=true;
		this.cameras.main.backgroundColor=Phaser.Display.Color.RGBStringToColor('rgb(100,100,100)');
		//this.cameras.main.fadeOut(1000,200,200,200);
	}
	
	interractionWith(pos){
		if(this.grid[pos.y][pos.x] !== 0 && 
			this.grid[pos.y][pos.x] !== 1 &&
			this.grid[pos.y][pos.x] !== 2){
				let eventArray = this.eventMapGroup.getChildren();
				_.each(eventArray,(element)=>{
					if(element === undefined){return}
					else if(element.getData("column") === pos.x &&
				   		    element.getData("row") === pos.y){
						if(element.textDialogue.visible === true){
							element.textDialogue.setVisible(false);
							this.heroInteract = false;
						}else{
							element.textDialogue.setVisible(true);
							this.heroInteract = true;
						}

						return true;
					}
				},this)
			}
	}
	
	restartBackground(){
		this.cameras.main.alpha = 1;
		this.grayRectangle.visible=false;
		this.cameras.main.backgroundColor=Phaser.Display.Color.RGBStringToColor('rgb(255,255,255)');
	}
	
	parseKeyName(){  // return le nom de la scene
		var str = this.scene.key;
		var tab = str.split("_");
		return tab[0];
	}
	
	whereIsHero(hero){
		var position = {x : 0,y : 0}
		position.x = Phaser.Math.FloorTo( hero.x / 64);
		position.y = Phaser.Math.FloorTo(hero.y / 64);
		return position;
	}
	
	isHeroCollideWith(pos){
		//console.log(this.grid[pos.y][pos.x]);
		let boolIs = false;

		let sound;
		if(this.grid[pos.y][pos.x]=== 1){
			sound = this.sound.play("retro_move_walk_tick_09");
			return true;
		}else if(this.grid[pos.y][pos.x] ===2){
			//collision avec piece

			let coinArray=this.coinGroup.getChildren();
			//coinArray[0].x +=10;
			
			_.each(coinArray,(element)=>{
				/*
				console.log("element column :")
				console.log(element.getData("column") )
				console.log("element row :")
				console.log(element.getData("row") )
			    console.log("pos :")
				console.log("{"+pos.x+";"+pos.y+"}" ) */
				if(element === undefined){return}
				else if(element.getData("column") === pos.x &&
				   element.getData("row") === pos.y){
						sound = this.sound.play("retro_collect_pickup_coin_20");
						this.coinGroup.killAndHide(element);
						this.coinGroup.remove(element,true,true);
						//this.coinGroup.remove(element,true,true);
						this.game.global.coin++;
						this.grid[pos.y][pos.x] = 0;
						this.game.global.mapGrid[this.parseKeyName() ].data = this.grid;
						return;
					}
			},this)
			//console.log(coin)
			//coin.x += 10;
					//	coin.destroy(true);
			//console.log(coin);
		}else if(this.grid[pos.y][pos.x] !==2 &&
				 this.grid[pos.y][pos.x] !==1 &&
				 this.grid[pos.y][pos.x] !==0	){
			
			let eventArray = this.eventMapGroup.getChildren();

			_.each(eventArray,(element)=>{
				/*
				console.log("element column :")
				console.log(element.getData("column") )
				console.log("element row :")
				console.log(element.getData("row") )
			    console.log("pos :")
				console.log("{"+pos.x+";"+pos.y+"}" ) */
				if(element === undefined){return}
				else if(element.getData("column") === pos.x &&
				   element.getData("row") === pos.y){
						boolIs = element.getData("collide");
						return true;
					}
			},this)
			return boolIs;
		}
		return false;
	}
	
	isHeroOutOfMap(pos){  //return boolean
		if(pos.x <= -1 || pos.y <= -1 ||
		   pos.x >= this.grid_width|| pos.y >= this.grid_height ){
			// sort des limites de la map
			
			return true;
		}
		return false;
	}
	
	musicManager(){
		if(this.musicData !== undefined && 
		   this.game.global.music.name !== this.musicData.name){
			
			if(this.game.global.music.object !== ""){
				this.game.global.music.object.stop();
			}

			this.game.global.music.object = this.sound.add(this.musicData.name);
			let music = this.game.global.music.object;

			music.play();
			music.volume = this.musicData.volume;
			music.loop = this.musicData.loop;
			this.game.global.music.name = this.musicData.name;
		}

	}
	
	moveCamera(pos,direction){
		
		if(this.grid_height> 12){
			if(pos.y +6 < this.grid_height && direction ==="up" && pos.y - 6>= 0){
				this.cameras.main.scrollY = this.cameras.main.scrollY -64;

			}
			if(pos.y-6> 0 && direction ==="down"  && pos.y + 6<= this.grid_height){
				this.cameras.main.scrollY = this.cameras.main.scrollY +64;

			}
		}
		
		if(this.grid_width> 13){
			if(pos.x +6 < (this.grid_width - 1) && direction ==="left" && pos.x - 6>= 0){
				this.cameras.main.scrollX = this.cameras.main.scrollX -64;
				console.log("scrollX --")
			}
			if(pos.x-6> 0 && direction ==="right"  && pos.x + 6<= (this.grid_width - 1) ){
				this.cameras.main.scrollX = this.cameras.main.scrollX +64;

			}
		}
	}
	
	isHeroInTPPoint(pos){
		for(let i = 0; i < this.tp.length; i++){
			let tpPoint = this.tp[i];
			if(tpPoint.x === pos.x && tpPoint.y === pos.y){
				//tp : change de scene !!
				//remove event listener
				this.keys.up.off("up");
				this.keys.right.off("up");
				this.keys.left.off("up");
				this.keys.down.off("up");		
				this.keys.space.off("up");			
				this.scene.start(tpPoint.go,{x:tpPoint.xtp,y:tpPoint.ytp});
			}
		}
	}


	generateMap(){
		//m pour map
		this.map = this.add.tilemap(this.parseKeyName() + "_data");
		
		var tileset_layers = []
		var tileset = this.map.addTilesetImage('tileset','tileset');
		_.each(this.map.layers,(element)=>{
			tileset_layers.push(element.name);
			let a =this.map.createStaticLayer(element.name,tileset,0,64);
			a.setDepth(20);
		},this)
		
		
		
		
		/*
		var limite = this.map.createStaticLayer('limite',tileset,0,64);
		var maison = this.map.createStaticLayer('maison',tileset,0,64);
		var pierre = this.map.createStaticLayer('pierre',tileset,0,64);
		var arbre = this.map.createStaticLayer('arbre',tileset,0,64);
		
		limite.setDepth(20);
		maison.setDepth(20);
		pierre.setDepth(20);
		arbre.setDepth(20); */
	}


	mapTextParser(text){
		var text = this.cache.text.get(text);		

		var grid = [];
		grid.push([]);
		//Initialise la grille à 0.
		var row = 0;
		var initialise_const_var_width = false;
		var initialise_const_var_height = false;
		var add_value = [];

		_.each(text,(element,index,list)=>{
			if(initialise_const_var_height === false){
				// rajoute la largeur et la hauteur de la carte
											

				if(!isNaN(parseInt(element)) && initialise_const_var_width ===false){
					add_value.push(parseInt(element) );
				}else if(isNaN(parseInt(element) )   && initialise_const_var_width ===false){
					let value = "";	

					for(let i = 0; i <= add_value.length; i++){
						let i2 = add_value[i];
						value +=i2;
					}
					this.grid_width = parseInt(value);

					add_value = [];
					initialise_const_var_width = true;
				}
				else if(!isNaN(parseInt(element) && initialise_const_var_height === false)){
					add_value.push(parseInt(element) );
				}else if(element === "\n"){
					
					let value = "";
					for(let i = 0; i <= add_value.length; i++){
						let i2 = add_value[i];
						value +=i2;
					}

					this.grid_height = parseInt(value);

					add_value = [];
					//console.log("width cell : " + this.grid_width + " height cell : " + this.grid_height);
					initialise_const_var_height = true;
				}

				
				
				
			}else if(element === "\n"){
				//rajoute une ligne !!
				grid.push([]);
				row++;
			}else if(!isNaN(parseInt(element) )  ){

				add_value.push(parseInt(element) );
			}else if(isNaN(parseInt(element) ) && element !==" " ){
					let value = "";	

					for(let i = 0; i <= add_value.length; i++){
						let i2 = add_value[i];
						value +=i2;
					}
					grid[row].push(parseInt(value) );
				add_value = [];
			}
			
			
		},this)
		return grid;
	}
	
	createEvent(){
		_.each(this.grid,(l,indexL)=>{
			_.each(l,(c,indexC)=>{
				if(c=== 2){ // === piece!!
					//console.log("piece!")
					//console.log(index)
					let coin = this.add.coin(64*indexC,64+64*indexL).setOrigin(0);
					coin.setData("column",indexC);
					coin.setData("row",indexL);
					coin.setDepth(25);
					this.coinGroup.add(coin);
				}else if(c !== 0 &&
						 c !== 1 &&
						 c !== 2 ){
							// event !!
							if(this.eventMap[c] !== undefined){ // plage de sureté :D :D :D
								let dataEvent = this.eventMap[c];
								let eventMap = undefined;
								if(dataEvent.tag === "character"){
									eventMap =this.add.eventmap_character(64*indexC + dataEvent.xOrigin,64+64*indexL + dataEvent.yOrigin,dataEvent.atlas,dataEvent.frame).setOrigin(0);
								}else if(dataEvent.tag ==="door"){
									eventMap =this.add.eventmap_door(64*indexC + dataEvent.xOrigin,64+64*indexL + dataEvent.yOrigin,dataEvent.atlas,dataEvent.frame).setOrigin(0);
								}
								console.log("test");
								console.log(eventMap);
								if(eventMap !== undefined){
									eventMap.setData("column",indexC);
									eventMap.setData("row",indexL);
									eventMap.setData("tag",dataEvent.tag);
									eventMap.setData("collide",dataEvent.collide);
									eventMap.setData("dialogue",dataEvent.dialogue);
									eventMap.setDepth(25);
									eventMap.init();
									this.eventMapGroup.add(eventMap);
								}

							}

						}
			},this)
		},this);
	}
	

	centerCameraOnHero(){
				if(this.grid_height > 12){

			/*
			var decalage_y = this.grid_height / 12; 
			//this.cameras.main.centerOnY(( (decalage_y - 1) * (64 * 12) ) + 420 );
			if(this.posHero.y <= 0){
				this.cameras.main.centerOnY(832 / 2);
			}else if(this.posHero.y >= (this.grid_height- 1) ){
				this.cameras.main.centerOnY( ( (decalage_y - 1) * (64 * 12) ) + 420 )
			}*/
			var decalage_y =  Phaser.Math.FloorTo(this.posHero.y / 12);


			this.cameras.main.centerOnY( (decalage_y + 1) * 384 + (decalage_y * 384) + 24 );
			
		}
		
				if(this.grid_width > 13){

			var decalage_x =  Phaser.Math.FloorTo(this.posHero.x / 13);


			this.cameras.main.centerOnX( (decalage_x + 1) * 416 + (decalage_x * 416) );

			//this.cameras.main.centerOnX(384)
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
