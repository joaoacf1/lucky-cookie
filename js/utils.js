export function ramdomMessage(message) {
    const position = Math.floor(Math.random() * 10);
    const content = message[position];
    return content;
}