import { CameraControls, CameraControlsProps } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
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
    const { scene } = useThree()
    const cameraRef = useRef<CameraControls | null>(null)

    useEffect(() => {
        if (cameraRef.current) {
            if (activePortal) {
                const targetPosition = new THREE.Vector3()
                scene.getObjectByName(activePortal)?.getWorldPosition(targetPosition)
                cameraRef.current.setLookAt(
                    0, 0, 2,
                    targetPosition.x, targetPosition.y, targetPosition.z,
                    true
                )
            } else {
                cameraRef.current.setLookAt(
                    0, 0, 5,
                    0, 0, 0,
                    true
                )
            }
        }

    }, [activePortal])

    return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} ref={cameraRef} {...props} />
}