<script setup lang="ts">
import * as THREE from 'three'

const canvasEl = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  console.log(canvasEl.value)
  if (!canvasEl.value) return

  const scene = new THREE.Scene()
  scene.background = null

  const camera = new THREE.PerspectiveCamera(
      90,
      canvasEl.value.clientWidth / canvasEl.value.clientHeight,
      0.1,
      1000
  )
  camera.position.z = 5

  const renderer = new THREE.WebGLRenderer({
    canvas: canvasEl.value,
    antialias: true,
    alpha: true
  })
  renderer.setSize(canvasEl.value.clientWidth, canvasEl.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const geometry = new THREE.BoxGeometry(3, 3, 3)

  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shininess: 50
  })

  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  const ambientLight = new THREE.AmbientLight(0xcceeff, 1); // Мягкое рассеянное освещение https://ru.hexcolor16.com/e1f3fa
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffeebb, 1); // Направленный свет
  directionalLight.position.set(3, 3, 3);
  scene.add(directionalLight)

  const animate = () => {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.001
    cube.rotation.y += 0.001

    renderer.render(scene, camera)
  }

  const handleResize = () => {
    const width = canvasEl.value!.clientWidth
    const height = canvasEl.value!.clientHeight

    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }

  window.addEventListener('resize', handleResize)
  animate()
})
</script>

<template>
  <canvas
      ref="canvasEl"
      class="w-screen h-screen fixed inset-0"
  />
</template>
