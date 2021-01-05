export function disableInput(elem, disable) {
    if (elem instanceof HTMLDocument || typeof disable !== 'boolean') {
        throw new Error(
            'Function expects a DOM element and boolean condition: disableInput(elem, disable)'
        );
    }
    elem.disabled = disable;
    elem.style.opacity = disable ? 0.4 : 1;
}