const generateRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
export const rowData = [
  {
    id: 1,
    brand: 'Brand A',
    description: 'Description A',
    members: ['/pfp.jpg', '/potrait2.jpg', '/potrait3.jpg'],
    categories: [{ title: 'Category C', color: generateRandomColor() }],
    tags: ['Tag C', 'Tag D', 'Tag E'],
    nextMeeting: { title: 'in 10 Minutes', color: generateRandomColor() },
  },
  {
    id: 2,
    brand: 'Brand B',
    description: 'Description B',
    members: [
      '/pfp.jpg',
      '/potrait2.jpg',
      '/potrait3.jpg',
      '/potrait4.jpg',
      '/potrait5.jpg',
      '/potrait6.jpg',
    ],
    categories: [
      { title: 'Category A', color: generateRandomColor() },
      { title: 'Category B', color: generateRandomColor() },
    ],
    tags: ['Tag A', 'Tag B', 'Tag B', 'Tag B', 'Tag B', 'Tag B', 'Tag B'],
    nextMeeting: { title: 'in 30 Minutes', color: generateRandomColor() },
  },
]
