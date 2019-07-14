import SharedData from './SharedData';

const sharedData = new SharedData;

const shared = sharedData.get;

const setNamespace = sharedData.setNamespace;

const setSource = sharedData.setSource;

const setDefaultValue = sharedData.setDefaultValue;

export {
    shared,
    setNamespace,
    setSource,
    setDefaultValue,
};
