export default class SharedData {
    static namespace(namespace) {
        this._namespace = namespace;
    }

    static get(path, defaultValue = null) {
        const parts = path.split('.');
        parts.unshift(this._namespace || 'sharedData');

        let current = window;

        for (let part of parts) {
            try {
                current = current[part];

                if (current === null || current === undefined) {
                    return defaultValue;
                }
            } catch (e) {
                return defaultValue;
            }
        }

        return current;
    }
}
