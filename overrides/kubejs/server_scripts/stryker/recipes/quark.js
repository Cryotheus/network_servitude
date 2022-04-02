onEvent('recipes', event => {
	event.remove({id: 'quark:oddities/crafting/backpack_no_hide'})
	
	event.shaped(Item.of('quark:matrix_enchanter', 1), [' M ', 'IOI', 'OTO'], {
		I: '#forge:ingots/iridium',
		M: 'chiselsandbits:magnifying_glass',
		O: '#forge:obsidian',
		T: 'minecraft:enchanting_table'
	})
})