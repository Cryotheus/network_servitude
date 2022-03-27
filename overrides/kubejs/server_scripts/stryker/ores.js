ores = [
	'mekanism:copper_ore',
	'mekanism:fluorite_ore',
	'mekanism:lead_ore',
	'mekanism:osmium_ore',
	'mekanism:tin_ore',
	'mekanism:uranium_ore',
	'minecraft:coal_ore',
	'minecraft:diamond_ore',
	'minecraft:emerald_ore',
	'minecraft:gold_ore',
	'minecraft:iron_ore',
	'minecraft:lapis_ore',
	'minecraft:nether_gold_ore',
	'minecraft:nether_quartz_ore',
	'minecraft:redstone_ore',
]

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

onEvent('recipe', event => {
	//remove = event.remove
	//replaceInput = event.replaceInput
	
	for (let id in ores) {
		tag = ores[id]
		ore_tag = '#forge:ores/' + tag
		
		event.remove({output: ore})
		event.remove({output: ore_tag})
		event.replaceInput({}, ore_tag, '#forge:chunks/' + tag)
		event.replaceInput({}, ore, '#forge:chunks/' + tag)
	}
	
	retags.forEach(retag => {
		event.remove({output: 'emendatusenigmatica:' + retag + '_ore'})
		event.remove({id: 'emendatusenigmatica:ore_from_chunk_crafting/' + retag})
	})
})