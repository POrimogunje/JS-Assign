let data = [
    {
        name: 'LOWER COUNT',
        minValue: '0'
    },
    {
        name: 'ADD COUNT',
        maxValue: '50'
    }
]

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + '</div>';
});

 info.innerHTML = details.join('\n');