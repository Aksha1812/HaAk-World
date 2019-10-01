import utils from "node_modules/decentraland-ecs-utils/index"
import {sample} from "sample1"
sample()
const gltfShape_7 = new GLTFShape('models/FenceSticksLarge_01/FenceSticksLarge_01.glb')
const fenceSticksLarge_00 = new Entity()
//fenceSticksLarge_01.setParent(scene)
fenceSticksLarge_00.addComponentOrReplace(gltfShape_7)
const transform_87f0 = new Transform({
  position: new Vector3(12.5, 0, 25.5),
  rotation: Quaternion.Euler(0, 180, 0),
  scale: new Vector3(1, 2, 0.8)
})
fenceSticksLarge_00.addComponentOrReplace(transform_87f0)
engine.addEntity(fenceSticksLarge_00)
const cube_01 = new Entity()
 //floorSquare_01_47.setParent(scene)
const gltfShape_cube1 = new GLTFShape('models/archive/cutcube1.gltf')
cube_01.addComponentOrReplace(gltfShape_cube1)
const transform_cube1 = new Transform({
  position: new Vector3(23.8, 2, 44),
  rotation: Quaternion.Euler(0,0,90),
  scale: new Vector3(0.4875, 0.4875, 0.4875)
})
cube_01.addComponentOrReplace(transform_cube1)
engine.addEntity(cube_01)

const cube_02 = new Entity()
  //floorSquare_01_47.setParent(scene)
cube_02.addComponentOrReplace(gltfShape_cube1)
const transform_cube2 = new Transform({
position: new Vector3(22.8, 2, 44),
rotation: Quaternion.Euler(180,0,90),
scale: new Vector3(0.4875, 0.4875, 0.4875)
})
cube_02.addComponentOrReplace(transform_cube2)
engine.addEntity(cube_02)

const cube_03 = new Entity()
  //floorSquare_01_47.setParent(scene)
cube_03.addComponentOrReplace(gltfShape_cube1)
const transform_cube3 = new Transform({
   position: new Vector3(21.8, 2, 44),
   rotation: Quaternion.Euler(270,0,90),
   scale: new Vector3(0.4875, 0.4875, 0.4875)
 })
cube_03.addComponentOrReplace(transform_cube3)
engine.addEntity(cube_03)
var startRot = Quaternion.Euler(0,0,90)
var endRot1 = Quaternion.Euler(90 ,0,90)
var endRot2 = Quaternion.Euler(180 ,0,90)
var endRot3 = Quaternion.Euler(270 ,0,90)
var counter:number = 0
cube_01.addComponent(new OnClick(e=>{
if(counter == 0)
{
  cube_01.addComponent(new utils.RotateTransformComponent(startRot,endRot1,1))
  counter++
}
if(counter == 1)
{
  cube_01.addComponent(new utils.RotateTransformComponent(endRot1,endRot2,1))
  counter++
}
if(counter == 2)
{
  cube_01.addComponent(new utils.RotateTransformComponent(endRot2,endRot3,1))
  counter++
}
if(counter == 3)
{
  cube_01.addComponent(new utils.RotateTransformComponent(endRot3,startRot,1))
  counter = 0  
}
}))


var counter1:number = 0
cube_02.addComponent(new OnClick(e=>{
if(counter1 == 0)
{
  cube_02.addComponent(new utils.RotateTransformComponent(endRot2,endRot3,1))
  counter1++
}
if(counter1 == 1)
{
  cube_02.addComponent(new utils.RotateTransformComponent(endRot3,startRot,1))
  counter1++
}
if(counter1 == 2)
{
  cube_02.addComponent(new utils.RotateTransformComponent(startRot,endRot1,1))
  counter1++
}
if(counter1 == 3)
{
  cube_02.addComponent(new utils.RotateTransformComponent(endRot1,endRot2,1))
  counter1 = 0
}
  }))

  var counter2:number = 0
cube_03.addComponent(new OnClick(e=>{
if(counter2 == 0)
{
  cube_03.addComponent(new utils.RotateTransformComponent(endRot3,startRot,1))
  counter2++
}
if(counter2 == 1)
{
  cube_03.addComponent(new utils.RotateTransformComponent(startRot,endRot1,1))
  counter2++
}
if(counter2 == 2)
{
  cube_03.addComponent(new utils.RotateTransformComponent(endRot1,endRot2,1))
  counter2++
}
if(counter2 == 3)
{
  cube_03.addComponent(new utils.RotateTransformComponent(endRot2,endRot3,1))
  counter2 = 0
}
  }))

  const dummy1 = new Entity()
  engine.addEntity(dummy1)

const ring = new Entity()

