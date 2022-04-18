onEvent('recipe', event => {
	//removals
	event.remove('apotheosis:prismatic_altar')
	
	//shaped
	event.shaped(Item.of("patchouli:guide_book", '{"patchouli:book":"apotheosis:apoth_chronicle"}'), [
		' G ',
		'GBG',
		' G '
	], {
		G: '#forge:dusts/glowstone',
		B: 'minecraft:enchanted_book'
	})
	
	event.shaped('apotheosis:prismatic_altar', [
		'S S',
		'SLS',
		'SMS'
	], {
		S: '#minecraft:stone_bricks',
		L: 'minecraft:sea_lantern',
		M: 'quark:matrix_enchanter'
	})
})