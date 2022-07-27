// 

var result1 = [
  { id: 1, name: 'ramu' },
  { id: 2, name: 'mohan' },
  { id: 3, name: 'ramu' },
];

var result2 = [
    { id: 1, name: 'ramu' },
    { id: 3, name: 'ramu' },
];

var props = ['id', 'name'];

var result = result1
  .filter(function (o1) {
    return result2.some(function (o2) {
      return o1.id === o2.id;
    });
  })
  .map(function (o) {
    return props.reduce(function (newo, name) {
      newo[name] = o[name];
      return newo;
    }, {});
  });

document.body.innerHTML = '<pre>' + JSON.stringify(result, null, 4) + '</pre>';
