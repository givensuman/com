import * as THREE from "three"

export default function Demo() {
  return (
    <group>
      <mesh>
        <meshBasicMaterial color="blue" side={THREE.DoubleSide} />
        <sphereGeometry args={[64, 64, 64]} />
      </mesh>
      <mesh>
        <meshStandardMaterial color="pink" />
        <boxGeometry args={[0.25, 0.25, 0.25]} />
      </mesh>
    </group>
  )
}
