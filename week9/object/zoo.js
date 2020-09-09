/*
1. Objects 
  - Zoo exemple
2. Classes
3. Prototypes
*/

// factory function
function Dog(options) {
  return {
    rasa: options.rasa,
    culoare: options.culoare,
    vastra: options.vastra,
    nume: options.nume,
    latra: function () {
      console.log('woff ham', options)
    },
    mananca: function () {
      console.log('eat', options)
    },
    misca: function () {
      console.log('move', options)
    }
  }
}

const dog = Dog({
  rasa: 'ciobanesc',
  culoare: 'alb',
  vastra: '5',
  nume: 'Tobi',
})

const dog2 = Dog({
  rasa: 'pichinez',
  culoare: 'alb',
  vastra: '5',
  nume: 'Rex'
})

const dog3 = Dog({
  rasa: 'x',
  culoare: 'alb',
  vastra: '5',
  nume: 'R'
})

function Ornitoring(options) {
  this.culoare = options.culoare;
  this.vastra = options.vastra;
  this.nume = options;
}

Ornitoring.prototype.faceOua= function () {

}

Ornitoring.prototype.inoata= function () {

}

Ornitoring.prototype.mananca= function () {
 console.log('eat')
}

Ornitoring.prototype.zgomot= function () {

}

const ornitoring = new Ornitoring({
  culoare: 'maro',
  vastra: '10',
  nume: 'Ornii'
})
const ornitoring2 = new Ornitoring({
  culoare: '3',
  vastra: '10',
  nume: 'das'
})

const ornitoring = {
  culoare: 'maro',
  vastra: '10',
  nume: 'Ornii',
  faceOua: function () {

  },
  inoata: function () {

  },
  mananca: function () {
    console.log('eat')
  },
  zgomot: function () {

  }
}

const leu = {
  culoare: 'galben',
  vastra: '4',
  nume: 'Simba',
  areCoama: true,
  mananca: function () {
    console.log('eat')
  },
  misca: function () {
    console.log('move')
  },
  zgomot: function () {

  },
  vaneaza: function () {

  }
}