const strArray = ['4311o', 'th3r3', 'w0r1d'];

strArray.forEach(e => {
  const i = strArray.indexOf(e) + 1;
  setTimeout(() => {
    console.log(e);
  }, i * 1000);
});