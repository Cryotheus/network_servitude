onEvent('recipes', event => {
	//broken recipe
	event.remove({id: 'farmersdelightintegrations:example'})
	
	//we have environmental tech for a reason
	event.remove({id: 'botania:petal_apothecary/orechid'})
	event.remove({id: 'botania:petal_apothecary/orechid_ignem'})
	
	//conflicting recipe
	event.remove({id: 'extendedcrafting:handheld_table'})
	
	//because we allow all gems
	event.remove({id: 'blue_skies:enchanting_table_compat'})
})