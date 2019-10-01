const hint= new Entity()
engine.addEntity(hint)
hint.addComponent(new BoxShape())
hint.addComponent(new Transform({
  position: new Vector3(24,2,42),
  scale: new Vector3(1.5,1,0.01),
  rotation: Quaternion.Euler(0,-90,0)
}))

const hintTexture = new Texture("materials/hint1.png")
let hintmaterial = new Material()
hintmaterial.albedoTexture = hintTexture
hint.addComponent(hintmaterial)