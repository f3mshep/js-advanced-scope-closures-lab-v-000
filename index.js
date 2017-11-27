function produceDrivingRange(blockRange) {

  return function (streetA, streetB) {

    let difference = Math.abs( parseInt(streetA) - parseInt(streetB) )
    if (difference > blockRange){
      return `${difference - blockRange} blocks out of range`
    }
    else {
      return `within range by ${blockRange - difference}`
    }
  }
}

function produceTipCalculator(percent){
  return function (blingBling){
    return blingBling * percent
  }
}

function createDriver(){

  let driverId = 0

  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }

}

const Driver = createDriver()