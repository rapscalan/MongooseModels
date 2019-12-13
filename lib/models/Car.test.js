const Car = require('./Car');

describe('Car validate', ()=> {
  it('has a required make', ()=>{
    const car = new Car();
    const { errors } = car.validateSync();
    expect(errors.make.message).toEqual('Path `make` is required.');
  });
  it('has a required model', ()=>{
    const car = new Car();
    const { errors } = car.validateSync();
    expect(errors.model.message).toEqual('Path `model` is required.');
  });
  it('has a required year', ()=>{
    const car = new Car();
    const { errors } = car.validateSync();
    expect(errors.year.message).toEqual('Path `year` is required.');
  });
  it('has a required fuel type', ()=>{
    const car = new Car();
    const { errors } = car.validateSync();
    expect(errors.fuelType.message).toEqual('Path `fuelType` is required.');
  });
});
