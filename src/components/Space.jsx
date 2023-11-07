/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei'
import '../css/customspace.css'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/CXn8xUxZDVxWpuRy/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#74757a']} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <PerspectiveCamera
            name="Camera"
            makeDefault={true}
            far={100000}
            near={70}
            fov={45}
            position={[946.14, 478.02, 322.59]}
            rotation={[-0.98, 1.02, 0.9]}
            scale={1}
          />
          <group name="Nike_Air_Force_1_Low" position={[410.72, -127, -22.63]} scale={24.4}>
            <mesh
              name="Nike_Air_Force_1_Set_White:Shoelaces_L1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Shoelaces_L1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Shoelaces_L1'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Nike_Air_Force_1_Set_White:Leather_R1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Leather_R1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Leather_R1'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Nike_Air_Force_1_Set_White:Inner_Fabrick_L1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Inner_Fabrick_L1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Inner_Fabrick_L1'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Nike_Air_Force_1_Set_White:Leather_L1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Leather_L1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Leather_L1'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Nike_Air_Force_1_Set_White:Thread_Sole_L1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Thread_Sole_L1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Thread_Sole_L1'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Nike_Air_Force_1_Set_White:Metal_Label_R1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Metal_Label_R1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Metal_Label_R1'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Nike_Air_Force_1_Set_White:Metal_Label_L1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Metal_Label_L1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Metal_Label_L1'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Nike_Air_Force_1_Set_White:Thread_Sole_R1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Thread_Sole_R1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Thread_Sole_R1'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Nike_Air_Force_1_Set_White:Tongue_L1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Tongue_L1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Tongue_L1'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Nike_Air_Force_1_Set_White:Label_L1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Label_L1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Label_L1'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Nike_Air_Force_1_Set_White:Shoelaces_R1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Shoelaces_R1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Shoelaces_R1'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Nike_Air_Force_1_Set_White:Tongue_R1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Tongue_R1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Tongue_R1'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Nike_Air_Force_1_Set_White:Insole_R1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Insole_R1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Insole_R1'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Nike_Air_Force_1_Set_White:Sole_L1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Sole_L1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Sole_L1'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Nike_Air_Force_1_Set_White:Inner_Fabrick_R1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Inner_Fabrick_R1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Inner_Fabrick_R1'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Nike_Air_Force_1_Set_White:Label_R1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Label_R1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Label_R1'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Nike_Air_Force_1_Set_White:Insole_L1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Insole_L1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Insole_L1'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name="Nike_Air_Force_1_Set_White:Sole_R1"
              geometry={nodes['Nike_Air_Force_1_Set_White:Sole_R1'].geometry}
              material={nodes['Nike_Air_Force_1_Set_White:Sole_R1'].material}
              castShadow
              receiveShadow
            />
          </group>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[200, 300, 300]}
          />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}