import { useControls } from "leva";

export default function Lights() {
    const bgColor = '#292929';
    const bgColorTest = useControls({
        value: '#292929',
    })
    return (
        <>
            <color attach={'background'} args={[bgColorTest.value]} />
            <pointLight position={[-30, 0, -30]} power={10.1} />
            <ambientLight />
            <directionalLight />
        </>
    )
}
