// priority: 0
extendedcrafting_tiers = [
	'basic',
	'advanced',
	'elite',
	'ultimate'
]

onEvent('jei.hide.items', event => {
	//mods to hide everything from
	event.hide(/^compactores:/)
	
	//appliedenergistics2
	event.hide(/^appliedenergistics2:facade/)
	
	//botania
	//disabled
	event.hide('botania:petal_apothecary/orechid')
	event.hide('botania:petal_apothecary/orechid_ignem')
	
	//extendedcrafting
	event.hide('extendedcrafting:handheld_table')
	event.hide(/^extendedcrafting:advanced/)
	event.hide(/^extendedcrafting:basic/)
	event.hide(/^extendedcrafting:elite/)
	
	extendedcrafting_tiers.forEach(tier => {
		event.hide('extendedcrafting:' + tier + '_catalyst')
		event.hide('extendedcrafting:' + tier + '_component')
	})
})