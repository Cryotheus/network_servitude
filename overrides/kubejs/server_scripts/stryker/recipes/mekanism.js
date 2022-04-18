function genCombiningRecipes(event, material){
	event.custom({
		type:"mekanism:combining",
		mainInput:{
			amount: 8,
			ingredient:{tag: "forge:dusts/" + material}
		},
		extraInput:{
			ingredient:{item: "kubejs:calcium_carbonate"}
		},
		output:{tag: "forge:chunks/" + material}
	})
}

onEvent('recipes', (event) => {
	//mekanism:combining
	for (mat of global.retags){
		event.remove({type: 'mekanism:combining', output: '#forge:ores/'+mat})
		
		if (!Ingredient.of('emendatusenigmatica:'+mat+'_dust').isInvalidRecipeIngredient()) {genCombiningRecipes(event, mat)}
	}
	
	//mekanism:compressing
	event.custom({
		type: "mekanism:compressing",
		itemInput: {item: "kubejs:stellaric_composite"},
		output: {item: "forbidden_arcanus:stellarite_piece"},
		gasInput: {
			amount: 1,
			gas: "mekanism:liquid_osmium"
		}
	})
	
	//mekanism:metallurgic_infusing
	event.custom({
		type: "mekanism:metallurgic_infusing",
		itemInput: {item: "appliedenergistics2:sky_dust"},
		output: {item: "kubejs:stellaric_composite"},
		infusionInput: {
			amount: 80,
			tag: "mekanism:refined_obsidian"
		}
	})
})
