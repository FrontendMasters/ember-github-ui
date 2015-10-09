import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType){
    switch(requestType) {
      case 'findRecord':
      case 'queryRecord':
        payload.oldId = payload.id;
        payload.id = payload.login || payload.name;
        payload = { [`${primaryModelClass.modelName}`]: payload };
        break;
      case 'query':
      case 'findAll':
        const topLevelKey = Ember.Inflector.inflector.pluralize(primaryModelClass.modelName);
        payload = {
          [`${topLevelKey}`]: payload.map(raw => {
            raw.oldId = raw.id;
            raw.id = raw.login || raw.name;
            return raw
          })
        };
        break;
      default:
      debugger;
        // do nothing
        break;
    }

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
