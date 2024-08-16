export interface Sticker {
  id: string
  creatorId: string
  totalPixels: number
  name: string
  link: string
  colorData: string[]
  // This will be an array representing
  // the color data of the sticker
  position: {
    x: number
    y: number
    width: number
    height: number
  } // Position and size of the sticker on the panel
}

const stickersData: Sticker[] = [
  {
    id: 'sticker1',
    creatorId: 'creator1',
    totalPixels: 100,
    name: 'Sticker 1',
    link: 'https://example.com/sticker1',
    colorData: Array(100).fill('red'), // A 10x10 red sticker
    position: { x: 0, y: 0, width: 10, height: 10 }
  },
  {
    id: 'sticker2',
    creatorId: 'creator2',
    totalPixels: 100,
    name: 'Sticker 2',
    link: 'https://example.com/sticker2',
    colorData: Array(100).fill('blue'), // A 10x10 blue sticker
    position: { x: 10, y: 0, width: 10, height: 10 }
  },
  {
    id: 'sticker3',
    creatorId: 'creator3',
    totalPixels: 100,
    name: 'Sticker 3',
    link: 'https://example.com/sticker3',
    colorData: Array.from({ length: 100 }, (_, i) =>
      i % 10 < 5 ? 'green' : 'yellow'
    ), // A 10x10 sticker with two colors
    position: { x: 20, y: 0, width: 10, height: 10 }
  }
]

export { stickersData }
