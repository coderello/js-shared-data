import get from 'lodash/get';

export default class SharedData {
    constructor() {
        this.setNamespace('sharedData');
        this.setDefaultValue(null);
        this.setSource(window);
    }

    setSource(source) {
        this._source = source;
    }

    setNamespace(namespace) {
        this._namespace = namespace;
    }

    setDefaultValue(defaultValue) {
        this._defaultValue = defaultValue;
    }

    get(path, defaultValue = this._defaultValue) {
        return get(this._source, `${this._namespace}.${path}`, defaultValue);
    }
}
