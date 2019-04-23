import SharedData from './SharedData';

export default function shared(...args) {
    return SharedData.get(...args);
}
