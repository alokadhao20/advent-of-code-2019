const starMap = input.split('\n').reduce((map, data) => {
  map[data.split(')')[1]] = data.split(')')[0];
  return map;
}, {});

const getAncestorCount = body => {
  body in starMap ? 1 + getAncestorCount(starMap[body]) : 0
};

let result = Object.keys(starMap).reduce((sum, body) => {
  sum + getAncestorCount(body), 0);
}

console.log("Final result is - ",result);
