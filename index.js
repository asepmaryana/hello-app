console.log('Hello Apps...');

function hello(name) {
    console.log(`Hello ${name ?? 'World.'}`);
}

function today() {
    console.log(`Today is ${new Date()}`);
}

function upperCase(name) {
    return name.toUpperCase();
}

hello('Developer');
today();
