export const collisionFind = (layer: Phaser.Tilemaps.TilemapLayer, collision: Array<Array<number>>) => {
	for (let i = 0; i < collision.length; i++) {
		if (collision[i].length == 1) {
			layer.setCollision([collision[i][0]])
		} else {
			layer.setCollisionBetween(collision[i][0], collision[i][1])
		}
	}
}