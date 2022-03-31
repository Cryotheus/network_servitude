onEvent("recipes", event => {
	//deletions
	event.remove({id: "cyclic:crafting_stick"})
	
	//additions
	//shaped
	event.shaped("cyclic:crafting_stick", [" C", "S "], {
		C: "#forge:workbench",
		S: "#forge:rods/wooden"
	})
	
	event.shaped("cyclic:crafting_stick", [" C", "S "], {
		C: "#forge:workbenches",
		S: "#forge:rods/wooden"
	})

	createSolidifyingRecipe(event, "forge:gems", "thermal:resin", "druidcraft:amber")
})

function createSolidifyingRecipe(event, itemTagInput, fluidInput, output){
	event.custom({
		"type": "cyclic:solidifier",
		"inputTop": {
			"tag": itemTagInput
		},
		"mix": {
			"fluid": fluidInput,
			"count": 1000
		},
		"result": {
			"item": output,
			"count": 1
		}
	})
}