var heroes = [{
        _id: '90f5d2c7-5ce6-4528-9dc7-ca8297944870',
        number: 'ABC123',
        connected: true,
        vehicleId: 'YS2R4X20005399401',
        customer: {
            _id: 'e65035c9-1bb9-47ec-8885-9a2addcfb920',
            name: 'Kalles Grustransporter AB',
            address: 'Cementvägen 8, 111 11 Södertälje',
            __v: 0
        },
        lastSeen: 'Fri Dec 27 2019 12:38:22 GMT+0200 (Eastern European Standard Time)',
        __v: 0
    },
    {
        _id: 'b2aed90a-3800-43ab-a8f7-9864d93163e6',
        number: 'JKL012',
        connected: false,
        vehicleId: 'YS2R4X20005388011',
        customer: {
            _id: 'ed71aff3-4483-496d-b598-4597053a0007',
            name: 'Johans Bulk AB',
            address: 'Balkvägen 12, 222 22 Stockholm',
            __v: 0
        },
        lastSeen: 'Fri Dec 27 2019 12:38:22 GMT+0200 (Eastern European Standard Time)',
        __v: 0
    },
    {
        _id: '426bd619-76e7-416a-966d-5c852874e0ac',
        number: 'DEF456',
        connected: true,
        vehicleId: 'VLUR4X20009093588',
        customer: {
            _id: 'e65035c9-1bb9-47ec-8885-9a2addcfb920',
            name: 'Kalles Grustransporter AB',
            address: 'Cementvägen 8, 111 11 Södertälje',
            __v: 0
        },
        lastSeen: 'Fri Dec 27 2019 12:38:22 GMT+0200 (Eastern European Standard Time)',
        __v: 0
    },
    {
        _id: 'b59b738e-4361-420d-9645-020ce8f4a917',
        number: 'GHI789',
        connected: true,
        vehicleId: 'VLUR4X20009048066',
        customer: {
            _id: 'e65035c9-1bb9-47ec-8885-9a2addcfb920',
            name: 'Kalles Grustransporter AB',
            address: 'Cementvägen 8, 111 11 Södertälje',
            __v: 0
        },
        lastSeen: 'Fri Dec 27 2019 12:38:22 GMT+0200 (Eastern European Standard Time)',
        __v: 0
    },
    {
        _id: '1c6be062-1c66-45d0-b9a6-9b6693e6e167',
        number: 'PQR678',
        connected: false,
        vehicleId: 'VLUR4X20009048066',
        customer: {
            _id: 'fc9ab0f9-04fb-4bee-87fd-8ae53948ae57',
            name: 'Haralds Värdetransporter AB',
            address: 'Budgetvägen 1, 333 33 Uppsala',
            __v: 0
        },
        lastSeen: 'Fri Dec 27 2019 12:38:22 GMT+0200 (Eastern European Standard Time)',
        __v: 0
    },
    {
        _id: 'b0079b00-c2fc-435f-ad55-cbc9c274e0e2',
        number: 'STU901',
        connected: true,
        vehicleId: 'YS2R4X20005387055',
        customer: {
            _id: 'fc9ab0f9-04fb-4bee-87fd-8ae53948ae57',
            name: 'Haralds Värdetransporter AB',
            address: 'Budgetvägen 1, 333 33 Uppsala',
            __v: 0
        },
        lastSeen: 'Fri Dec 27 2019 12:38:22 GMT+0200 (Eastern European Standard Time)',
        __v: 0
    },
    {
        _id: '5a87a32e-d7f6-4d6a-abd5-f4483eb5241f',
        number: 'MNO345',
        connected: false,
        vehicleId: 'YS2R4X20005387949',
        customer: {
            _id: 'ed71aff3-4483-496d-b598-4597053a0007',
            name: 'Johans Bulk AB',
            address: 'Balkvägen 12, 222 22 Stockholm',
            __v: 0
        },
        lastSeen: 'Fri Dec 27 2019 12:38:22 GMT+0200 (Eastern European Standard Time)',
        __v: 0
    }
]
var marvelHeroes = heroes.filter(function (hero) {
    return hero.connected == true;
});

console.log(marvelHeroes)