ore_ids = [
	"minecraft:coal_ore",
	"minecraft:iron_ore"
]

onEvent('recipes', event => {
	event.remove({id: 'extendedcrafting:handheld_table'})
})