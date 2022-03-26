// priority: 0

console.info('client_scripts/hidden.js loaded')

onEvent('jei.hide.items', event => {
	event.hide('extendedcrafting:handheld_table')
})