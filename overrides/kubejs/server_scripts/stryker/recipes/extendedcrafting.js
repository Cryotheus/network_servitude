tiers_removed = [
	'basic',
	'advanced',
	'elite'
]

tiers = [
	'basic',
	'advanced',
	'elite',
	'ultimate'
]

onEvent('recipes', event => {
	//removals
	event.remove('extendedcrafting:ultimate_table')
	
	tiers.forEach(tier => {
		event.remove({id: 'extendedcrafting:' + tier + '_catalyst'})
		event.remove({id: 'extendedcrafting:' + tier + '_component'})
	})
	
	tiers_removed.forEach(tier => {
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