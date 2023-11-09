enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const PlayerMan = SpriteKind.create()
    export const key = SpriteKind.create()
    export const specialEnemy = SpriteKind.create()
    export const specialEnemy1 = SpriteKind.create()
    export const specialEnemy2 = SpriteKind.create()
    export const specialEnemy3 = SpriteKind.create()
    export const specialEnemy4 = SpriteKind.create()
    export const specialEnemy5 = SpriteKind.create()
    export const boss = SpriteKind.create()
}
namespace StatusBarKind {
    export const keys = StatusBarKind.create()
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false, effects.splatter)
})
scene.onOverlapTile(SpriteKind.PlayerMan, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false, effects.melt)
})
function create_enemy () {
    listImg = [assets.image`myImage4`, assets.image`myImage6`, assets.image`myImage5`]
    index = randint(0, listImg.length - 1)
    myImage = sprites.create(listImg[index], SpriteKind.Enemy)
    enemySprite.setBounceOnWall(true)
    tiles.placeOnRandomTile(PlayerMan, sprites.castle.tileGrass2)
}
sprites.onOverlap(SpriteKind.boss, SpriteKind.PlayerMan, function (sprite, otherSprite) {
	
})
scene.onOverlapTile(SpriteKind.PlayerMan, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.specialEnemy3, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -2
})
sprites.onOverlap(SpriteKind.specialEnemy1, SpriteKind.Player, function (sprite, otherSprite) {
    if (statusbar2.value == 6) {
        tiles.placeOnRandomTile(PlayerMan, sprites.castle.tileGrass2)
        statusbar.value += -7
    }
    if (statusbar2.value == 5) {
        tiles.placeOnRandomTile(PlayerMan, sprites.builtin.oceanSand6)
        statusbar.value += -7
    }
    if (statusbar2.value == 4) {
        tiles.placeOnRandomTile(PlayerMan, sprites.dungeon.darkGroundCenter)
        statusbar.value += -7
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.specialEnemy, function (sprite, otherSprite) {
    statusbar.value += -0.25
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -1
})
let specialEnemy5: Sprite = null
let specialEnemy4: Sprite = null
let myImage: Sprite = null
let index = 0
let listImg: Image[] = []
let statusbar2: StatusBarSprite = null
let enemySprite: Sprite = null
let statusbar: StatusBarSprite = null
let PlayerMan: Sprite = null
PlayerMan = sprites.create(assets.image`myImage2`, SpriteKind.Player)
scene.setBackgroundColor(0)
PlayerMan.setStayInScreen(true)
controller.moveSprite(PlayerMan, 100, 100)
scene.cameraFollowSprite(PlayerMan)
tiles.setCurrentTilemap(tilemap`level1`)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(PlayerMan)
statusbar.setLabel("HP")
statusbar.setColor(5, 2)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar.max = 500
statusbar.value = 500
enemySprite = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
let enemySprite1 = sprites.create(assets.image`myImage6`, SpriteKind.Enemy)
let enemySprite2 = sprites.create(assets.image`myImage5`, SpriteKind.Enemy)
let key = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 4 . . . . . . . . . . . . . . 
    4 5 4 . . . . . . . . . . . . . 
    4 5 5 4 . . . . . . . . . . . . 
    4 5 4 5 4 . . . . . . . . . . . 
    4 5 4 4 5 4 4 4 4 4 4 4 4 4 4 . 
    4 5 4 . 4 5 5 5 5 5 5 5 5 5 5 4 
    4 5 4 4 5 4 4 4 4 4 5 4 4 5 4 . 
    4 5 4 5 4 . . . . 4 5 4 4 5 4 . 
    4 5 5 4 . . . . . . 4 . 4 5 4 . 
    4 5 4 . . . . . . . . . . 4 . . 
    . 4 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.key)
let key1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . a . . . . . . . . . . . . . . 
    . a a . . . . . . . . . . . . . 
    . a b a . . . . . . . . . . . . 
    . a b b a . . . . . . . . . . . 
    . a b c b a . . . . . . . . . . 
    . a b c b a a a a a a a a a a . 
    . a b c c b b b b b b b b b a . 
    . a b c b a a a a a a a a a a . 
    . a b b a a . . . a a . a a . . 
    . a b a . . . . . a a . a a . . 
    . a a . . . . . . a a . . . . . 
    . a . . . . . . . a a . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.key)
