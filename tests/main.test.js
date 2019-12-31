import set from 'lodash/set';
import shared from '../src/shared';

beforeEach(() => {
    delete window['App'];
    delete window['sharedData'];
    delete window['sharedDataNamespace'];
});

test('getting the value from existing path with default namespace', () => {
    set(window, 'sharedData.foo', 'bar');
    expect(shared('foo')).toBe('bar');
});

test('getting the value from existing path with custom namespace', () => {
    set(window, 'sharedDataNamespace', 'App');
    set(window, 'App.foo', 'bar');
    expect(shared('foo')).toBe('bar');
});

test('getting the value from non-existing path', () => {
    expect(shared('foo')).toBe(null);
});

test('getting the value from non-existing path with default value', () => {
    expect(shared('foo', 'bar')).toBe('bar');
});

test('getting the value from non-existing path with default value', () => {
    expect(shared('foo', 'bar')).toBe('bar');
});

test('getting the whole shared data', () => {
    set(window, 'sharedData.foo', 'bar');
    expect(shared()).toStrictEqual({ foo: 'bar' });
});
