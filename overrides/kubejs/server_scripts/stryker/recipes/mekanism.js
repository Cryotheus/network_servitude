onEvent('recipes', (event) => {
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