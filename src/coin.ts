import utils from "../node_modules/decentraland-ecs-utils/index"

const coin1 = new Entity()
engine.addEntity(coin1)
coin1.addComponent(new GLTFShape('models/CHAHIN_COIN.gltf'))
coin1.addComponent(new Transform({
    position: new Vector3(11,0.1,10)
}))

const coin2 = new Entity()
engine.addEntity(coin2)
coin2.addComponent(new GLTFShape('models/CHAHIN_COIN.gltf'))
coin2.addComponent(new Transform({
    position: new Vector3(22,0.1,46)
}))


const coin3 = new Entity()
engine.addEntity(coin3)
coin3.addComponent(new GLTFShape('models/CHAHIN_COIN.gltf'))
coin3.addComponent(new Transform({
    position: new Vector3(27,0.1,6)
}))


const coin4 = new Entity()
engine.addEntity(coin4)
coin4.addComponent(new GLTFShape('models/CHAHIN_COIN.gltf'))
coin4.addComponent(new Transform({
    position: new Vector3(40,0.1,46)
}))


const coin5 = new Entity()
engine.addEntity(coin5)
coin5.addComponent(new GLTFShape('models/CHAHIN_COIN.gltf'))
coin5.addComponent(new Transform({
    position: new Vector3(27,0.1,25)
}))

const cointrunk = new Entity()
engine.addEntity(cointrunk)
cointrunk.addComponent(new GLTFShape('models/Trunk_02/Trunk_02.glb')
cointrunk.addComponent(new Transform({
	position : new Vector3(9.5,4,22)
	rotation : Quaternion.Euler(0,90,0)
	scale: new Vector3(0.3,0.3,0.3)
}))

export var mana:number = 0

const canvas = new UICanvas()
const coin = new UIText(canvas)
coin.value = "MANA:" + mana
coin.fontSize = 30
coin.fontWeight = 'bold'
coin.color = Color4.Blue();
coin.hAlign = 'left'
coin.vAlign = 'top' 
coin.positionX = 180;



export class collectcoin implements ISystem{
    update(){
        
        coin.value ="MANA:" + mana

    }
}

engine.addSystem(new collectcoin())


coin1.addComponent(new OnClick(()=>{
    engine.removeEntity(coin1)
    mana = mana + 2

}))

coin2.addComponent(new OnClick(()=>{
    engine.removeEntity(coin2)
    mana = mana + 2

}))

coin3.addComponent(new OnClick(()=>{
    engine.removeEntity(coin3)
    mana = mana + 2

}))

coin4.addComponent(new OnClick(()=>{
    engine.removeEntity(coin4)
    mana = mana + 2

}))

coin5.addComponent(new OnClick(()=>{
    engine.removeEntity(coin5)
    mana = mana + 2

}))

cointrunk.addComponent(new OnClick(()=>{
    engine.removeEntity(cointrunk)
    mana = mana + 100

}))



