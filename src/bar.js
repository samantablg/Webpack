export default function bar() {
    console.log('Hello');
}

export function defaultParameters(height, color = '#FF0000') {
    console.log('Default parameters', height, color);
}