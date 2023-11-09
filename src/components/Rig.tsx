import { CameraControls, CameraControlsProps } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from 'three';
import useActivePortal from "../hooks/useActivePortal";

interface Props extends CameraControlsProps {
    position?: THREE.Vector3,
    focus?: THREE.Vector3
}

export default function Rig({
    position = new THREE.Vector3(0, 0, 2),
    focus = new THREE.Vector3(0, 0, 0),
    ...props
}: Props) {
    const [ activePortal ] = useActivePortal()
    const { camera, scene } = useThree()

    const portal = scene.getObjectByName(activePortal as string)
    if (portal) {
        portal?.parent?.localToWorld(position?.set(0, 0.5, 0.25))
        portal?.parent?.localToWorld(focus?.set(0, 0, -2))
    }
    camera.lookAt(position)

    return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} {...props} />
}