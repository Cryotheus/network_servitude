onEvent('recipes', (event) => {
    //mekanism:combining
    for(mat of global.retags){
        event.remove({type: 'mekanism:combining', output: '#forge:ores/'+mat})
        genCombiningRecipes(event, mat)
    }

    //mekanism:compressing
    event.custom({
        "type": "mekanism:compressing",
        "itemInput": {
            "item": "kubejs:stellaric_composite"
        },
        "gasInput": {
            "amount": 1,
            "gas": "mekanism:liquid_osmium"
        },
        "output": {
            "item": "forbidden_arcanus:stellarite_piece"
        }
    })

    //mekanism:metallurgic_infusing
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "itemInput": {
            "item": "appliedenergistics2:sky_dust"
        },
        "infusionInput": {
            "amount": 80,
            "tag": "mekanism:refined_obsidian"
        },
        "output": {
            "item": "kubejs:stellaric_composite"
        }
    })
})

function genCombiningRecipes(event, material){
    event.custom({
        "type":"mekanism:combining",
        "mainInput":{
            "amount": 8,
            "ingredient":{
                "tag": "forge:dusts/"+material
            }
        },
        "extraInput":{
            "ingredient":{
                "item": "kubejs:calcium_carbonate"
            }
        },
        "output":{
            "tag": "forge:chunks/"+material
        }
    })
}