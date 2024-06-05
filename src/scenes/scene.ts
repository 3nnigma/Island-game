import mapJSON from '../assets/map.json';
import { Player } from '../entities/player';
import { collisionFind } from '../scripts/collisionFind';
import { SPRITES, natureCollisions } from '../utils/constants';

export class Main extends Phaser.Scene {
	private player?: Player
	constructor() {
		super("MainScene");
	}

	preload() {
		this.load.image('ground', 'src/assets/Sprites/Tilesets/Ground.png')
		this.load.image('grass', 'src/assets/Sprites/Tilesets/Grass.png')
		this.load.image('furniture', 'src/assets/Sprites/Tilesets/Furniture.png')
		this.load.image('nature', 'src/assets/Sprites/Tilesets/Nature.png')
		this.load.image('house', 'src/assets/Sprites/Tilesets/Wooden House.png')
		this.load.image('nature', 'src/assets/Sprites/Tilesets/Nature.png')
		this.load.image('furniture', 'src/assets/Sprites/Tilesets/Furniture.png')
		this.load.image('water', 'src/assets/Sprites/Tilesets/Water.png')
		this.load.tilemapTiledJSON('map', 'src/assets/map.json')
		this.load.spritesheet(SPRITES.PLAYER.base, 'src/assets/Sprites/Characters/Player spritesheet.png', {
			frameWidth: 48,
			frameHeight: 48
		})
		this.load.spritesheet(SPRITES.PLAYER.action, 'src/assets/Sprites/Characters/Player Actions.png', {
			frameWidth: 48,
			frameHeight: 48
		})
	}
	create() {
		const map = this.make.tilemap({ key: "map" })
		const water = map.addTilesetImage(mapJSON.tilesets[0].name, 'water', 16, 16)
		const ground = map.addTilesetImage(mapJSON.tilesets[1].name, 'ground', 16, 16)
		const grass = map.addTilesetImage(mapJSON.tilesets[2].name, 'grass', 16, 16)
		const house = map.addTilesetImage(mapJSON.tilesets[3].name, 'house', 16, 16)
		const nature = map.addTilesetImage(mapJSON.tilesets[4].name, 'nature', 16, 16)
		const furniture = map.addTilesetImage(mapJSON.tilesets[5].name, 'furniture', 16, 16)
		const waterLayer = map.createLayer("water", [water, nature], 0, 0)
		const islandLayer = map.createLayer("island", [ground, furniture, grass, nature, house], 0, 0)
		const floorLayer = map.createLayer("floor", [ground, nature, furniture, grass], 0, 0)
		const houseLayer = map.createLayer("house", [house, furniture], 0, 0)
		const natureLayer = map.createLayer("nature", [nature], 0, 0)
		const collisionLayer = map.createLayer("collision", [ground], 0, 0)

		this.player = new Player(this, 400, 300, SPRITES.PLAYER, natureLayer)

		this.cameras.main.startFollow(this.player)
		this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)

		this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
		this.player.setCollideWorldBounds(true)

		this.physics.add.collider(this.player, [collisionLayer, natureLayer])
		collisionLayer.setCollisionByExclusion([-1])

		collisionFind(natureLayer, natureCollisions)

	}

	update(time: number, delta: number): void {
		this.player.update(delta)
	}
}