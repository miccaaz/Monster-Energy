export const flavors = [
  {
    id: 1,
    name: 'BAD APPLE',
    imgCan: '/images/cans/bad-apple.png',
    imgLogo: '/images/logos/bad-apple-logo.png',
    description: 'Sabor clássico de maçã Fuji, é crocante, seca e não muito doce',
    background: 'linear-gradient(125deg, #111111 10%, #73191A 73%, #D52124 100%)'

  },
  {
    id: 2,
    name: 'RIO PUNCH',
    imgCan: '/images/cans/rio-punch.png',
    imgLogo: '/images/logos/rio-punch-logo.png',
    description: 'Creme de Papaya tropical com um toque de especiarias',
    background: 'linear-gradient(125deg, #111111 10%, #19731C 73%, #21D521 100%)'

  },
  {
    id: 3,
    name: 'MANGO LOCO',
    imgCan: '/images/cans/mango-loco.png',
    imgLogo: '/images/logos/mango-loco-logo.png',
    description: 'Suco de manga e mix de frutas cítricas naturais',
    background: 'linear-gradient(125deg, #111111 10%, #196A73 73%, #21A5D5 100%)'

  },
  {
    id: 4,
    name: 'VIKING BERRY',
    imgCan: '/images/cans/viking-berry.png',
    imgLogo: '/images/logos/viking-berry-logo.png',
    description: "Sabores de frutos silvestres com um toque único",
    background: 'linear-gradient(125deg, #111111 10%, #73196A 73%, #218AD5 100%)'

  }
]

export const getFlavorByIndex = (index) => flavors[index] ?? null

export const getFlavorById = (id) => flavors.find((flavor) => flavor.id === id) ?? null