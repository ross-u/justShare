const mongoose = require('mongoose');
const Provider = require('../models/user');

const dbName = 'providerData';
mongoose.connect(`mongodb://localhost/${dbName}`);

const shop = [
  { establishmentName: 'De Pa i Xocolata',
    address: {
      street: 'Carrer de la Marina,92',
      city: 'Barcelona',
      neighborhood: 'Poblenou'
    },
    contact: {
      email: null,
      phone: '933208149'
    },
    password: '933208149'
  },
  { establishmentName: 'SKYE Coffee Co.',
    address: {
      street: 'Career de Pamplona, 88',
      city: 'Barcelona',
      neighborhood: 'Poblenou'
    },
    contact: {
      email: null,
      phone: null
    },
    password: 'skye-coffee'
  },
  { establishmentName: 'Sonora Sport Tavern',
    location: {
      type: 'Point',
      coordinates: [41.3975248, 2.1910079],
    }
      address: {
      street: 'Career de Pamplona, 96',
      city: 'Barcelona',
      neighborhood: 'Poblenou'
    },
    contact: {
      email: null,
      phone: '933003369'
    },
    password: '933003369'
  },
  { establishmentName: 'All you eat is love',
    address: {
      street: 'Carrer de la Marina, 52',
      city: 'Barcelona',
      neighborhood: 'Vila Olimpica'
    },
    contact: {
      email: null,
      phone: '931583974'
    },
    password: '931583974'
  },
  { establishmentName: 'Teng Sushi',
    address: {
      street: 'Avinguda Diagonal, 151',
      city: 'Barcelona',
      neighborhood: 'Poblenou'
    },
    contact: {
      email: null,
      phone: '93122475'
    },
    password: '931224750'
  }

];

Provider.create(shop, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${shop.length} shop`);
  mongoose.connection.close();
});