let box0 = new BoxShape()
box0.withCollisions = false
ring.addComponent(box0)
const ringTransform = new Transform({
  scale : new Vector3(1.5,4,1.5),
  position : new Vector3(11.656604766845703,2,44.67998504638672)
})
ring.addComponent(ringTransform)
let box123 = new Material
box123.albedoColor = new Color4(5,0,0,0.01)
box123.hasAlpha = true
ring.addComponent(box123)

let ringpos2 = new Vector3(11.656604766845703,2,44.67998504638672)


export class removeCubes implements ISystem{
  update(){
      if(counter2 ==2 && counter1 == 1 && counter ==2){
        const dummy1 = new Entity()
        engine.addEntity(dummy1)
        dummy1.addComponent(new utils.Delay(1000,()=>{
        engine.removeEntity(cube_02)
        engine.removeEntity(cube_03)
        engine.removeEntity(cube_01)
        engine.addEntity(pathbox1)
        engine.addEntity(pathbox2)
        engine.addEntity(pathbox3)
        engine.addEntity(pathbox4)
        engine.addEntity(pathbox5)
        engine.addEntity(pathbox6)
        engine.addEntity(pathbox7)
        engine.addEntity(ring)

        engine.removeEntity(fenceSticksLarge_00)
  }))
  if(distance(userPosition,ringpos2)<1)
  engine.removeEntity(ring)
        

      }
}
}
engine.addSystem(new removeCubes())


const pathbox1 = new Entity()
pathbox1.addComponent(new BoxShape())
const green = new Material()
const transform_pathbox1 = new Transform({
  position: new Vector3(21.8, 2.28, 44.35),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(0.5, 0.42, 0.3)
})
green.albedoColor = Color3.Green()
pathbox1.addComponent(green)
pathbox1.addComponentOrReplace(transform_pathbox1)



const pathbox2 = new Entity()
pathbox2.addComponent(new BoxShape())
const red = new Material()
const transform_pathbox2 = new Transform({
  position: new Vector3(21.8, 1.79, 44.35),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(0.5, 0.56, 0.3)
})
red.albedoColor = Color3.Red()
pathbox2.addComponent(red)
pathbox2.addComponentOrReplace(transform_pathbox2)


const pathbox3 = new Entity()
pathbox3.addComponent(new BoxShape())
const transform_pathbox3 = new Transform({
  position: new Vector3(22.8, 2.42, 44),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(0.5, 0.14, 0.3)
})
pathbox3.addComponent(green)
pathbox3.addComponentOrReplace(transform_pathbox3)


const pathbox4 = new Entity()
pathbox4.addComponent(new BoxShape())
const transform_pathbox4 = new Transform({
  position: new Vector3(22.8, 2.21, 44),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(0.5, 0.28, 0.3)
})
pathbox4.addComponent(red)
pathbox4.addComponentOrReplace(transform_pathbox4)


const pathbox5 = new Entity()
 pathbox5.addComponent(new BoxShape())
const transform_pathbox5 = new Transform({
   position: new Vector3(22.8, 1.79, 44),
  rotation: Quaternion.Euler(0,0,0),
  scale: new Vector3(0.5, 0.56, 0.3)
})
  pathbox5.addComponent(green)
  pathbox5.addComponentOrReplace(transform_pathbox5)

  const pathbox6 = new Entity()
  pathbox6.addComponent(new BoxShape())
  const transform_pathbox6 = new Transform({
    position: new Vector3(23.8, 2.21, 43.65),
    rotation: Quaternion.Euler(0,0,0),
    scale: new Vector3(0.5, 0.56, 0.3)
  })
  pathbox6.addComponent(green)
  pathbox6.addComponentOrReplace(transform_pathbox6)
  

  const pathbox7 = new Entity()
  pathbox7.addComponent(new BoxShape())
  const transform_pathbox7 = new Transform({
    position: new Vector3(23.8, 1.72, 43.65),
    rotation: Quaternion.Euler(0,0,0),
    scale: new Vector3(0.5, 0.42, 0.3)
  })
pathbox7.addComponent(red)
pathbox7.addComponentOrReplace(transform_pathbox7)

//-------------------------------------------HealthUI----------------------------------
export var health:number = 200
var userPosition:Vector3 = Vector3.Zero()


const canvas = new UICanvas()
const hp = new UIText(canvas)
hp.value = "Health:" + health
hp.fontSize = 30
hp.fontWeight = 'bold'
hp.color = Color4.Green();
hp.hAlign = 'right'
hp.vAlign = 'top' 
hp.positionX = -60;


const userCamera = Camera.instance

