import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { useEffect } from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import { useSprings, a } from 'react-spring/three'
// import './styles.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    margin: '0',
    padding: '0',
    overflow: 'auto'
  },
  body: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    margin: '0',
    padding: '0',
    overflow: 'auto'
  }
}))

const number = 40
const colors = ['#ff71ce', '#01cdfe', '#05ffa1', '#b967ff', '#fffb96']
const random = () => {
  const r = Math.random()
  return {
    position: [30 - Math.random() * 90, 30 - Math.random() * 90, 0],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 4, 1 + r * 4, 1],
    rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)]
  }
}

function Content() {
  const { viewport } = useThree()
  const aspect = Math.min(8, viewport.width / 6)
  const [springs, set] = useSprings(number, i => ({ from: random(), ...random(), config: { mass: 30, tension: 500, friction: 200 } }))
  useEffect(() => void setInterval(() => set(i => ({ ...random(), delay: i * 100 })), 3000), [])
  return springs.map(({ color, ...props }, index) => (
    <a.mesh key={index} {...props}>
      <planeBufferGeometry attach="geometry" args={[0.1 + Math.random() * aspect, 0.1 + Math.random() * aspect]} />
      <a.meshPhongMaterial attach="material" color={color} />
    </a.mesh>
  ))
}

export default function Rectangles() {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Canvas className={classes.root} camera={{ position: [0, 0, 30] }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.5} position={[300, 300, 4000]} />
        <Content />
      </Canvas>
    </div>
  )
}