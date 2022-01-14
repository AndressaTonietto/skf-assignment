export const menuItems = [
  {
    name: 'Europe',
    children: [
      {
        name: 'Sweden',
        children: [
          { label: 'Gothenburg', path: '/gothenburg' },
          { label: 'Stockholm', path: '/stockholm' },
        ],
      },
      {
        name: 'Germany',
        children: [{ label: 'Berlin', path: '/berlin' }],
      },
    ],
  },
  {
    name: 'South America',
    children: [
      {
        name: 'Brazil',
        children: [
          {
            name: 'Paraná',
            children: [{ label: 'Curitba', path: '/curitiba' }],
          },
          {
            name: 'Minas Gerais',
            children: [{ label: 'Ituiutaba', path: '/ituiutaba' }],
          },
        ],
      },
    ],
  },
];