tiles.placeOnRandomTile(key, assets.tile`myTile0`)
tiles.placeOnRandomTile(key1, assets.tile`myTile2`)
enemySprite.setPosition(108, 33)
tiles.placeOnRandomTile(PlayerMan, sprites.castle.tileGrass2)
tiles.placeOnRandomTile(enemySprite, sprites.castle.tileGrass2)
tiles.placeOnRandomTile(enemySprite1, sprites.castle.tileGrass1)
tiles.placeOnRandomTile(enemySprite2, sprites.castle.tileGrass3)
controller.combos.setTimeout(15)
scaling.scaleByPixels(enemySprite, 5, ScaleDirection.Uniformly, ScaleAnchor.Middle)
info.setScore(0)
statusbar.setBarBorder(1, 9)
statusbar2 = statusbars.create(20, 4, StatusBarKind.keys)
statusbar2.attachToSprite(PlayerMan, -25, 3)
statusbar2.setColor(15, 5)
statusbar2.setLabel("keys")
statusbar2.setBarBorder(1, 13)
statusbar2.max = 8
statusbar2.value = 8
enemySprite.follow(PlayerMan, 80)
enemySprite1.follow(PlayerMan, 80)
enemySprite2.follow(PlayerMan, 80)
let specialEnemy = sprites.create(assets.image`spinnyEnemy`, SpriteKind.specialEnemy)
specialEnemy.follow(PlayerMan, 150)
let specialEnemy1 = sprites.create(assets.image`DrugAddict`, SpriteKind.specialEnemy1)
specialEnemy1.follow(PlayerMan, 90)
let specialEnemy3 = sprites.create(assets.image`flameEyeEnemy`, SpriteKind.specialEnemy3)
specialEnemy3.follow(PlayerMan, 60)
tiles.placeOnRandomTile(specialEnemy, sprites.castle.tileGrass1)
tiles.placeOnRandomTile(specialEnemy1, sprites.castle.tileGrass3)
tiles.placeOnRandomTile(specialEnemy3, sprites.castle.tileGrass2)
let key2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 . . . . . . . . . 
    . 7 f f f f f 7 . . . . . . . . 
    . 7 f . . . . 7 7 7 7 7 7 7 7 . 
    . 7 f . . . . 7 f f 7 f f 7 f . 
    . 7 f . . . . 7 f . 7 f . 7 f . 
    . 7 f . . . . 7 f . 7 f . f . . 
    . f 7 7 7 7 7 f . . f . . . . . 
    . . f f f f f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.key)
tiles.placeOnRandomTile(key2, assets.tile`floorDarkDiamond0`)
let key3 = sprites.create(assets.image`key4`, SpriteKind.key)
tiles.placeOnRandomTile(key3, assets.tile`lavaportal`)
let key4 = sprites.create(assets.image`myImage9`, SpriteKind.key)
tiles.placeOnRandomTile(key4, sprites.swamp.swampTile19)
let key5 = sprites.create(assets.image`scary face to last boos`, SpriteKind.key)
let boss = sprites.create(assets.image`myImage7`, SpriteKind.boss)
tiles.placeOnRandomTile(boss, sprites.dungeon.stairLadder)
let key6 = sprites.create(img`
    . . . . . 5 f 4 . . . . . . . . 
    2 2 e e 5 5 4 4 e e 5 4 2 2 . . 
    e e 4 . 5 5 4 3 e 4 5 4 e 2 2 . 
    2 3 4 4 5 4 5 9 4 5 5 3 e 4 5 5 
    e 5 4 3 5 f 5 4 e 5 5 9 4 4 5 5 
    4 5 9 9 5 9 5 9 9 5 5 4 . 5 3 5 
    4 5 9 4 5 4 5 3 5 3 5 e . 5 3 5 
    e 5 3 4 5 2 5 4 5 4 5 9 4 5 3 5 
    e 5 2 4 5 2 5 4 5 4 5 e 5 9 4 5 
    e 5 5 4 5 e 5 4 5 9 5 4 5 4 9 5 
    9 5 5 9 5 9 5 4 5 2 5 4 5 e 3 5 
    9 5 5 9 5 4 5 4 5 3 5 3 5 3 2 5 
    e 5 5 3 5 4 5 5 9 9 4 5 5 3 4 5 
    9 5 e 5 5 4 5 5 9 4 4 5 5 9 4 5 
    e 9 5 9 2 e 5 5 e 4 3 5 5 3 4 5 
    e 3 2 3 e 2 2 2 2 3 2 5 . . . . 
    `, SpriteKind.key)
