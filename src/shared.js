import get from 'lodash/get';

export default (
    path = null,
    defaultValue = null,
    namespace = get(window, 'sharedDataNamespace', 'sharedData')
) => {
    return get(window, `${namespace}${path !== null ? `.${path}` : ''}`, defaultValue);
};
