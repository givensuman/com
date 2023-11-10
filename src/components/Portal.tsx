import { Environment, EnvironmentProps, MeshPortalMaterial, PortalMaterialType, RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from 'maath';
import { useRef } from "react";
import * as THREE from 'three';
import useActivePortal from "../hooks/useActivePortal";

interface Props extends React.ComponentProps<typeof RoundedBox> {
    name: string,
    preset?: EnvironmentProps["preset"]
}

export default function Portal({
    name,
    preset = 'apartment',
    ...props
}: Props) {
    const [activePortal, setActivePortal] = useActivePortal()
    const portalRef = useRef<PortalMaterialType | null>(null)

    useFrame((_, delta) => easing.damp(portalRef.current as object, 'blend', name === activePortal ? 1 : 0, 0.125, delta))

    return (
        <RoundedBox args={[1, 2, 0.01]} onClick={() => setActivePortal(name)} {...props}>
            <MeshPortalMaterial ref={portalRef} side={THREE.DoubleSide}>
                <Environment preset={preset} />
                <group scale={name === activePortal ? 1 : 0.1}>
                    {props.children}
                </group>
            </MeshPortalMaterial>
        </RoundedBox>
    )
}