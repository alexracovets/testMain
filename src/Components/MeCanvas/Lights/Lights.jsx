export default function Lights() { 
    return (
        <>
            <color attach={'background'} args={['#292929']} />
            <pointLight position={[-30, 0, -30]} power={10.1} />
            <ambientLight />
            <directionalLight />
        </>
    )
}
