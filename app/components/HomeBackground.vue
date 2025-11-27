<script setup lang="ts">
import * as THREE from 'three'

const canvasEl = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  console.log(canvasEl.value)
  if (!canvasEl.value) return

  const scene = new THREE.Scene()
  scene.background = null

  const camera = new THREE.PerspectiveCamera(
      75,
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

  const geometry = new THREE.BoxGeometry(2, 2, 2)

  const material = new THREE.MeshPhongMaterial({
    color: 0x888888,
    shininess: 30
  })

  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  const ambientLight = new THREE.AmbientLight(0x404040, 0.6); // Мягкое рассеянное освещение
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // Направленный свет
  directionalLight.position.set(3, 3, 3);
  scene.add(directionalLight)

  const animate = () => {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

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
