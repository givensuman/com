import * as THREE from "three"
import useActivePortal from "../hooks/useActivePortal"
import { Model as Piano } from "../models/Piano"

export default function Demo() {

  const [ activePortal ] = useActivePortal()

  return (
    <group>
      <mesh>
        <meshBasicMaterial color="blue" side={THREE.DoubleSide} />
        <sphereGeometry args={[64, 64, 64]} />
      </mesh>
      <Piano scale={0.2}/>
    </group>
  )
}
