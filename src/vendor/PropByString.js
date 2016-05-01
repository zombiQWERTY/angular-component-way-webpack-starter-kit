const propByString = (o, s) => {
  s = s.replace(/\[(\w+)\]/g, '.$1');
  s = s.replace(/^\./, '');

  const a = s.split('.');
  let k;

  for (let i = 0, n = a.length; i < n; ++i) {
    k = a[i];
    if (!(k in o)) { return; }
    o = o[k];
  }
  return o;
};

export default propByString;
