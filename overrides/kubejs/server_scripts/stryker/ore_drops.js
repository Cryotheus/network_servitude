function add_fortune_ore(event, predicate, drop) {
	event.addBlock(predicate, table => {
		table.addPool(pool => {
			pool.addEntry({
				type: 'minecraft:item',
				name: drop,
				weight: 1,
				functions: [
					{
						enchantment: "minecraft:fortune",
						formula: "minecraft:ore_drops",
						function: "minecraft:apply_bonus"
					}
				]
			})
		})
	})
}

onEvent('block.loot_tables', event => {
	/*
	event.addBlock('#forge:ores/iron', table => {
		table.addPool(pool => {
			pool.setUniformRolls(1, 2)
			pool.survivesExplosion()
			pool.addEntry({type: 'minecraft:item', name: 'emendatusenigmatica:iron_chunk'})
		})
	}) //*/
	
	//'#forge:ores/iron' 'emendatusenigmatica:iron_chunk'
	
	//turning this into a function is untested!
	add_fortune_ore(event, '#forge:ores/iron', 'emendatusenigmatica:iron_chunk')
})