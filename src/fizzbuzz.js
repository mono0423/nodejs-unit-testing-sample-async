module.exports = {
  checkFizz: async num => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(num % 3 == 0);
      }, 200);
    });
  },
  checkBuzz: async num => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(num % 5 == 0);
      }, 100);
    });
  },
  checkFizzBuzz: async num => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(num % 15 == 0);
      }, 500);
    });
  }
};