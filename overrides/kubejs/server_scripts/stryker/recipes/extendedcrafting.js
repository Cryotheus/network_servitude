catalysts = [
	'advanced',
	'basic',
	'crystaltine',
	'elite',
	'ender',
	'enhanced_ender',
	'redstone',
	'ultimate',
	'the_ultimate'
]

components = [
	'advanced',
	'basic',
	'elite',
	'ender',
	'enhanced_ender',
	'ultimate',
	'the_ultimate'
]

tables = [
	'basic',
	'advanced',
	'elite'
]

onEvent('recipes', event => {
	//removals
	event.remove({id: 'extendedcrafting:ultimate_table'})
	
	catalysts.forEach(tier => {event.remove({id: 'extendedcrafting:' + tier + '_catalyst'})})
	components.forEach(tier => {event.remove({id: 'extendedcrafting:' + tier + '_component'})})
	
	tables.forEach(tier => {
		event.remove({id: 'extendedcrafting:' + tier + '_table'})
		event.remove({id: 'extendedcrafting:' + tier + '_auto_table'})
	})
	
	//shaped
	event.shaped('extendedcrafting:ultimate_table', [
		'SES',
		'LBL',
		'P P'
	], {
		B: Item.of('tconstruct:part_builder', '{texture:"forbidden_arcanus:mysterywood_planks"}'),
		E: '#forge:gems/emerald',
		L: 'forbidden_arcanus:mysterywood_log',
		P: 'extendedcrafting:pedestal',
		S: '#forge:ingots/steel'
	})
})