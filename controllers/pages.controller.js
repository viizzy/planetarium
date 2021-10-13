const PLANETS = [
  {
    id: 1,
    name: 'Mercury',
    randomInfo: 'Mercury is the smallest and closest planet to the Sun in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes. Like Venus, Mercury orbits the Sun within Earths orbit as an inferior planet, and its apparent distance from the Sun as viewed from Earth never exceeds 28°.',
    distanceFromSun: '67.988 million km',
    distanceFromMoon: '36 miles',
    Color: 'Green planet'
  },
  {
    id: 2,
    name: 'Venus',
    randomInfo: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earths night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight. Venus lies within Earths orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a little while before dawn. Venus orbits the Sun every 224.7 Earth days with a rotation period of 243 Earth days.',
    distanceFromSun: '108.68 million km',
    distanceFromMoon: '286,500 km.',
    Color: 'White planet'
  },
  {
    id: 3,
    name: 'Earth',
    randomInfo: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earths surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans, seas, gulfs, and other salt water bodies, but also by lakes, rivers, and other fresh water, which together constitute the hydrosphere. Much of Earths polar regions are covered in ice. Earths outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years.',
    distanceFromSun: '149.11 million km',
    distanceFromMoon: '384,400 km',
    Color: 'Brown planet'
  },
  {
    id: 4,
    name: 'Mars',
    randomInfo: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet". The latter refers to the effect of the iron oxide prevalent on Mars surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere with surface features reminiscent of the impact craters of the Moon and the valleys.',
    distanceFromSun: '241.86 million km',
    distanceFromMoon: '382,900 km',
    Color: 'Red planet'
  },
  {
    id: 5,
    name: 'Jupiter',
    randomInfo: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined. Jupiter is the third-brightest natural object in the Earths night sky after the Moon and Venus. Jupiter is primarily composed of hydrogen, but helium comprises one quarter of its mass and one tenth of its volume. It likely has a rocky core of heavier elements,but like the other giant planets. ',
    distanceFromSun: '758.76 million km',
    distanceFromMoon: '386,000 km',
    Color: 'Yellow planet'

  }
];

exports.getIndexPage = (req, res, next) => {
  res.render('index', {
    pageTitle: 'Planetarium'
  });
};

exports.getPlanetsPage = (req, res, next) => {
  res.render('planets/planets', {
    pageTitle: 'Planets',
    planets: PLANETS
  });
};

exports.getPlanetDetails = (req, res, next) => {
  const id = req.params.id;
  const foundPlanet = PLANETS.find(planets => planets.id === +id);

  res.render('planets/planetDetails', {
    pageTitle: `Planet - ${foundPlanet.name}`,
    planet: foundPlanet
  });
};
