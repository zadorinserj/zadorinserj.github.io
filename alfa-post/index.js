const getElement = selector => document.querySelector(selector);
const getAllElements = list => list.map(item => getElement(item));

window.addEventListener('DOMContentLoaded', () => {
    const selectors = [
        '.js-form',
        '.js-cards',
        '.js-targets',
        '.js-server',
        '.js-query'
    ];

    const submit = getElement('.js-submit');

    submit.addEventListener('click', (event) => {
        event.preventDefault();
        const [form, card, target, server, query] = getAllElements(selectors);

        console.log(card.value, 'card');
        console.log(target.value, 'target');
        console.log(query.value, 'query');
        console.log(server.value, 'server');
        console.log(form, 'form');

        const action = `${server.value}?card=${card.value}&${query.value}`;

        form.setAttribute('action', action);
        form.setAttribute('target', target.value);
        // form.submit();
    });
});
