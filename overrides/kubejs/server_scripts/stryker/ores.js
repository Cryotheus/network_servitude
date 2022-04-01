// priority: 900
ores = {
	'mekanism:copper_ore': 'copper',
	'mekanism:fluorite_ore': 'fluorite',
	'mekanism:lead_ore': 'lead',
	'mekanism:osmium_ore': 'osmium',
	'mekanism:tin_ore': 'tin',
	'mekanism:uranium_ore': 'uranium',
	'minecraft:coal_ore': 'coal',
	'minecraft:diamond_ore': 'diamond',
	'minecraft:emerald_ore': 'emerald',
	'minecraft:gold_ore': 'gold',
	'minecraft:iron_ore': 'iron',
	'minecraft:lapis_ore': 'lapis',
	'minecraft:nether_gold_ore': 'gold',
	'minecraft:nether_quartz_ore': 'quartz',
	'minecraft:redstone_ore': 'redstone',
}

retags = [
	'aluminum',
	'apatite',
	'arcane',
	'bitumen',
	'certus_quartz',
	'charged_certus_quartz',
	'cinnabar',
	'coal',
	'cobalt',
	'copper',
	'diamond',
	'dimensional',
	'emerald',
	'fluorite',
	'gold',
	'iridium',
	'iron',
	'lapis',
	'lead',
	'nickel',
	'osmium',
	'peridot',
	'potassium_nitrate',
	//'quartz',
	'redstone',
	'ruby',
	'sapphire',
	'silver',
	'sulfur',
	'tin',
	'uranium',
	'zinc'
]

chunk_tags = [
	'aluminum',
	'cobalt',
	'copper',
	'gold',
	'iridium',
	'iron',
	'lead',
	'nickel',
	'osmium',
	'ruby',
	'silver',
	'tin',
	'uranium',
	'zinc'
]

stratums = [
	'andesite',
	'basalt',
	'blackstone',
	'blue_netherrack',
	'brimstone',
	'c_limestone',
	'cryptic_stone',
	'deepslate',
	'diorite',
	'ether_stone',
	'gabbro',
	'granite',
	'jasper',
	'mossy_stone',
	'netherrack',
	'scoria',
	'slate',
	'subzero_ash',
	'weathered_limestone'
]

exchange_pickups = {
	'emendatusenigmatica:certus_quartz_gem': 'appliedenergistics2:certus_quartz_crystal',
	'emendatusenigmatica:charged_certus_quartz_gem': 'appliedenergistics2:charged_certus_quartz_crystal',
	'emendatusenigmatica:fluix_gem': 'appliedenergistics2:fluix_crystal'
}

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
	//'#forge:ores/iron' 'emendatusenigmatica:iron_chunk'
	chunk_tags.forEach(element => {add_fortune_ore(event, '#forge:ores/' + element, 'emendatusenigmatica:' + element + '_chunk')})
	
	add_fortune_ore(event, '#forge:ores/certus_quartz', 'appliedenergistics2:certus_quartz_crystal')
	add_fortune_ore(event, '#forge:ores/charged_certus_quartz', 'appliedenergistics2:charged_certus_quartz_crystal')
})

onEvent('block.tags', event => {
	// /^compactores:/
	
	//properly tag all compact ores with the ore tag
	retags.forEach(retag => {
		tag = 'forge:ores/' + retag
		
		stratums.forEach(stratum => {
			event.add(tag, 'compactores:compactore__emendatusenigmatica__' + retag + '_' + stratum + "_ore")
		})
	})
})

onEvent('item.pickup', event => {
	player = event.player
	item = event.item
	
	if (item) {
		new_id = exchange_pickups[item.id]
		
		if (new_id)
		{
			new_count = item.count
			item.count = 0
			
			player.give(new_count + 'x ' + new_id)
		}
	}
})

onEvent('recipes', event => {
	//remove = event.remove
	//replaceInput = event.replaceInput
	
	//event.remove({id: 'emendatusenigmatica:ore_from_chunk_crafting/lapis'})
	
	retags.forEach(element => {
		//event.remove({output: 'emendatusenigmatica:' + element + '_ore'})
		event.remove({id: 'emendatusenigmatica:ore_from_chunk_crafting/' + element})
		event.replaceInput({}, '#forge:ores/' + tag, '#forge:chunks/' + tag)
		event.replaceOutput({}, {output: '#forge:ores/' + tag})
		event.server.tell('modified ' + element + ' ore recipes')
		
	})
	
	for (let id in ores) {
		tag = ores[id]
		
		event.remove({output: ore})
		
		//event.replaceInput({}, ore, '#forge:chunks/' + tag)
		//event.server.tell('replaced ' + ore + ' with tag ' + tag + ' recipe')
	}
})
