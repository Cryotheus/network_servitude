ore_ids = [
	"minecraft:coal_ore",
	"minecraft:iron_ore"
]

onEvent('recipes', event => {
	event.remove({id: 'extendedcrafting:handheld_table'})

	//appliedenergistics2:grinder
	event.remove({id: 'appliedenergistics2:grinder/certus_quartz_dust_ore'})
	event.remove({id: 'appliedenergistics2:grinder/nether_quartz_dust_ore'})
	event.remove({id: 'appliedenergistics2:grinder/gold_dust_ore'})
	event.remove({id: 'appliedenergistics2:grinder/iron_dust_ore'})
})