// priority: 0
onEvent('jei.hide.items', event => {
	event.hide('extendedcrafting:handheld_table')
	event.hide(/^appliedenergistics2:facade/)
	event.hide(/^compactores:/)
})