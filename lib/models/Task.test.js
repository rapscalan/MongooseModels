const Task = require('./Task');

describe('Task Model', ()=>{
  it('has a required name', ()=>{
    const task = new Task();
    const { errors } = task.validateSync();
    expect(errors.name.message).toEqual('Path `name` is required.');
  });
  it('has a required recurring', ()=> {
    const task = new Task();
    const { errors } = task.validateSync();
    expect(errors.recurring.message).toEqual('Path `recurring` is required.');
  });
  it('has a required reminderTime', ()=>{
    const task = new Task();
    const { errors } = task.validateSync();
    expect(errors.reminderTime.message).toEqual('Path `reminderTime` is required.');
  });
});
