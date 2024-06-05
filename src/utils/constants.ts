import { Player } from "../entities/player"


export const natureCollisions = [
	[194, 198],
	[203, 207],
	[211],
	[216, 217],
	[220],
	[229]
]


export const getAnimsParams = (player: Player, texture: { [key: string]: string }) => [
	{
		key: 'action-down',
		texture: texture.action,
		anims: player.scene.anims,
		start: 0,
		end: 1,
		animsFrameRate: 2,
		repeat: -1
	},
	{
		key: 'action-up',
		texture: texture.action,
		anims: player.scene.anims,
		start: 2,
		end: 3,
		animsFrameRate: 2,
		repeat: -1
	},
	{
		key: 'action-left',
		texture: texture.action,
		anims: player.scene.anims,
		start: 4,
		end: 5,
		animsFrameRate: 2,
		repeat: -1
	},
	{
		key: 'action-right',
		texture: texture.action,
		anims: player.scene.anims,
		start: 6,
		end: 7,
		animsFrameRate: 2,
		repeat: -1
	},
	{
		key: 'run-down',
		texture: texture.base,
		anims: player.scene.anims,
		start: 2,
		end: 3,
		animsFrameRate: 6,
		repeat: -1
	},
	{
		key: 'run-up',
		texture: texture.base,
		anims: player.scene.anims,
		start: 6,
		end: 7,
		animsFrameRate: 6,
		repeat: -1
	},
	{
		key: 'run-left',
		texture: texture.base,
		anims: player.scene.anims,
		start: 10,
		end: 11,
		animsFrameRate: 6,
		repeat: -1
	},
	{
		key: 'run-right',
		texture: texture.base,
		anims: player.scene.anims,
		start: 14,
		end: 15,
		animsFrameRate: 6,
		repeat: -1
	},
]

export const idleFrame = {
	down: 1,
	up: 5,
	left: 9,
	right: 13
}

export const SPRITES = {
	PLAYER: {
		base: 'Player',
		action: 'Action'
	}
}