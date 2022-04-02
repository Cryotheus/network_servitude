// priority: 100
onEvent('recipes', event => {
	event.remove({id: 'minecraft:enchanting_table'})
	
	event.shaped('minecraft:enchanting_table', ['EBE', 'GOG', 'OOO'], {
		B: "#forge:books",
		E: "#forge:ender_pearls",
		O: "#forge:obsidian",
		G: "#forge:gems"
	})
})