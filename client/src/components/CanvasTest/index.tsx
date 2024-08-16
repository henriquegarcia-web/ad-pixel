import React, { useRef, useEffect } from 'react'
import { stickersData } from '@/data/stickers'

const CanvasTest: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        // Defina a largura e altura reais do canvas
        const scale = window.devicePixelRatio || 1
        canvas.width = 500 * scale
        canvas.height = 500 * scale
        ctx.scale(scale, scale)

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        stickersData.forEach((sticker) => {
          const { x, y, width, height } = sticker.position
          const pixelSize = 1 // Ajuste o tamanho do pixel conforme necessário

          // Desenhe cada pixel
          sticker.colorData.forEach((color, index) => {
            const px = (index % width) * pixelSize
            const py = Math.floor(index / width) * pixelSize
            ctx.fillStyle = color
            ctx.fillRect(
              x * pixelSize + px,
              y * pixelSize + py,
              pixelSize,
              pixelSize
            )
          })
        })
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: 'auto' }} // Ajusta o tamanho do canvas de acordo com o container
    />
  )
}

export default CanvasTest
