import SharedData from './SharedData';

const sharedData = new SharedData;

const shared = (...args) => sharedData.get(...args);

export {
    shared,
    sharedData,
};

export default shared;
