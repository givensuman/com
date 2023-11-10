import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Portal from './components/Portal'
import Demo from './scenes/Demo'

import Rig from './components/Rig'
import { ActivePortalProvider } from './hooks/useActivePortal'

function App() {
  return (
    <>
      <ActivePortalProvider>
      <Canvas>
        <Rig />
        <Environment preset="sunset" />
        <Portal name="demo">
          <Demo />
        </Portal>
      </Canvas>
      </ActivePortalProvider>
    </>
  )
}

export default App
