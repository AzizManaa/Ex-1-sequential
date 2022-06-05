const a = (cb) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cb(null, 1000));
    }, 1000)
  );
};

const b = (cb) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cb(null, 500));
    }, 500)
  );
};

function callSeq(arr, cb) {
  return Promise.all(arr).then((values) => { //we will have 2 sequential completition. For this reason, we can use Promise.all to assure that all callback is executed only when all of promises complete.
    cb(null, values);
  });
}

const log = (err, data) => {
  if (err) {
    // TODO: handle properly
    return console.log(err);
  }

  return data;
};

callSeq([a(log), b(log)], (err, res) => {
  console.log(res);
});
