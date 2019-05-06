const mongoose = require('mongoose');
const Provider = require('../models/providerModel');
const Product = require('../models/productModel');

const dbProduct = 'providerData';
mongoose.connect(`mongodb://localhost/${dbProduct}`);

Provider.collection.drop();
Product.collection.drop();

const shop = [
  { establishmentName: 'De Pa Xocolata',
    address: {
      street: 'Carrer de la Marina,888',
      city: 'Barcelona',
      neighborhood: 'Poblenou'
    },
    contact: {
      email: null,
      phone: '911111'
    },
    product: [ {
      'name': 'croissant',
      'description': 'mini crossints',
      'allergens': 'egg, butter, milk, gluten',
      'pickup-time': '9:15pm'
    }
    ],
    password: '911111',
    picture: ' '
  },
  { establishmentName: 'SKI Coffee',
    address: {
      street: 'Career de Pamplona, 777',
      city: 'Barcelona',
      neighborhood: 'Poblenou'
    },
    contact: {
      email: null,
      phone: 922222
    },
    product: [ {
      'name': 'cup cakes',
      'description': 'Daily made cup cakes. They have been the shelf whole day,a bit dry.',
      'allergens': 'milk, eggs, gluten, butter',
      'pickup-time': '11:30pm'
    }
    ],
    password: '922222',
    picture: ' '
  },
  { establishmentName: 'Sport Bar',
    address: {
      street: 'Career de Pamplona, 999',
      city: 'Barcelona',
      neighborhood: 'Poblenou'
    },
    contact: {
      email: null,
      phone: '933333'
    },
    product: [ {
      'name': 'Bread',
      'description': 'cutted bread',
      'allergens': 'gluten, milk',
      'pickup-time': '12pm'
    }
    ],
    password: '933333',
    picture: ' '
  },
  { establishmentName: 'All you love is eat',
    address: {
      street: 'Carrer de la Marina, 555',
      city: 'Barcelona',
      neighborhood: 'Vila Olimpica'
    },
    contact: {
      email: null,
      phone: '944444'
    },
    product: [ {
      'name': 'Vegetable',
      'description': 'different type of vegetables',
      'allergens': 'none',
      'pickup-time': '11pm'
    }
    ],
    password: '944444',
    picture: ' '
  },
  { establishmentName: 'Yummy Sushi',
    address: {
      street: 'Avinguda Diagonal, 1111',
      city: 'Barcelona',
      neighborhood: 'Poblenou'
    },
    contact: {
      email: null,
      phone: '955555'
    },
    product: [ {
      'name': 'shushi rolls',
      'description': 'daily made shushi rolls',
      'allergens': 'fish',
      'pickup-time': '12pm'
    }
    ],
    password: '955555',
    picture: ' '
  }

];
