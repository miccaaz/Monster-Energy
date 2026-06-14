export const flavors = [
  {
    id: 1,
    name: 'BAD APPLE',
    img: '../../assets/cans/bad-apple.png',
    description: 'Sabor clássico de maçã Fuji, é crocante, seca e não muito doce'
  },
  {
    id: 2,
    name: 'RIO PUNCH',
    img: '../../assets/cans/rio-punch.png',
    description: 'Creme de Papaya tropical com um toque de especiarias'
  },
  {
    id: 3,
    name: 'MANGO LOCO',
    img: '../../assets/cans/mango-loco.png',
    description: 'Suco de manga e mix de frutas cítricas naturais'
  },
  {
    id: 4,
    name: 'VIKING BERRY',
    img: '../../assets/cans/viking-berry.png',
    description: "Sabores de frutos silvestres com um toque único"
  }
]

export const getFlavorByIndex = (index) => flavors[index] ?? null

export const getFlavorById = (id) => flavors.find((flavor) => flavor.id === id) ?? null