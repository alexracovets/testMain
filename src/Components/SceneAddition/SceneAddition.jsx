// import { useControls } from "leva"

export default function SceneAddition() {

    // const colors = useControls({
    //     color: '#292929',
    // })

    return (
        <>
            {/* <color attach={'background'} args={['#08080a']} /> */}
            <pointLight position={[-30, 0, -30]} power={10.1} />
            <ambientLight />
            <directionalLight />
        </>
    )
}  