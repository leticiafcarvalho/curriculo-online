document.querySelectorAll('.experience-item h3').forEach(item => {
    item.addEventListener('click', event => {
        const parent = item.parentElement;
        const ul = parent.querySelector('ul');
        ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const experienceItems = document.querySelectorAll('.experience-item');

    experienceItems.forEach(item => {
        const description = item.querySelector('ul');
        description.style.display = 'none'; // Esconde a descrição inicialmente

        item.addEventListener('click', () => {
            // Alterna a visibilidade da descrição
            if (description.style.display === 'none') {
                description.style.display = 'block';
                item.style.cursor = 'default';
            } else {
                description.style.display = 'none';
                item.style.cursor = 'pointer';
            }
        });
    });
});