class CameraTrackSystem {
  update() {
    userPosition = userCamera.position
  }
}
engine.addSystem(new CameraTrackSystem())

var flag: number = 1


export class updateHealth implements ISystem{
  update(){
    let transform1 = monster1.getComponent(Transform)
    let transform2 = laser1.getComponent(Transform)
    let dist1 = distance(userPosition,bcmc)
    let dist2 = distance(userPosition,bcmc2)
    let dist3 = distance(userPosition,bcmc3)
    let dist4 = distance(userPosition,bcmc4)
    let dist5 = distance(userPosition,bcmc5)
    let dist6 = distance(userPosition,bcmc6)
    let dist7 = distance(userPosition,bcmc7)
    let dist8 = distance(userPosition,bcmc8)
    let dist9 = distance(userPosition,bcmc9)
    let dist10 = distance(userPosition,transform1.position)

    let dist11 = Math.abs(userPosition.x - transform2.position.x)
    
   
    if(((dist1 < 4 || dist2<4 || dist3<4 || dist4<4 || dist5<4 || dist6<4 || dist7<4 || dist8<4 || dist9<4 || dist10<1) && flag==1 && userPosition.y < 2) || ((dist11 <= 0.5 && flag==1 && userPosition.y< 2 && userPosition.z>26 && userPosition.z<34)))
     {
       if(health>0)
       {
         health = health - 10
         flag = 0
         const dummy = new Entity()
         engine.addEntity(dummy)
         dummy.addComponent(new utils.Delay(2000, ()=>{flag = 1}))
        }
       if(health == 0)
       health = 0
     }
      hp.value = "Health:" + health
      if(health <= 20)
      hp.color = Color4.Red()
    }
  }
engine.addSystem(new updateHealth())

function distance(pos1: Vector3, pos2: Vector3): number {
  const a = pos1.x - pos2.x
  const b = pos1.z - pos2.z
  return a * a + b * b
}
//---------------------------------------Bla Bla---------------------------------
const bcmc = new Vector3(18.5, 0, 31.5)
const bcmc2 = new Vector3(18.5, 0, 27.5)
const bcmc3 = new Vector3(15, 0, 23)
const bcmc4 = new Vector3(15, 0, 19)
const bcmc5 = new Vector3(15, 0, 15)
const bcmc6 = new Vector3(15, 0, 11)
const bcmc7 = new Vector3(23, 0, 19.5)
const bcmc8 = new Vector3(23, 0, 15.5)
const bcmc9 = new Vector3(23, 0, 11.5)



//-------------------------------------------Partition 2 Part 1 --------


const point11 = new Vector3(27, 0, 7)
const point21 = new Vector3(27, 0, 3.5)
const point31 = new Vector3(42.5,0,3.5)
const point41 = new Vector3(42.5,0,8)
const point51 = new Vector3(31,0,8)
const point61 = new Vector3(31,0,11.5)
const point71 = new Vector3(27,0,11.5)
const point81 = new Vector3(27,0,16)
const point91 = new Vector3(42,0,16)
let myPath1 = [point11, point21,point31,point41,point51,point61,point71,point81,point91]



const monster1 = new Entity()
monster1.addComponent(new GLTFShape('models/archive3/tinker1.glb'))
monster1.addComponent(new Transform({
  position : new Vector3(27,0,7),
  scale : new Vector3(1,1,1),
  rotation: Quaternion.Euler(0,0,0)
}))
engine.addEntity(monster1)


// export class GhostPath implements ISystem{
//   update()
//   {
//       monster1.addComponent(new utils.FollowPathComponent(myPath1,12,()=>{
//         engine.removeEntity(monster1)
//       }))
//   }
// }
// engine.addSystem(new GhostPath())

//-------------------------------Sliding Door -------------------------

const doorL = new Entity()
doorL.addComponent(new Transform({
  position: new Vector3(24.8, 2, 4.35),
  scale: new Vector3(5.3, 4, 0.7),
  rotation: Quaternion.Euler(0,90,0)
}))
doorL.addComponent(new BoxShape())
engine.addEntity(doorL)
monster1.getComponent(GLTFShape).visible = false


const doorLTexture = new Texture("materials/door.jpg")
let doorLMaterial = new Material()
doorLMaterial.albedoTexture = doorLTexture
doorL.addComponent(doorLMaterial)


// Define open and closed positions for both doors
let doorLClosed =  new Vector3(24.8, 2, 4.35)
let doorLOpen = new Vector3(24.8, 2, 8)