let key7 = sprites.create(img`
    . . . . . 5 f 4 . . d d . . . . 
    2 1 e d 1 1 4 1 e e d d 2 2 . . 
    e 1 4 d 1 1 1 1 e 4 d d e 2 2 . 
    2 1 1 d 1 1 1 9 4 1 d d e 4 5 5 
    e 1 1 d d 1 5 4 e 1 d d 4 4 5 5 
    4 5 1 d d 1 5 9 1 1 d 4 d 1 3 5 
    4 d 1 d d 1 5 1 1 d 1 e d 1 3 5 
    e d 1 d d 1 1 1 5 d 1 1 d 5 3 1 
    e 1 d 1 d d 1 1 5 d 1 e d 9 1 d 
    1 1 d 4 d d 1 4 1 d 5 4 d 1 1 d 
    9 5 1 d d 1 d 4 1 d 5 1 d e 1 d 
    9 5 1 d d 1 d 1 1 d 1 1 d 1 2 d 
    e 5 5 d d 4 d 1 1 d 1 1 d 1 1 d 
    9 5 e 1 d 4 1 d 9 d 1 5 1 d 4 d 
    e 9 5 1 d e 1 d e d 1 5 1 d d 1 
    e 3 2 3 d 2 2 2 d d 2 5 1 . d 1 
    `, SpriteKind.key)
