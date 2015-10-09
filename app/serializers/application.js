import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse (store, primaryModelClass, payload,
                      id, requestType) {

    let tlk;
    switch(requestType) {
      case 'query':
        tlk = Ember.Inflector.inflector.pluralize(primaryModelClass.modelName);
        payload = payload.map((rawItem) => {
          rawItem.oldId = rawItem.id;
          rawItem.id = rawItem.login || rawItem.name;
          return rawItem;
        });
        break;
      case 'queryRecord':
        tlk = Ember.Inflector.inflector.singularize(primaryModelClass.modelName);
        payload.oldId = payload.id;
        payload.id = payload.login || payload.name;
        break;
      default:
        debugger;
    }

    return this._super(store, primaryModelClass,
      {[`${tlk}`]: payload}, id, requestType);
  }
});
