class SpriteComponent extends BaseComponent {
	constructor(textureId, tileId) {
		super();
		this.texture = textureFactory.getTexture(textureId, tileId);
		this.sprite = new PIXI.Sprite(this.texture);
		this.sprite.anchor.x = 0.5;
		this.sprite.anchor.y = 0.5;
		this.rotation = 0;
		this.sprite.interactive = true;
		this.sprite.mousedown = function(data) {
			debug.attachCamera(this.parent);
		}.bind(this);
		worldStage.addChild(this.sprite);
	}

	update(timeElapsed) {
		this.sprite.position = this.parent.position;
		this.sprite.rotation = this.parent.rotation;
	}
}