import { GradientTexture } from "@react-three/drei"
import * as THREE from "three"
import useActivePortal from "../hooks/useActivePortal"
import { Model as Piano } from "../models/Piano"

export default function Demo() {

  const [ activePortal ] = useActivePortal()

  return (
    <group>
      <mesh>
        <meshBasicMaterial side={THREE.DoubleSide}>
          <GradientTexture
          stops={[0, 1]}
            colors={["green", "blue"]}
          />
        </meshBasicMaterial>
        <sphereGeometry args={[64, 64, 64]} />
      </mesh>
      <Piano scale={0.2}/>
    </group>
  )
}
