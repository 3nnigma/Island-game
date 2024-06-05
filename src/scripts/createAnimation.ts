
interface ICreateAnimation {
	key: string,
	texture: string,
	anims: Phaser.Animations.AnimationManager,
	start: number,
	end: number,
	animsFrameRate: number,
	repeat: number
}

export const createAnimation = ({ key, texture, anims, start, end, animsFrameRate, repeat }: ICreateAnimation) => {
	anims.create({
		key,
		frames: anims.generateFrameNumbers(texture, {
			start,
			end
		}),
		frameRate: animsFrameRate,
		repeat
	})
} 