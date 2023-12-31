/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 ./models/Piano/Piano.glb --transform --types 
Files: ./models/Piano/Piano.glb [103.8KB] > Piano-transformed.glb [8.04KB] (92%)
*/

import { useGLTF } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['piano_Cube029-Mesh']: THREE.Mesh
    ['piano_Cube029-Mesh_1']: THREE.Mesh
    ['piano_Cube029-Mesh_2']: THREE.Mesh
    ['piano_Cube029-Mesh_3']: THREE.Mesh
  }
  materials: {
    ['1A1A1A']: THREE.MeshStandardMaterial
    FFFFFF: THREE.MeshStandardMaterial
    FFEB3B: THREE.MeshStandardMaterial
    DD9944: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Piano.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['piano_Cube029-Mesh'].geometry} material={materials['1A1A1A']} />
      <mesh geometry={nodes['piano_Cube029-Mesh_1'].geometry} material={materials.FFFFFF} />
      <mesh geometry={nodes['piano_Cube029-Mesh_2'].geometry} material={materials.FFEB3B} />
      <mesh geometry={nodes['piano_Cube029-Mesh_3'].geometry} material={materials.DD9944} />
    </group>
  )
}

useGLTF.preload('/Piano-transformed.glb')
