import * as THREE from "three"
import { Model as Piano } from "../models/Piano"

export default function Demo() {
  return (
    <group>
      <mesh>
        <meshBasicMaterial color="blue" side={THREE.DoubleSide} />
        <sphereGeometry args={[64, 64, 64]} />
      </mesh>
      <Piano scale={0.025} />
    </group>
  )
}
