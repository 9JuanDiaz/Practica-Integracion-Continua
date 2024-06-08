// hello.test.js
const hello = require('./hello');

test('prints "¡Hola, mundo!" to the console', () => {
    const spy = jest.spyOn(console, 'log');
    hello();
    expect(spy).toHaveBeenCalledWith('¡Hola, mundo!');
});
