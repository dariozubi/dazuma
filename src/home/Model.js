import React, { Suspense, useRef, useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Canvas, extend, useThree, useFrame, useLoader } from 'react-three-fiber';
import { useSpring, config } from 'react-spring';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass'
import { PixelShader } from 'three/examples/jsm/shaders/PixelShader.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader';

import { GlitchPass } from './GlitchPass'
import { AdditiveBlendingShader, VolumetricLightShader } from './shaders';

import { makeStyles } from '@material-ui/core/styles';

extend({ EffectComposer, ShaderPass, RenderPass, DotScreenPass, UnrealBloomPass, FilmPass, GlitchPass })

const DEFAULT_LAYER = 0
const OCCLUSION_LAYER = 1

const useStyles = makeStyles(theme => ({
  container:  {
    position: 'fixed',
    width: '100%',
    height: '100%',
    margin: '0',
    paddingTop: '0',
    overflow: 'auto'
  },

  root: {
    width: '100%',
    height: '100%',
    margin: '0',
    padding: '0',
    overflow: 'auto'
  },

  text: {
    textAlign: 'left',
    fontSize: '8vh',
    width: '100%',
    paddingLeft: '16px',
    '&:hover': {
      backgroundColor: '#01001e1c',
      cursor: 'pointer'
    }
  },

  flex: {
    color: '#343d46',
    marginTop: '64px',
    position: 'relative',
    display: 'flex',
    flexFlow: 'row wrap',
    alignContent: 'space-around',
    height: 'calc(100vh - 64px)'
  }
}));

function Model({ layer = DEFAULT_LAYER, type }) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/yomero.glb')

  const material = useMemo(() => {

    if (layer === DEFAULT_LAYER){
      if (type === 2) return new THREE.MeshStandardMaterial({ wireframe: true })
      else return nodes.mesh_0.material
    }
    else return new THREE.MeshBasicMaterial({ color: new THREE.Color('#000000') })
  }, [layer, type])

  useFrame(() => {
    group.current.rotation.z += 0.004;
  })
  return (
    <group dispose={null}>
      <mesh
        material={material}
        geometry={nodes.mesh_0.geometry}
        position={[0, -7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        layers={layer}
        ref={group}
      />
    </group>
  )
}

function Effects({ type }) {
  const composer = useRef()
  const occlusionComposer = useRef()
  const { scene, gl, size, camera } = useThree()
  const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [size])
  const occlusionRenderTarget = useMemo(() => new THREE.WebGLRenderTarget(), [])

  useEffect(() => {
    occlusionComposer.current.setSize(size.width, size.height);
    composer.current.setSize(size.width, size.height);
  }, [size])

  useFrame(() => {
    camera.layers.set(OCCLUSION_LAYER)
    occlusionComposer.current.render()
    camera.layers.set(DEFAULT_LAYER)
    composer.current.render()
  }, 1)

  return (
    <React.Fragment>
      <mesh layers={OCCLUSION_LAYER} position={[0, 2, -10]}>
        <sphereBufferGeometry attach="geometry" args={[10, 32, 32]} />
        <meshBasicMaterial attach="material" />
      </mesh>

      <effectComposer ref={occlusionComposer} args={[gl, occlusionRenderTarget]} renderToScreen={false}>
        <renderPass attachArray="passes" args={[scene, camera]} />
        <shaderPass attachArray="passes" args={[VolumetricLightShader]} needsSwap={false} />
      </effectComposer>

      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
        {type === 1 && <dotScreenPass attachArray="passes"/>}
        {type === 4 && <unrealBloomPass attachArray="passes" args={[aspect, 0.8, 0, 0]}/>}
        {type === 4 && <filmPass attachArray="passes" args={[0.5, 0.5, 4096, 0.5]}/>}
        {type === 1 && <glitchPass attachArray="passes" factor="0.7" />}
        {type === 3 && <shaderPass attachArray="passes" args={[PixelShader]} uniforms-resolution-value={[size.width/15, size.height/15]} />}
        {type === 0 && <shaderPass attachArray="passes" args={[AdditiveBlendingShader]} uniforms-tAdd-value={occlusionRenderTarget.texture} />}
        {type === 0 && <shaderPass attachArray="passes" args={[FXAAShader]} uniforms-resolution-value={[1 / size.width, 1 / size.height]} renderToScreen />}
      </effectComposer>
    </React.Fragment>
  )
}

function Lights({ type }){
  const light = useRef();
  const light2 = useRef();
  const light3 = useRef();

  useFrame(({ clock }) => {
    let t = clock.getElapsedTime();
    light.current.position.x = 1000 * Math.sin(t);
    light.current.position.y = 1000 * Math.cos(t);
    light2.current.position.z = 500 * Math.cos(3*t + Math.PI/10) + Math.sin(50*t + Math.PI/2);
    light2.current.position.x = 1000 * Math.sin(t + Math.PI/2);
    light2.current.position.y = 1000 * Math.cos(t + Math.PI/2);
    light2.current.position.z = 10 * Math.cos(3*t + Math.PI/4) + Math.sin(t + Math.PI/2);
  })

  return(
    <React.Fragment>
      <pointLight ref={light} color="#fe00f6" intensity={type === 3 ? "1" : "0"} />
      <pointLight ref={light2} color="#00ff00" intensity={type === 3 ? "1" : "0"} />
      <pointLight position={[100, 50, 50]} color="#ffffff" intensity={type === 1 ? "1" : "0"}/>
      <spotLight position={[0, -7, 10]} color="red" intensity={type === 4 ? "1" : "0"} angle={Math.PI/4}/>
    </React.Fragment>
  )
}

const Demo = ({ track }) => {
  const [type, set] = useState(0);
  const styles = useStyles();

  const router = useRouter();

  return (
    <React.Fragment>
      <div className={styles.container}>

        <Canvas 
          className={styles.root}
          camera={{ position: [0, -2, 15] }}
          gl={{ antialias: false }}
          onCreated={({ gl }) => {
            gl.setClearColor('white')
            gl.toneMapping = THREE.Uncharted2ToneMapping
            gl.outputEncoding = THREE.sRGBEncoding
          }}
        >

          <Lights type={type} />

          <Suspense fallback={null}>
            <Model type={type}/>
            <Model layer={OCCLUSION_LAYER} />
          </Suspense>

          <Effects type={type} />

        </Canvas>

      </div>

      <div className={styles.flex}>

        <Link href={router.pathname !== '/' ? 'en/work#Web' : 'es/trabajo#Web'}>
          <div 
            className={styles.text}
            onMouseOver={()=>set(1)} 
            onMouseLeave={()=>set(0)}>
            Web
          </div>
        </Link>

        <Link href={router.pathname !== '/' ? 'en/work#Multimedia' : 'es/trabajo#Multimedia'}>
          <div 
            className={styles.text} 
            onMouseOver={()=>set(3)} 
            onMouseLeave={()=>set(0)}>
            Multimedia
          </div>
        </Link>

        <Link href={router.pathname !== '/' ? 'en/work#VR' : 'es/trabajo#VR'}>
          <div 
            className={styles.text} 
            onMouseOver={()=>set(2)} 
            onMouseLeave={()=>set(0)}>
            VR
          </div>
        </Link>

        <Link href={router.pathname !== '/' ? 'en/work#More' : 'es/trabajo#More'}>
          <div 
            className={styles.text} 
            onMouseOver={()=>set(4)} 
            onMouseLeave={()=>set(0)}>
            {router.pathname !== '/' ? 'More' : 'Más'}
          </div>
        </Link>

      </div>
    </React.Fragment>
  )
}

export default Demo;