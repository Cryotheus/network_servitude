function addCastingBasinRecipeFromItem(event, cast, cast_consumed, fluid, volume, result, cooling_time){
	event.custom({		
		type: "tconstruct:casting_basin",
		cast: {item: cast},
		cast_consumed: cast_consumed,
		cooling_time: cooling_time,
		fluid: {
			tag: fluid,
			amount: volume
		},
		result: result,	  
	})
}

onEvent("recipes", event => {
	//additions
	//shaped
	event.shaped("tconstruct:crafting_station", ["P", "C"], {
		C: "#forge:workbench",
		P: "tconstruct:pattern"
	})
})