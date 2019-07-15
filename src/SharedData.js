import get from 'lodash/get';

class SharedData {
    setSource(source) {
        this._source = source;
    }

    getSource() {
        return this.hasOwnProperty('_source') ? this._source : window;
    }

    setNamespace(namespace) {
        this._namespace = namespace;
    }

    getNamespace() {
        return this.hasOwnProperty('_namespace') ? this._namespace : 'sharedData';
    }

    setDefaultValue(defaultValue) {
        this._defaultValue = defaultValue;
    }

    getDefaultValue() {
        return this.hasOwnProperty('_defaultValue') ? this._defaultValue : null;
    }

    get(path, defaultValue = this.getDefaultValue()) {
        return get(this.getSource(), `${this.getNamespace()}.${path}`, defaultValue);
    }
}

export default SharedData;