animation.runImageAnimation(
boss,
assets.animation`baby getting killed`,
200,
true
)
game.onUpdateInterval(5000, function () {
    tiles.placeOnRandomTile(specialEnemy, sprites.castle.tileGrass3)
})
game.onUpdateInterval(5000, function () {
    tiles.placeOnRandomTile(specialEnemy4, sprites.dungeon.floorLight1)
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
forever(function () {
    if (statusbar2.value == 0) {
        game.over(true, effects.smiles)
    }
})
forever(function () {
    if (statusbar2.value > 2) {
        music.play(music.createSong(assets.song`song2 first got del`), music.PlaybackMode.UntilDone)
    }
})
forever(function () {
    if (statusbar2.value < 2) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`Creapy music`), music.PlaybackMode.UntilDone)
    }
})
forever(function () {
	
})
forever(function () {
    if (key.overlapsWith(PlayerMan)) {
        if (statusbar2.value == 8) {
            statusbar2.value += -1
            tiles.placeOnRandomTile(specialEnemy1, sprites.builtin.oceanSand2)
            tiles.placeOnRandomTile(specialEnemy3, sprites.builtin.oceanSand6)
            tiles.placeOnRandomTile(enemySprite, sprites.builtin.oceanSand2)
            tiles.placeOnRandomTile(enemySprite1, sprites.builtin.oceanSand2)
            tiles.placeOnRandomTile(enemySprite2, sprites.builtin.oceanSand2)
            scene.cameraShake(4, 500)
        }
    }
    if (key1.overlapsWith(PlayerMan)) {
        if (statusbar2.value == 7) {
            statusbar2.value += -1
            specialEnemy4 = sprites.create(assets.image`spinnyEnemyDungeon`, SpriteKind.specialEnemy4)
            tiles.placeOnRandomTile(PlayerMan, assets.tile`startOFdugeon`)
            tiles.placeOnRandomTile(specialEnemy4, sprites.dungeon.floorDark0)
            specialEnemy4.follow(PlayerMan, 150)
            specialEnemy5 = sprites.create(img`
                . . . . . . a a . 7 7 . . . . . 
                . . . . a a 7 7 7 7 7 7 7 . . . 
                . . . a 7 7 7 7 7 7 7 7 . . . . 
                . . a 7 9 c 7 7 a a a 7 7 . . . 
                . a 7 9 9 a 7 . . 9 . a a 7 . . 
                . 7 9 9 a a 7 c a a a . 3 7 . . 
                3 7 . 9 a 7 7 a a c a 9 3 a 7 . 
                3 7 . 9 a a 7 3 . 7 a 9 c 7 7 . 
                3 7 c . 9 a 7 7 7 7 a 9 c 7 a . 
                3 7 c . . c a a a a . c 9 7 . . 
                . 7 a c . . . . . . c c 7 a . . 
                . . 7 a c . . . . c . 7 7 . . . 
                . . 7 7 a c c c c 7 7 a . . . . 
                . . . 7 7 a a 7 7 a 3 . . . . . 
                . . . . . 7 7 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.specialEnemy5)
            characterAnimations.setCharacterAnimationsEnabled(specialEnemy5, true)
            tiles.placeOnRandomTile(specialEnemy5, sprites.dungeon.floorLight5)
            characterAnimations.loopFrames(
            specialEnemy5,
            assets.animation`rectangleEnemy`,
            100,
            characterAnimations.rule(Predicate.NotMoving, Predicate.Moving)
            )
            specialEnemy5.follow(PlayerMan, 80)
            scene.cameraShake(10, 1000)
        }
    }
    if (key2.overlapsWith(PlayerMan)) {
        if (statusbar2.value == 6) {
            statusbar2.value += -1
            scene.cameraShake(8, 750)
        }
    }
    if (key3.overlapsWith(PlayerMan)) {
        if (statusbar2.value == 5) {
            statusbar2.value += -1
            scene.cameraShake(10, 1000)
            tiles.placeOnRandomTile(PlayerMan, assets.tile`myTile4`)
        }
    }
    if (key4.overlapsWith(PlayerMan)) {
        if (statusbar2.value == 4) {
            statusbar2.value += -1
            scene.cameraShake(10, 1000)
            tiles.setCurrentTilemap(tilemap`level2`)
            scene.setBackgroundColor(15)
            tiles.placeOnTile(PlayerMan, tiles.getTileLocation(3, 198))
            tiles.placeOnRandomTile(key5, assets.tile`transparency16`)
        }
    }
    if (key5.overlapsWith(PlayerMan)) {
        if (statusbar2.value == 3) {
            statusbar2.value += -1
            scene.cameraShake(10, 1000)
            tiles.setCurrentTilemap(tilemap`baby room`)
            tiles.placeOnRandomTile(boss, sprites.dungeon.stairLadder)
            tiles.placeOnRandomTile(key6, sprites.builtin.crowd4)
        }
    }
    if (key6.overlapsWith(PlayerMan)) {
        if (statusbar2.value == 2) {
            tiles.setCurrentTilemap(tilemap`level10`)
            tiles.placeOnRandomTile(PlayerMan, sprites.castle.shrub)
            tiles.placeOnRandomTile(key7, sprites.dungeon.chestOpen)
            pause(5000)
            game.splash("You happy now?")
            pause(1000)
            game.splash("Was it worth it?")
            pause(1000)
            game.splash("You killed a baby?")
            pause(1000)
            game.splash("good")
            pause(500)
            game.splash("for")
            pause(500)
            game.splash("YOU!")
            pause(1000)
            statusbar2.value += -1
        }
    }
    if (key7.overlapsWith(PlayerMan)) {
        if (statusbar2.value == 1) {
            statusbar2.value += -1
            scene.cameraShake(30, 2000)
        }
    }
})
