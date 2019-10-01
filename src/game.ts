import utils from "node_modules/decentraland-ecs-utils/index"
import {sample} from "sample1"
import {Carryable, CarryableSystem} from 'carryable';
import {secondfloor} from 'floor2'

const scene = new Entity()
sample();
secondfloor();

const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scene.addComponentOrReplace(transform)
engine.addEntity(scene)
//-------------------------------------------archway--------------------------------
const archWay_02 = new Entity()
archWay_02.setParent(scene)
const gltfShape_2 = new GLTFShape('models/ArchWay_02/ArchWay_02.glb')
archWay_02.addComponentOrReplace(gltfShape_2)
const transform_3 = new Transform({
  position: new Vector3(5.5, 0, 22),
  rotation: new Quaternion(0, -0.7071067811865476, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})

archWay_02.addComponentOrReplace(transform_3)
engine.addEntity(archWay_02)


//--------------------------------------------welcome mat-----------------------------
const wmat = new Entity()
engine.addEntity(wmat)
wmat.addComponentOrReplace(new BoxShape())
wmat.addComponentOrReplace(new Transform({
	position: new Vector3(7,0,22),
	scale: new Vector3(1.2,0.2,1.6)
}))
let startPos = new Vector3(7, 0, 22)
let endPos = new Vector3(7, 0, 24)
wmat.addComponent(
  new utils.ToggleComponent(utils.ToggleState.Off, value => {
    if (value == utils.ToggleState.On) {
      wmat.addComponentOrReplace(
        new utils.MoveTransformComponent(startPos, endPos, 1.5)
      )
    } 
    else {
      wmat.addComponentOrReplace(
        new utils.MoveTransformComponent(endPos, startPos, 1.5)
      )
    }
  })
)
wmat.addComponent(new OnClick(event=>{
  wmat.getComponent(utils.ToggleComponent).toggle()
}))
const wmatTexture = new Texture("materials/welcomemat.png")
let wmatMaterial = new Material()
wmatMaterial.albedoTexture = wmatTexture
wmat.addComponent(wmatMaterial)
//------------------------------------------key--------------------------------------
const key = new Entity()
key.setParent(scene)
const gltfShape_key = new GLTFShape('models/Key/key1.glb')
key.addComponentOrReplace(gltfShape_key)
const transform_key = new Transform({
  position: new Vector3(7, 0.045, 22),
  rotation: Quaternion.Euler(90, 0, 0),
  scale: new Vector3(0.1, 0.1, 0.1)
})
key.addComponentOrReplace(transform_key)
engine.addEntity(key)
// Add the Carryable Component to the box.
let carryable = new Carryable();
key.addComponent(carryable);

// Set up toggling of the carry state via clicking.
key.addComponent(new OnClick(() => {
  carryable.toggleCarry();
}));


// Create a CarryableSystem to update our Carryable object.
engine.addSystem(new CarryableSystem());
//-------------------------------------------fence----------------------------------
const fence_Iron_3M = new Entity()
fence_Iron_3M.setParent(scene)
const gltfShape_3 = new GLTFShape('models/Fence_Iron_3M/Fence_Iron_3M.glb')
fence_Iron_3M.addComponentOrReplace(gltfShape_3)
const transform_4 = new Transform({
  position: new Vector3(5.5, 0, 20),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fence_Iron_3M.addComponentOrReplace(transform_4)
engine.addEntity(fence_Iron_3M)

const fence_Iron_3M_2 = new Entity()
fence_Iron_3M_2.setParent(scene)
fence_Iron_3M_2.addComponentOrReplace(gltfShape_3)
const transform_5 = new Transform({
  position: new Vector3(5.5, 0, 24),
  rotation: new Quaternion(0, 0.7071067811865479, 0, 0.7071067811865479),
  scale: new Vector3(1, 1, 1)
})
fence_Iron_3M_2.addComponentOrReplace(transform_5)
engine.addEntity(fence_Iron_3M_2)

const fence_Iron_3M_3 = new Entity()
fence_Iron_3M_3.setParent(scene)
fence_Iron_3M_3.addComponentOrReplace(gltfShape_3)
const transform_6 = new Transform({
  position: new Vector3(5.5, 0, 30),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
fence_Iron_3M_3.addComponentOrReplace(transform_6)
engine.addEntity(fence_Iron_3M_3)

const fence_Iron_3M_4 = new Entity()
fence_Iron_3M_4.setParent(scene)
fence_Iron_3M_4.addComponentOrReplace(gltfShape_3)
const transform_7 = new Transform({
  position: new Vector3(5.5, 0, 14),
  rotation: new Quaternion(0, 0.7071067811865479, 0, 0.7071067811865479),
  scale: new Vector3(1, 1, 1)
})
fence_Iron_3M_4.addComponentOrReplace(transform_7)
engine.addEntity(fence_Iron_3M_4)

const fence1 = new Entity()
engine.addEntity(fence1)
fence1.addComponent(gltfShape_3)
fence1.addComponent(new Transform({
  position: new Vector3(5.5,0,14)
  rotation: Quaternion.Euler(0,180,0)
}))

const fence2 = new Entity()
engine.addEntity(fence2)
fence2.addComponent(gltfShape_3)
fence2.addComponent(new Transform({
  position: new Vector3(5.5,0,30)
  rotation: Quaternion.Euler(0,180,0)
}))
//-------------------------------------------door-----------------------------------
const door_01 = new Entity()
door_01.setParent(scene)
const gltfShape_4 = new GLTFShape('models/Door_01/Door_01.glb')
door_01.addComponentOrReplace(gltfShape_4)
const transform_8 = new Transform({
  position: new Vector3(8.5, 0, 22.85),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(1, 1, 1)
})
door_01.addComponentOrReplace(transform_8)
engine.addEntity(door_01)
let rot_door_01s = Quaternion.Euler(0, 90, 0)
let rot_door_01e = Quaternion.Euler(0, 0, 0)
door_01.addComponent(
  new utils.ToggleComponent(utils.ToggleState.Off, value => {
    if (value == utils.ToggleState.On) {
      door_01.addComponentOrReplace(
        new utils.RotateTransformComponent(rot_door_01s, rot_door_01e, 1.5)
		// engine.removeEntity(key)
      )
      engine.removeEntity(key)
    } 
    else if(value == utils.ToggleState.Off){
      door_01.addComponentOrReplace(
        new utils.RotateTransformComponent(rot_door_01e, rot_door_01s, 1.5)
      )
    }
  })
)
door_01.addComponent(new OnClick(event=>{
	if(carryable.beingCarried==true){
	door_01.getComponent(utils.ToggleComponent).toggle()}
}))

//-----------------------------------stone around door-------------------------
const module_Stone_Straight_Door_01 = new Entity()
module_Stone_Straight_Door_01.setParent(scene)
const gltfShape_5 = new GLTFShape('models/Module_Stone_Straight_Door_01/Module_Stone_Straight_Door_01.glb')
module_Stone_Straight_Door_01.addComponentOrReplace(gltfShape_5)
const transform_9 = new Transform({
  position: new Vector3(9, 0, 24),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_Door_01.addComponentOrReplace(transform_9)
engine.addEntity(module_Stone_Straight_Door_01)

const gltfShape_6 = new GLTFShape('models/Module_Stone_Straight_01/Module_Stone_Straight_01.glb')

//------------------------------wallSouth-------------------------

const module_Stone_Straight_01 = new Entity()
module_Stone_Straight_01.setParent(scene)

module_Stone_Straight_01.addComponentOrReplace(gltfShape_6)
const transform_10 = new Transform({
  position: new Vector3(9, 0, 16),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01.addComponentOrReplace(transform_10)
engine.addEntity(module_Stone_Straight_01)

const module_Stone_Straight_01_3 = new Entity()
module_Stone_Straight_01_3.setParent(scene)
module_Stone_Straight_01_3.addComponentOrReplace(gltfShape_6)
const transform_12 = new Transform({
  position: new Vector3(9, 0, 12),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_3.addComponentOrReplace(transform_12)
engine.addEntity(module_Stone_Straight_01_3)

const module_Stone_Straight_01_4 = new Entity()
module_Stone_Straight_01_4.setParent(scene)
module_Stone_Straight_01_4.addComponentOrReplace(gltfShape_6)
const transform_13 = new Transform({
  position: new Vector3(9, 0, 8),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_4.addComponentOrReplace(transform_13)
engine.addEntity(module_Stone_Straight_01_4)

const module_Stone_Straight_01_5 = new Entity()
module_Stone_Straight_01_5.setParent(scene)
module_Stone_Straight_01_5.addComponentOrReplace(gltfShape_6)
const transform_14 = new Transform({
  position: new Vector3(9, 0, 20),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_5.addComponentOrReplace(transform_14)
engine.addEntity(module_Stone_Straight_01_5)

const module_Stone_Straight_01_6 = new Entity()
module_Stone_Straight_01_6.setParent(scene)
module_Stone_Straight_01_6.addComponentOrReplace(gltfShape_6)
const transform_15 = new Transform({
  position: new Vector3(9, 0, 28),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_6.addComponentOrReplace(transform_15)
engine.addEntity(module_Stone_Straight_01_6)

const module_Stone_Straight_01_7 = new Entity()
module_Stone_Straight_01_7.setParent(scene)
module_Stone_Straight_01_7.addComponentOrReplace(gltfShape_6)
const transform_16 = new Transform({
  position: new Vector3(9, 0, 32),
  rotation: new Quaternion(0, -0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_7.addComponentOrReplace(transform_16)
engine.addEntity(module_Stone_Straight_01_7)

const module_Stone_Straight_01_8 = new Entity()
module_Stone_Straight_01_8.setParent(scene)
module_Stone_Straight_01_8.addComponentOrReplace(gltfShape_6)
const transform_17 = new Transform({
  position: new Vector3(9, 0, 36),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_8.addComponentOrReplace(transform_17)
engine.addEntity(module_Stone_Straight_01_8)

const module_Stone_Straight_01_9 = new Entity()
module_Stone_Straight_01_9.setParent(scene)
module_Stone_Straight_01_9.addComponentOrReplace(gltfShape_6)
const transform_18 = new Transform({
  position: new Vector3(9, 0, 40),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_9.addComponentOrReplace(transform_18)
engine.addEntity(module_Stone_Straight_01_9)

const module_Stone_Straight_01_10 = new Entity()
module_Stone_Straight_01_10.setParent(scene)
module_Stone_Straight_01_10.addComponentOrReplace(gltfShape_6)
const transform_19 = new Transform({
  position: new Vector3(9, 0, 44),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_10.addComponentOrReplace(transform_19)
engine.addEntity(module_Stone_Straight_01_10)

//-----------------------wallWest-----------------
const module_Stone_Straight_01_2 = new Entity()
module_Stone_Straight_01_2.setParent(scene)
module_Stone_Straight_01_2.addComponentOrReplace(gltfShape_6)
const transform_11 = new Transform({
  position: new Vector3(15.5, 0, 46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_2.addComponentOrReplace(transform_11)
engine.addEntity(module_Stone_Straight_01_2)

//----------------------------------------Stone curve--------------------------
/*const module_Stone_Curve_02 = new Entity()
module_Stone_Curve_02.setParent(scene)
const gltfShape_7 = new GLTFShape('models/Module_Stone_Curve_02/Module_Stone_Curve_02.glb')
module_Stone_Curve_02.addComponentOrReplace(gltfShape_7)
const transform_20 = new Transform({
  position: new Vector3(12.5, 0, 43),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Curve_02.addComponentOrReplace(transform_20)
engine.addEntity(module_Stone_Curve_02)
*/
const gltfShape_7 = new GLTFShape('models/Module_Stone_Curve_02/Module_Stone_Curve_02.glb')
const module_Stone_Straight_curve1 = new Entity()
module_Stone_Straight_curve1.setParent(scene)
module_Stone_Straight_curve1.addComponentOrReplace(gltfShape_6)
const transform_curve1 = new Transform({
  position: new Vector3(12.5,0,46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})

module_Stone_Straight_curve1.addComponentOrReplace(transform_curve1)
engine.addEntity(module_Stone_Straight_curve1)

const module_Stone_Straight_curve2= new Entity()
module_Stone_Straight_curve2.setParent(scene)
module_Stone_Straight_curve2.addComponentOrReplace(gltfShape_6)
const transform_curve2 = new Transform({
  position: new Vector3(9, 0, 47),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_curve2.addComponentOrReplace(transform_curve2)
engine.addEntity(module_Stone_Straight_curve2)

/*const module_Stone_Curve_02_2 = new Entity()
module_Stone_Curve_02_2.setParent(scene)
module_Stone_Curve_02_2.addComponentOrReplace(gltfShape_7)
const transform_21 = new Transform({
  position: new Vector3(12.5, 0, 5),
  rotation: new Quaternion(0, -0.7071067811865477, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Curve_02_2.addComponentOrReplace(transform_21)
engine.addEntity(module_Stone_Curve_02_2)
*/

const module_Stone_Straight_curve3= new Entity()
module_Stone_Straight_curve3.setParent(scene)
module_Stone_Straight_curve3.addComponentOrReplace(gltfShape_6)
const transform_curve3 = new Transform({
  position: new Vector3(9, 0, 5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_curve3.addComponentOrReplace(transform_curve3)
engine.addEntity(module_Stone_Straight_curve3)

const module_Stone_Straight_curve4 = new Entity()
module_Stone_Straight_curve4.setParent(scene)
module_Stone_Straight_curve4.addComponentOrReplace(gltfShape_6)
const transform_curve4 = new Transform({
  position: new Vector3(12.5,0,1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})

module_Stone_Straight_curve4.addComponentOrReplace(transform_curve4)
engine.addEntity(module_Stone_Straight_curve4)

/*const module_Stone_Curve_02_3 = new Entity()
module_Stone_Curve_02_3.setParent(scene)
module_Stone_Curve_02_3.addComponentOrReplace(gltfShape_7)
const transform_31 = new Transform({
  position: new Vector3(42.5, 0, 5),
  rotation: new Quaternion(0, -1.0000000000000007, 0, 9.71445146547012e-17),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Curve_02_3.addComponentOrReplace(transform_31)
engine.addEntity(module_Stone_Curve_02_3)
*/
const module_Stone_Straight_curve5 = new Entity()
module_Stone_Straight_curve5.setParent(scene)
module_Stone_Straight_curve5.addComponentOrReplace(gltfShape_6)
const transform_curve5 = new Transform({
  position: new Vector3(46,0,1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})

module_Stone_Straight_curve5.addComponentOrReplace(transform_curve5)
engine.addEntity(module_Stone_Straight_curve5)

const module_Stone_Straight_curve6= new Entity()
module_Stone_Straight_curve6.setParent(scene)
module_Stone_Straight_curve6.addComponentOrReplace(gltfShape_6)
const transform_curve6 = new Transform({
  position: new Vector3(46.5, 0, 5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_curve6.addComponentOrReplace(transform_curve6)
engine.addEntity(module_Stone_Straight_curve6)
//----------remove stone curve from sample------------
const module_Stone_Straight_curve7 = new Entity()
module_Stone_Straight_curve7.setParent(scene)
module_Stone_Straight_curve7.addComponentOrReplace(gltfShape_6)
const transform_curve7 = new Transform({
  position: new Vector3(46,0,46.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})

module_Stone_Straight_curve7.addComponentOrReplace(transform_curve7)
engine.addEntity(module_Stone_Straight_curve7)

const module_Stone_Straight_curve8= new Entity()
module_Stone_Straight_curve8.setParent(scene)
module_Stone_Straight_curve8.addComponentOrReplace(gltfShape_6)
const transform_curve8 = new Transform({
  position: new Vector3(46.5, 0, 47),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_curve8.addComponentOrReplace(transform_curve8)
engine.addEntity(module_Stone_Straight_curve8)
//-------------------------Wall East------------------------
const module_Stone_Straight_01_11 = new Entity()
module_Stone_Straight_01_11.setParent(scene)
module_Stone_Straight_01_11.addComponentOrReplace(gltfShape_6)
const transform_22 = new Transform({
  position: new Vector3(15.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_11.addComponentOrReplace(transform_22)
engine.addEntity(module_Stone_Straight_01_11)

const module_Stone_Straight_01_12 = new Entity()
module_Stone_Straight_01_12.setParent(scene)
module_Stone_Straight_01_12.addComponentOrReplace(gltfShape_6)
const transform_23 = new Transform({
  position: new Vector3(43.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_12.addComponentOrReplace(transform_23)
engine.addEntity(module_Stone_Straight_01_12)

const module_Stone_Straight_01_13 = new Entity()
module_Stone_Straight_01_13.setParent(scene)
module_Stone_Straight_01_13.addComponentOrReplace(gltfShape_6)
const transform_24 = new Transform({
  position: new Vector3(19.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_13.addComponentOrReplace(transform_24)
engine.addEntity(module_Stone_Straight_01_13)


const module_Stone_Straight_01_15 = new Entity()
module_Stone_Straight_01_15.setParent(scene)
module_Stone_Straight_01_15.addComponentOrReplace(gltfShape_6)
const transform_26 = new Transform({
  position: new Vector3(23.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_15.addComponentOrReplace(transform_26)
engine.addEntity(module_Stone_Straight_01_15)

const module_Stone_Straight_01_16 = new Entity()
module_Stone_Straight_01_16.setParent(scene)
module_Stone_Straight_01_16.addComponentOrReplace(gltfShape_6)
const transform_27 = new Transform({
  position: new Vector3(27.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_16.addComponentOrReplace(transform_27)
engine.addEntity(module_Stone_Straight_01_16)

const module_Stone_Straight_01_17 = new Entity()
module_Stone_Straight_01_17.setParent(scene)
module_Stone_Straight_01_17.addComponentOrReplace(gltfShape_6)
const transform_28 = new Transform({
  position: new Vector3(31.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_17.addComponentOrReplace(transform_28)
engine.addEntity(module_Stone_Straight_01_17)

const module_Stone_Straight_01_18 = new Entity()
module_Stone_Straight_01_18.setParent(scene)
module_Stone_Straight_01_18.addComponentOrReplace(gltfShape_6)
const transform_29 = new Transform({
  position: new Vector3(35.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_18.addComponentOrReplace(transform_29)
engine.addEntity(module_Stone_Straight_01_18)

const module_Stone_Straight_01_19 = new Entity()
module_Stone_Straight_01_19.setParent(scene)
module_Stone_Straight_01_19.addComponentOrReplace(gltfShape_6)
const transform_30 = new Transform({
  position: new Vector3(39.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_19.addComponentOrReplace(transform_30)
engine.addEntity(module_Stone_Straight_01_19)
//---------------------------NorthWall-----------

const module_Stone_Straight_01_20 = new Entity()
module_Stone_Straight_01_20.setParent(scene)
module_Stone_Straight_01_20.addComponentOrReplace(gltfShape_6)
const transform_32 = new Transform({
  position: new Vector3(46, 0, 8),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_20.addComponentOrReplace(transform_32)
engine.addEntity(module_Stone_Straight_01_20)

const module_Stone_Straight_01_21 = new Entity()
module_Stone_Straight_01_21.setParent(scene)
module_Stone_Straight_01_21.addComponentOrReplace(gltfShape_6)
const transform_33 = new Transform({
  position: new Vector3(46, 0, 4),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865476),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_21.addComponentOrReplace(transform_33)
engine.addEntity(module_Stone_Straight_01_21)
//----------------------------base grass------------------------
const floorBaseGrass_02 = new Entity()
floorBaseGrass_02.setParent(scene)
const gltfShape_8 = new GLTFShape('models/FloorBaseGrass_02/FloorBaseGrass_02.glb')
floorBaseGrass_02.addComponentOrReplace(gltfShape_8)
const transform_34 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02.addComponentOrReplace(transform_34)
engine.addEntity(floorBaseGrass_02)

const floorBaseGrass_02_2 = new Entity()
floorBaseGrass_02_2.setParent(scene)
floorBaseGrass_02_2.addComponentOrReplace(gltfShape_8)
const transform_35 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_2.addComponentOrReplace(transform_35)
engine.addEntity(floorBaseGrass_02_2)

const floorBaseGrass_02_3 = new Entity()
floorBaseGrass_02_3.setParent(scene)
floorBaseGrass_02_3.addComponentOrReplace(gltfShape_8)
const transform_36 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_3.addComponentOrReplace(transform_36)
engine.addEntity(floorBaseGrass_02_3)

const floorBaseGrass_02_4 = new Entity()
floorBaseGrass_02_4.setParent(scene)
floorBaseGrass_02_4.addComponentOrReplace(gltfShape_8)
const transform_37 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_4.addComponentOrReplace(transform_37)
engine.addEntity(floorBaseGrass_02_4)

const floorBaseGrass_02_5 = new Entity()
floorBaseGrass_02_5.setParent(scene)
floorBaseGrass_02_5.addComponentOrReplace(gltfShape_8)
const transform_38 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_5.addComponentOrReplace(transform_38)
engine.addEntity(floorBaseGrass_02_5)

const floorBaseGrass_02_6 = new Entity()
floorBaseGrass_02_6.setParent(scene)
floorBaseGrass_02_6.addComponentOrReplace(gltfShape_8)
const transform_39 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_6.addComponentOrReplace(transform_39)
engine.addEntity(floorBaseGrass_02_6)

const floorBaseGrass_02_7 = new Entity()
floorBaseGrass_02_7.setParent(scene)
floorBaseGrass_02_7.addComponentOrReplace(gltfShape_8)
const transform_40 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_7.addComponentOrReplace(transform_40)
engine.addEntity(floorBaseGrass_02_7)

const floorBaseGrass_02_8 = new Entity()
floorBaseGrass_02_8.setParent(scene)
floorBaseGrass_02_8.addComponentOrReplace(gltfShape_8)
const transform_41 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_8.addComponentOrReplace(transform_41)
engine.addEntity(floorBaseGrass_02_8)

const floorBaseGrass_02_9 = new Entity()
floorBaseGrass_02_9.setParent(scene)
floorBaseGrass_02_9.addComponentOrReplace(gltfShape_8)
const transform_42 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_9.addComponentOrReplace(transform_42)
engine.addEntity(floorBaseGrass_02_9)

//------------------------------------- Partition 2 Walls---------------

const ghostWall1 = new Entity()
engine.addEntity(ghostWall1)
ghostWall1.addComponent(gltfShape_6)
ghostWall1.addComponent(new Transform({
  position: new Vector3(29,0,9)
  scale : new Vector3(1,1,1)
}))

const ghostWall2 = new Entity()
engine.addEntity(ghostWall2)
ghostWall2.addComponent(gltfShape_6)
ghostWall2.addComponent(new Transform({
  position: new Vector3(29,0,9)
  scale : new Vector3(1,1,1)
  rotation: Quaternion.Euler(0,-90,0)
}))

const ghostWall3 = new Entity()
engine.addEntity(ghostWall3)
ghostWall3.addComponent(gltfShape_6)
ghostWall3.addComponent(new Transform({
  position: new Vector3(33,0,5)
  scale : new Vector3(1,1,1)
}))

const ghostWall4 = new Entity()
engine.addEntity(ghostWall4)
ghostWall4.addComponent(gltfShape_6)
ghostWall4.addComponent(new Transform({
  position: new Vector3(37,0,5)
  scale : new Vector3(1,1,1)
}))

const ghostWall5 = new Entity()
engine.addEntity(ghostWall5)
ghostWall5.addComponent(gltfShape_6)
ghostWall5.addComponent(new Transform({
  position: new Vector3(41,0,5)
  scale : new Vector3(1,1,1)
}))


const ghostWall6 = new Entity()
engine.addEntity(ghostWall6)
ghostWall6.addComponent(gltfShape_6)
ghostWall6.addComponent(new Transform({
  position: new Vector3(46,0,10)
  scale : new Vector3(1,1,1)
}))


const ghostWall7 = new Entity()
engine.addEntity(ghostWall7)
ghostWall7.addComponent(gltfShape_6)
ghostWall7.addComponent(new Transform({
  position: new Vector3(43,0,10)
  scale : new Vector3(1,1,1)
}))


const ghostWall8 = new Entity()
engine.addEntity(ghostWall8)
ghostWall8.addComponent(gltfShape_6)
ghostWall8.addComponent(new Transform({
  position: new Vector3(39,0,10)
  scale : new Vector3(1,1,1)
}))


const ghostWall9 = new Entity()
engine.addEntity(ghostWall9)
ghostWall9.addComponent(gltfShape_6)
ghostWall9.addComponent(new Transform({
  position: new Vector3(37,0,10)
  scale : new Vector3(1,1,1)
}))


const ghostWall10 = new Entity()
engine.addEntity(ghostWall10)
ghostWall10.addComponent(gltfShape_6)
ghostWall10.addComponent(new Transform({
  position: new Vector3(33,0,10)
  scale : new Vector3(1,1,1)
  rotation: Quaternion.Euler(0,90,0)
}))


const ghostWall11 = new Entity()
engine.addEntity(ghostWall11)
ghostWall11.addComponent(gltfShape_6)
ghostWall11.addComponent(new Transform({
  position: new Vector3(46,0,14)
  scale : new Vector3(1,1,1)
}))

const ghostWall12 = new Entity()
engine.addEntity(ghostWall12)
ghostWall12.addComponent(gltfShape_6)
ghostWall12.addComponent(new Transform({
  position: new Vector3(42,0,14)
  scale : new Vector3(1,1,1)
}))

const ghostWall13 = new Entity()
engine.addEntity(ghostWall13)
ghostWall13.addComponent(gltfShape_6)
ghostWall13.addComponent(new Transform({
  position: new Vector3(38,0,14)
  scale : new Vector3(1,1,1)
}))

const ghostWall14 = new Entity()
engine.addEntity(ghostWall14)
ghostWall14.addComponent(gltfShape_6)
ghostWall14.addComponent(new Transform({
  position: new Vector3(35,0,14)
  scale : new Vector3(1,1,1)
}))

const ghostWall19 = new Entity()
engine.addEntity(ghostWall19)
ghostWall19.addComponent(gltfShape_6)
ghostWall19.addComponent(new Transform({
  position: new Vector3(33,0,14)
  scale : new Vector3(1,1,1)
}))



const ghostWall15 = new Entity()
engine.addEntity(ghostWall15)
ghostWall15.addComponent(gltfShape_6)
ghostWall15.addComponent(new Transform({
  position: new Vector3(41,0,18)
  scale : new Vector3(1,1,1)
}))

const ghostWall16 = new Entity()
engine.addEntity(ghostWall16)
ghostWall16.addComponent(gltfShape_6)
ghostWall16.addComponent(new Transform({
  position: new Vector3(37,0,18)
  scale : new Vector3(1,1,1)
}))

const ghostWall17 = new Entity()
engine.addEntity(ghostWall17)
ghostWall17.addComponent(gltfShape_6)
ghostWall17.addComponent(new Transform({
  position: new Vector3(33,0,18)
  scale : new Vector3(1,1,1)
}))

const ghostWall18 = new Entity()
engine.addEntity(ghostWall18)
ghostWall18.addComponent(gltfShape_6)
ghostWall18.addComponent(new Transform({
  position: new Vector3(29,0,18)
  scale : new Vector3(1,1,1)
}))




const ghostWall20 = new Entity()
engine.addEntity(ghostWall20)
ghostWall20.addComponent(gltfShape_6)
ghostWall20.addComponent(new Transform({
  position: new Vector3(42,0,26)
  scale : new Vector3(1,1,1)
}))

const ghostWall21 = new Entity()
engine.addEntity(ghostWall21)
ghostWall21.addComponent(gltfShape_6)
ghostWall21.addComponent(new Transform({
  position: new Vector3(38,0,26)
  scale : new Vector3(1,1,1)
}))

const ghostWall22 = new Entity()
engine.addEntity(ghostWall22)
ghostWall22.addComponent(gltfShape_6)
ghostWall22.addComponent(new Transform({
  position: new Vector3(34,0,26)
  scale : new Vector3(1,1,1)
}))

const ghostWall23 = new Entity()
engine.addEntity(ghostWall23)
ghostWall23.addComponent(gltfShape_6)
ghostWall23.addComponent(new Transform({
  position: new Vector3(46,0,26)
  scale : new Vector3(1,1,1)
}))






const ghostWall24 = new Entity()
engine.addEntity(ghostWall24)
ghostWall24.addComponent(gltfShape_6)
ghostWall24.addComponent(new Transform({
  position: new Vector3(29,0,34)
  scale : new Vector3(1,1,1)
}))

const ghostWall25 = new Entity()
engine.addEntity(ghostWall25)
ghostWall25.addComponent(gltfShape_6)
ghostWall25.addComponent(new Transform({
  position: new Vector3(33,0,34)
  scale : new Vector3(1,1,1)
}))


const ghostWall26= new Entity()
engine.addEntity(ghostWall26)
ghostWall26.addComponent(gltfShape_6)
ghostWall26.addComponent(new Transform({
  position: new Vector3(37,0,34)
  scale : new Vector3(1,1,1)
}))

const ghostWall27 = new Entity()
engine.addEntity(ghostWall27)
ghostWall27.addComponent(gltfShape_6)
ghostWall27.addComponent(new Transform({
  position: new Vector3(41,0,34)
  scale : new Vector3(1,1,1)
}))



//---------------------------Floor Partition 2-------------------------

const darkfloor = new Entity()
engine.addEntity(darkfloor)
darkfloor.addComponent(new BoxShape())
darkfloor.addComponent(new Transform({
  position: new Vector3(35.1,0.1,24)
  scale: new Vector3(21.5,0.001,45)
}))
const darkfloorTexture = new Texture("materials/floor.jpg")
let darkfloorMaterial = new Material()
darkfloorMaterial.albedoTexture = darkfloorTexture
darkfloor.addComponent(darkfloorMaterial)
darkfloor.setParent(scene)

const darkfloor2 = new Entity()
engine.addEntity(darkfloor2)
darkfloor2.addComponent(new BoxShape())
darkfloor2.addComponent(new Transform({
  position: new Vector3(35.1,4,22.5)
  scale: new Vector3(21.65,0.001,42.2)
}))
const darkfloorTexture2 = new Texture("materials/floor.jpg")
let darkfloorMaterial2 = new Material()
darkfloorMaterial2.albedoTexture = darkfloorTexture2
darkfloor2.addComponent(darkfloorMaterial2)
darkfloor2.setParent(scene)

const darkfloor3 = new Entity()
engine.addEntity(darkfloor3)
darkfloor3.addComponent(new BoxShape())
darkfloor3.addComponent(new Transform({
  position: new Vector3(17,4,24)
  scale: new Vector3(17,0.001,45)
}))
const darkfloorTexture3 = new Texture("materials/floor.jpg")
let darkfloorMaterial3 = new Material()
darkfloorMaterial3.albedoTexture = darkfloorTexture3
darkfloor3.addComponent(darkfloorMaterial3)
darkfloor3.setParent(scene)


const darkfloor4 = new Entity()
engine.addEntity(darkfloor4)
darkfloor4.addComponent(new BoxShape())
darkfloor4.addComponent(new Transform({
  position: new Vector3(37.8,4,44)
  scale: new Vector3(16,0.001,5)
}))
const darkfloorTexture4 = new Texture("materials/floor.jpg")
let darkfloorMaterial4 = new Material()
darkfloorMaterial4.albedoTexture = darkfloorTexture4
darkfloor4.addComponent(darkfloorMaterial4)
darkfloor4.setParent(scene)

let ringpos1 = new Vector3(22.407546997070312,2,38.34035873413086)


const ring = new Entity()
engine.addEntity(ring)
let box0 = new BoxShape()
box0.withCollisions = false
ring.addComponent(box0)
const ringTransform = new Transform({
  scale : new Vector3(1.5,4,1.5),
  position : new Vector3(22.407546997070312,2,38.34035873413086)
})
ring.addComponent(ringTransform)
const box123 = new Material()
box123.albedoColor = new Color4(5,0,0,0.01)
box123.hasAlpha = true
ring.addComponent(box123)

const camera = Camera.instance


export class doublemint implements ISystem{
  update(){
    let dist = distance(camera.position,ringpos1)

    if(dist < 1 ){
      engine.removeEntity(ring)
    }
  }
}
engine.addSystem(new doublemint())




function distance(pos1: Vector3, pos2: Vector3): number {
  const a = pos1.x - pos2.x
  const b = pos1.z - pos2.z
  return a * a + b * b
}

//--------------------------- Hologram --------------------

const hologram = new Entity()
engine.addEntity(hologram)
hologram.addComponent(new GLTFShape('models/hologram.glb'))
const hologramtransform = new Transform({
  position : new Vector3(3,1.5,25)
  scale : new Vector3(0.15,0.15,0.15)
})
hologram.addComponent(hologramtransform)


let hologramshape = new ConeShape()
hologramshape.withCollisions = false
const hologramlighting = new Entity()
engine.addEntity(hologramlighting)
hologramlighting.addComponentOrReplace(new Transform({
  position : new Vector3(3,1,25)
  rotation : Quaternion.Euler(180,0,0)
  scale: new Vector3(0.5,0.5,0.5)
}))
hologramlighting.addComponent(hologramshape)

const hologrammaterial = new Material()
hologrammaterial.hasAlpha = true
hologrammaterial.albedoColor = new Color4(0.1,0.5,5,0.01)
hologramlighting.addComponent(hologrammaterial)


const hologram1 = new Entity()
engine.addEntity(hologram1)
hologram1.addComponent(new TextShape("Welcome to\nHaAk World"))
const hologramtransform1 = new Transform({
  position : new Vector3(3,1.5,20)
  scale : new Vector3(0.15,0.15,0.15)
  rotation: Quaternion.Euler(0,90,0)
})
hologram1.addComponent(hologramtransform1)

let hologramshape1 = new ConeShape()
hologramshape1.withCollisions = false
const hologramlighting1 = new Entity()
engine.addEntity(hologramlighting1)
hologramlighting1.addComponentOrReplace(new Transform({
  position : new Vector3(3,1,20)
  rotation : Quaternion.Euler(180,0,0)
  scale: new Vector3(0.5,0.5,0.5)
}))
hologramlighting1.addComponent(hologramshape1)

const hologrammaterial1 = new Material()
hologrammaterial1.hasAlpha = true
hologrammaterial1.albedoColor = new Color4(0.1,0.5,5,0.01)
hologramlighting1.addComponent(hologrammaterial1)


class hologramRotate implements ISystem {
  update() {
    hologramtransform.rotate(Vector3.Up(), 3)
	hologramtransform1.rotate(Vector3.Up(), 3)
  }
}

engine.addSystem(new hologramRotate())

//--------------------Stairs--------------------------------


const stairs = new Entity()
engine.addEntity(stairs)
stairs.addComponent(new GLTFShape('models/Stairs_L_01/Stairs_L_01.glb'))
stairs.addComponent(new Transform({
	position: new Vector3(25,0,43.5),
	rotation: Quaternion.Euler(0,180,0),
	scale: new Vector3(1,1,1.5)
})



