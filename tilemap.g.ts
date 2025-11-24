// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level_1":
            case "level_1":return tiles.createTilemap(hex`100010000303030303030303030303030303030303120909090910010b010201010113030305040404040b0b01020404040b07030305040d0d040404040404020a0407030305040d0b0b0c02040204040a0407030305040d0b020a0c040a0104020407030305040404040c0a0a0a0104020407030315040f02040404040a0a0202040703030504040c0c0d0a040a0b02020407030305040404040d0a04040404040407030305040404040c02040a0a02020407030305040d0e0c0c010a0a0a020a0407030305041104041104040404040a0407030305070e05070105040404040a0414030306080e06080106111111080206080303030303030303030303030303030303`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 2 2 2 2 2 2 2 . 2 
2 . . . . . 2 2 2 2 . . . 2 . 2 
2 . . 2 2 . . . . . . 2 2 . . 2 
2 . . 2 2 2 2 2 . 2 . . 2 . . 2 
2 . . 2 2 2 2 2 . 2 2 . 2 . . 2 
2 . . . . . 2 2 2 2 2 . 2 . . 2 
2 . . 2 2 . . . . 2 2 2 2 . . 2 
2 . . . 2 2 2 2 . 2 2 2 2 . . 2 
2 . . . . . 2 2 . . . . . . . 2 
2 . . . . . 2 2 . 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . 2 . . 2 . . . . . 2 . . 2 
2 . . 2 . . 2 . . . . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,sprites.dungeon.greenOuterSouth2,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath2,sprites.dungeon.floorLight5,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorDark0,sprites.dungeon.floorDark3,sprites.dungeon.floorMixed,sprites.dungeon.floorDark4,sprites.castle.tilePath8,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.dungeon.stairLarge,sprites.builtin.forestTiles24], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
