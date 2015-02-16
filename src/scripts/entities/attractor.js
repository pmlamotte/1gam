entityBuilder.addRecipe({
	name: 'attractor',

	components: [{
		type: 'AttractorComponent',
		args: {
			pos: {
				x: 750,
				y: 400
			},
			strength: 0.75,
			order: 1.2,
			min: 50
		}
	}, {
		type: 'SpriteComponent',
		args: 'circle'
	}]
});