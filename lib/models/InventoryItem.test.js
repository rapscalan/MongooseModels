const InventoryItem = require('./InventoryItem');

describe('Inventory Item validate', () => {
  it('has a required item', ()=>{
    const inventoryItem = new InventoryItem();
    const { errors } = inventoryItem.validateSync();
    expect(errors.item.message).toEqual('Path `item` is required.');
  });

  it('has a required description', () => {
    const inventoryItem = new InventoryItem();
    const { errors } = inventoryItem.validateSync();
    expect(errors.description.message).toEqual('Path `description` is required.');
  });

  it('has a required productId', () => {
    const inventoryItem = new InventoryItem();
    const { errors } = inventoryItem.validateSync();
    expect(errors.productId.message).toEqual('Path `productId` is required.');
  });

  it('has a required numberInStock', ()=>{
    const inventoryItem = new InventoryItem();
    const { errors } = inventoryItem.validateSync();
    expect(errors.numberInStock.message).toEqual('Path `numberInStock` is required.');
  });
});
