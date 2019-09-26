
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	preload() {
	
		//this.load.pack("pack", "assets/pack.json");

	}
	
	_create() {
	
		var map_1 = this.add.image(-2.0026503, 64.3907, "map 1");
		map_1.visible = false;
		map_1.setOrigin(0.0, 0.0);
		
	}
	
	
	/* START-USER-CODE */

	create() {
		this._create();

		var text = this.cache.text.get("m1_txt");
		this.game.global = {
			hero : {
				life: 3,
				maxLife: 3
			},
			map: {
				name: "m1",
				x: 5,
				y:5
			},
			minimap: {
				m1: false,
				m2: false,
				m3: false,
				m4: false,
				m5: false,
				m6: false,
				m7: false,
				m8: false,
				m9: false,
				m10: false,
				m11: false,
				m12: false,
				m13: false,
				m14: false,
				m15: false,
				m15: false,
				m16: false,
				m17: false,
				m18: false,
				m19: false,			
				m20: false,			
				m21: false,			
				m22: false,	
				m23: false	
			},
			coin: 0,
			mapGrid:{}
		}
		this.globalDataGenerate();
		var datacc = JSON.stringify(this.game.global);
		
		this.game.loadFile = (File)=>{
			let parseJson =JSON.parse(File);
			console.log(parseJson);
			this.game.global = parseJson;
		}
		this.game.saveFile = ()=>{
			let stringifyJson = JSON.stringify(this.game.global);
			localStorage.setItem("Savefile",stringifyJson);
			return stringifyJson;
		}
		this.scene.launch("m1_scene",  {x:3,y:5}  );
	}

	update() {
		
	}
	
	globalDataGenerate(){
		for(let i = 1; i <= 6;i++){ //genere les variables global jusqu'a m3
			this.game.global.mapGrid["m"+i] = {}
			this.game.global.mapGrid["m"+i].data = this.mapTextParser("m"+i);
		}
	}
	
	mapTextParser(textParam){
		var text = this.cache.text.get(textParam+"_txt");		

		var grid = [];
		grid.push([]);
		//Initialise la grille à 0.
		var row = 0;
		var initialise_const_var_width = false;
		var initialise_const_var_height = false;
		var add_value = [];
		this.game.global.mapGrid[textParam].width= 0;
		this.game.global.mapGrid[textParam].height= 0;	
		
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
					this.game.global.mapGrid[textParam].width = parseInt(value);

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

					this.game.global.mapGrid[textParam].height = parseInt(value);

					add_value = [];
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
	


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
