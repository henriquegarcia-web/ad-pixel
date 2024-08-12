export interface IPixelPanel {}

export interface IPixelGroup {
  pixelGroupId: string
  pixelGroupLabel: string
  pixelGroupData: IPixelPanel
}

const pixelsData: IPixelGroup[] = [
  {
    pixelGroupId: 'pixel-group-01',
    pixelGroupLabel: 'Natal',
    pixelGroupData: ''
  },
  {
    pixelGroupId: 'pixel-group-02',
    pixelGroupLabel: 'Porto Alegre',
    pixelGroupData: ''
  },
  {
    pixelGroupId: 'pixel-group-03',
    pixelGroupLabel: 'Curitiba',
    pixelGroupData: ''
  },
  {
    pixelGroupId: 'pixel-group-04',
    pixelGroupLabel: 'Florianópolis',
    pixelGroupData: ''
  },
  {
    pixelGroupId: 'pixel-group-05',
    pixelGroupLabel: 'São Paulo',
    pixelGroupData: ''
  },
  {
    pixelGroupId: 'pixel-group-06',
    pixelGroupLabel: 'Balneário Comburiú',
    pixelGroupData: ''
  }
]

export { pixelsData }
