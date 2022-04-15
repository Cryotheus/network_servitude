onEvent("recipes", event => {
	//additions
	//casting_basin

	//shaped
	event.shaped("tconstruct:crafting_station", ["P", "C"], {
		C: "#forge:workbench",
		P: "tconstruct:pattern"
	})
})

function addCastingBasinRecipeFromItem(event, cast, fluid, fluidAmount, result, cooling_time){
	event.custom({		
		type: "tconstruct:casting_basin",
		cast: {item: cast},
		cast_consumed: true,
		fluid: {
			tag: "tconstruct:molten_clay",
			amount: 500
		},
		result: "tconstruct:seared_fancy_bricks",
		cooling_time: 90		  
	})
}