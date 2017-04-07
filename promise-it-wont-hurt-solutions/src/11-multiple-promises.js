all = (promise1, promise2) => {
  return new Promise((resolve, reject) => {
    var counter = 0
    var promise3 = []

    promise1.then(value => {
      promise3[0] = value
      counter++

      if (counter === 2) {
        resolve(promise3)
      }
    })

    promise2.then(value => {
      promise3[1] = value
      counter++

      if (counter === 2) {
        resolve(promise3)
      }
    })
  })
}

all(getPromise1(), getPromise2())
  .then(console.log)