//toggle behavior for door
doorL.addComponent(new utils.ToggleComponent(utils.ToggleState.Off, value =>{
	if (value == utils.ToggleState.On){
		doorL.addComponentOrReplace(
			new utils.MoveTransformComponent(
				doorLClosed,
				doorLOpen,
				1
			))
	}
	else{
		doorL.addComponentOrReplace(
			new utils.MoveTransformComponent(
				doorLOpen,
				doorLClosed,
				1
			))
	}
}))



// Set the click behavior for the door
doorL.addComponent(
  new OnClick(e => {
    doorL.getComponent(utils.ToggleComponent).toggle()
    dummy1.addComponentOrReplace(new utils.Delay(3000,()=>{
      monster1.getComponent(GLTFShape).visible = true
      const dummy2 = new Entity()
      engine.addEntity(dummy2)
      dummy2.addComponent(new utils.Delay(3000,()=>{
        engine.removeEntity(doorL)
        engine.removeEntity(runlife)
      }))
      monster1.addComponent(new utils.FollowPathComponent(myPath1,12,()=>{
      engine.removeEntity(monster1)}))
    }))

  })
)

const runlife = new Entity()
engine.addEntity(runlife)
runlife.addComponent(new BoxShape())
runlife.addComponent(new Transform({
  position: new Vector3(28.25,2,6),
  scale: new Vector3(1.5,1,0.01),
  rotation: Quaternion.Euler(0,-90,0)
}))

const runlifeTexture = new Texture("materials/run.png")
let runlifeMaterial = new Material()
runlifeMaterial.albedoTexture = runlifeTexture
runlife.addComponent(runlifeMaterial)



const lasermaterial = new Material()
lasermaterial.albedoColor = new Color3(5,0,0)

const box1 = new BoxShape()
box1.withCollisions = false


const laser1 = new Entity()
engine.addEntity(laser1)
laser1.addComponent(box1)
laser1.addComponent(new Transform({
  position: new Vector3(31,1,30),
  scale: new Vector3(0.02,0.02,8)
}))
laser1.addComponent(lasermaterial)


let laserPath0 = new Vector3(31,1,30)
let laserPath1 = new Vector3(37,1,30)

class LaserSystem implements ISystem{
  update(){
      laser1.addComponent(new utils.MoveTransformComponent(laserPath0,laserPath1,3,()=>{
        laser1.addComponent(new utils.MoveTransformComponent(laserPath1,laserPath0,3))
      }))
}
}
engine.addSystem(new LaserSystem())


//---------------------------------Axe --------------------------------------------

const mace1 = new Entity()
engine.addEntity(mace1)
mace1.addComponent(new GLTFShape("models/axe.glb"))
mace1.addComponent(new Transform({
  position: new Vector3(35,3.5,22.5),
  scale: new Vector3(1,1,1),
  rotation : Quaternion.Euler(-90,0,0)
}))

const mace2 = new Entity()
engine.addEntity(mace2)
mace2.addComponent(new GLTFShape("models/axe.glb"))
mace2.addComponent(new Transform({
  position: new Vector3(38,3.5,22.5),
  scale: new Vector3(1,1,1),
  rotation : Quaternion.Euler(-270,0,0)
}))

let macepath0 = Quaternion.Euler(-90,0,0)
let macepath1 = Quaternion.Euler(-270,0,0)

class maceSystem implements ISystem{
  update(){
    mace2.addComponent(new utils.RotateTransformComponent(macepath1,macepath0,2,()=>{
      mace2.addComponent(new utils.RotateTransformComponent(macepath0,macepath1,2))
    }))
      mace1.addComponent(new utils.RotateTransformComponent(macepath0,macepath1,2,()=>{
        mace1.addComponent(new utils.RotateTransformComponent(macepath1,macepath0,2))
      }))
      
}
}
engine.addSystem(new maceSystem())

var flag1:number = 1
export class maceHealth implements ISystem{
  update(){
    let transform = mace1.getComponent(Transform)
    let transform1 = mace2.getComponent(Transform)
    let dist = distance(transform.position, userPosition)
    let dist1 = distance(userPosition,transform1.position)
    
    if((dist < 1 || dist1 <1 ) && flag1 == 1 && userPosition.y < 4)
     {
       if(health>0)
       {
         health = health - 10
         flag1 = 0
         const dummy = new Entity()
         engine.addEntity(dummy)
         dummy.addComponent(new utils.Delay(2000, ()=>{flag1= 1}))
        }
       if(health == 0)
       health = 0
     }
      hp.value = "Health:" + health
      if(health <= 20)
      hp.color = new Color4(1,0,0,1)
    }
  }
engine.addSystem(new maceHealth())

class healthbc implements ISystem{
	update(){
		if(userPosition.y >=4)
			hp.visible = false
	}
}
engine.addSystem(new healthbc())




