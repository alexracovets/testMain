export default function Lights() {
    const bgColor = '#292929';

    return (
        <>
            <color attach={'background'} args={[bgColor]} />
            <pointLight position={[-30, 0, -30]} power={10.1} />
            <ambientLight />
            <directionalLight />
        </>
    )
}
