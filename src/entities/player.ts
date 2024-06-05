import { createAnimation } from "../scripts/createAnimation";
import { SPRITES, getAnimsParams, idleFrame } from "../utils/constants";
import { Entity } from "./entity";


export class Player extends Entity {
	direction: string
	textureKey?: string
	private moveSpeed: number
	private natureLayer: Phaser.Tilemaps.TilemapLayer
	constructor(scene: Phaser.Scene, x: number, y: number, texture: { [key: string]: string }, nautreLayer: Phaser.Tilemaps.TilemapLayer) {
		super(scene, x, y, texture.base, SPRITES.PLAYER.base)
		this.moveSpeed = 8
		this.natureLayer = nautreLayer
		this.setSize(13, 16)
		this.setOffset(18, 16)
		this.direction = 'down'
		this.setupKeysListener()

		const animsParams = getAnimsParams(this, texture)
		for (let i = 0; i < animsParams.length; i++) {
			createAnimation(animsParams[i])
		}
	}
	private setupKeysListener() {
		this.scene.input.keyboard.on('keydown-SPACE', () => {
			this.play(`action-${this.direction}`, true);
			const playerTileX = this.natureLayer.worldToTileX(this.x);
			const playerTileY = this.natureLayer.worldToTileY(this.y);
			const tile = this.natureLayer.getTileAt(playerTileX + 1, playerTileY)
			setTimeout(() => {

				this.natureLayer.removeTileAt(tile.x, tile.y)
			}, 650)
		})
	}

	update(delta: number) {
		const keys = this.scene.input.keyboard.createCursorKeys()

		if (keys.up.isDown) {
			this.play('run-up', true)
			this.setVelocity(0, -delta * this.moveSpeed)
			if (this.direction !== 'up') this.direction = 'up'
		} else if (keys.down.isDown) {
			this.play('run-down', true)
			this.setVelocity(0, delta * this.moveSpeed)
			if (this.direction !== 'down') this.direction = 'down'
		} else if (keys.left.isDown) {
			this.play('run-left', true)
			this.setVelocity(-delta * this.moveSpeed, 0)
			if (this.direction !== 'left') this.direction = 'left'
		} else if (keys.right.isDown) {
			this.play('run-right', true)
			this.setVelocity(delta * this.moveSpeed, 0)
			if (this.direction !== 'right') this.direction = 'right'
		} else if (keys.space.isDown) {
			this.setVelocity(0, 0)
		}
		else {
			this.stop()
			this.setVelocity(0, 0)
			this.setTexture(SPRITES.PLAYER.base)
			this.setFrame(idleFrame[this.direction]);
		}
	}
}