onEvent("recipes", event => {
	//additions
	//shaped
	event.shaped("tconstruct:crafting_station", ["P", "C"], {
		C: "#forge:workbench",
		P: "tconstruct:pattern"
	})
})