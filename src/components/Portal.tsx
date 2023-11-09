import { Environment, EnvironmentProps, MeshPortalMaterial, RoundedBox } from "@react-three/drei";
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

    return (
        <RoundedBox args={[1, 2, 0.01]} onClick={() => setActivePortal(name)} {...props}>
            <MeshPortalMaterial blend={activePortal === name ? 1 : 0}>
                <Environment preset={preset} />
                {props.children}
            </MeshPortalMaterial>
        </RoundedBox>
    )
}