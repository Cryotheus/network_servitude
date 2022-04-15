function add_smithing_recipe(event, primary, secondary, resultant, primary_is_tag, secondary_is_tag)
{
	if (primary_is_tag) {
		primary_is_tag = {
			count: 1,
			tag: primary
		}
	} else {
		primary_is_tag = {
			count: 1,
			item: primary
		}
	}
	
	if (secondary_is_tag) {
		secondary_is_tag = {
			count: 1,
			tag: secondary
		}
	} else {
		secondary_is_tag = {
			count: 1,
			item: secondary
		}
	}
	
	event.custom({
		controllerId: 'smithing',
		structureId: 'smithing_machine',
		ticks: 10,
		type: 'masterfulmachinery:machine_process',
		
		inputs: [
			{
				type: 'masterfulmachinery:items',
				data: primary_is_tag
			},
			{
				type: 'masterfulmachinery:items',
				data: secondary_is_tag
			}
		],
		
		outputs: [
			{
				type: 'masterfulmachinery:items',
				data: {item: resultant, count: 1}
			}
		]
	})
}

onEvent('recipes', (event) => {
	//yoinked from ragnamod VI
	event.custom({
		controllerId: 'smithing',
		id: 'smithing_machine',
		name: 'Smithing Machine',
		type: 'masterfulmachinery:machine_structure',
		
		layout: [
			[')'],
			['C'],
			['*']
		],
		
		legend: {
			')': {'block': 'masterfulmachinery:smithing_smithingitem_port_items_output'},
			'*': {'block': 'masterfulmachinery:smithing_smithingitem_port_items_input'}
		}
	})
	
	//shaped recipes
	//smithing machine block
	event.shaped('16x kubejs:smithing_machine_block', ['SS', 'SS'], {S: 'minecraft:smithing_table'})
	
	//smithing input
	event.shaped('masterfulmachinery:smithing_smithingitem_port_items_input', [
		'C',
		'M',
		'P'
	], {
		C: '#forge:chests/wooden',
		M: 'kubejs:smithing_machine_block',
		P: 'quark:pipe'
	})
	
	//smithing output
	event.shaped('masterfulmachinery:smithing_smithingitem_port_items_output', [
		'P',
		'M',
		'C'
	], {
		C: '#forge:chests/wooden',
		M: 'kubejs:smithing_machine_block',
		P: 'quark:pipe'
	})
	
	//smithing controller
	event.shaped('masterfulmachinery:smithing_controller', [
		'RPR',
		'CSC',
		'MPM'
	], {
		C: 'appliedenergistics2:calculation_processor',
		M: 'kubejs:smithing_machine_block',
		P: 'quark:pipe',
		R: '#forge:storage_blocks/redstone',
		S: 'minecraft:smithing_table'
	})
	
	//smithing recipes
	add_smithing_recipe(event, 'forge:shulker_boxes', 'minecraft:netherite_ingot', 'supplementaries:safe', true)
})