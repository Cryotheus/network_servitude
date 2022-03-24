//fortune ores!

onEvent('block.loot_tables', event => {
	event.addBlock('#forge:ores/iron', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:iron_chunk'})
		})
	})
	
	//event.addBlock('emendatusenigmatica:certus_quartz_netherrack_ore', table => {
	//	table.addPool(pool => {
	//		pool.setUniformRolls(1, 2)
	//		pool.survivesExplosion()
	//		pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:certus_quartz_chunk'})
	//	})
	//})
})