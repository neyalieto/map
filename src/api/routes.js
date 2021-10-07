const mockData = [
    {
        id: 1,
        name: 'Барселона',
        country: 'es',
        coordinates: [41.390205, 2.154007],
        link: '#1',
    },
    {
        id: 2,
        name: 'Андорра-ла-Велья',
        country: 'ad',
        coordinates: [42.5063039, 1.5196113],
        link: '#2',
    },
    {
        id: 3,
        name: 'Эскальдес-Энгордань',
        country: 'ad',
        coordinates: [42.51183, 1.5365334],
        link: '#3',
    },
    {
        id: 4,
        name: 'Валенсия',
        country: 'es',
        coordinates: [39.4695235, -0.3778851],
        link: '#4',
    },
    {
        id: 5,
        name: 'Пальма',
        country: 'es',
        coordinates: [39.570743, 2.649115],
        link: '#5',
    },
    {
        id: 6,
        name: 'Мадрид',
        country: 'es',
        coordinates: [40.4381311, -3.8196197],
        link: '#6',
    },
    {
        id: 7,
        name: 'Кордова',
        country: 'es',
        coordinates: [37.8916069, -4.8195047],
        link: '#7',
    },
    {
        id: 8,
        name: 'Севилья',
        country: 'es',
        coordinates: [37.3892874, -5.9897966],
        link: '#8',
    },
];

export const getRoutes = () => new Promise(resolve => resolve(mockData));
