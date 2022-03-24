onEvent('recipes', event => {
	//deletions
	
	//fiery glass
	event.remove({id: 'create:compat/druidcraft/crushing/moonstone_ore'})
	event.remove({id: 'druidcraft:moonstone_from_blasting'})
	event.remove({id: 'druidcraft:moonstone_from_smelting'})
	event.remove({id: 'thermal:compat/druidcraft/pulverizer_druidcraft_moonstone_ore'})
	
	//moonstone
	event.remove({id: 'create:compat/druidcraft/crushing/fiery_glass_ore'})
	event.remove({id: 'druidcraft:fiery_glass_from_blasting'})
	event.remove({id: 'druidcraft:fiery_glass_from_smelting'})
	event.remove({id: 'thermal:compat/druidcraft/pulverizer_druidcraft_fiery_glass_ore'})
	
	//rockroot
	event.remove({id: 'druidcraft:rockroot_from_blasting'})
	event.remove({id: 'druidcraft:rockroot_from_smelting'})
	event.remove({id: 'thermal:compat/druidcraft/pulverizer_druidcraft_rockroot_ore'})
	
	//additions
	//shaped
	event.shaped(Item.of('druidcraft:fiery_glass', 16), ["GGG", "GIG", "GGG"], {
		G: '#forge:glass',
		I: '#forge:ingots/fiery'
	})
	
	event.shaped(Item.of('druidcraft:moonstone', 4), [" G ", "GIG", " G "], {
		G: '#forge:glass',
		I: '#blue_skies:gems/moonstone'
	})
	
	//shapeless
	event.shapeless(Item.of('druidcraft:rockroot', 4), [
		'#minecraft:logs',
		'#minecraft:logs',
		'#minecraft:logs',
		'#minecraft:logs',
		'#forge:salt',
		'#forge:stone'
	])
})