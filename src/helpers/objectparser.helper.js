
module.exports = (entity, object) => {
  let obj = new Object();
  Object.entries(object).forEach(value => {
    entity[value[0]]= value[1];
    Object.assign(obj, entity);
    entity = [];
  });
  return obj;
};