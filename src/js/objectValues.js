const cursoChave = Object.keys(cursos).map(chave => cursos[chave]);

console.log(cursoChave.map(curso => `lista: ${curso}`));


const cursosKeys = Object.values(cursos);

console.log(cursosKeys);

const $ = document.querySelector.bind(document);

const cursosInclude = Object.includes(cursosKeys)

$('.item-container').innerHTML = 
`<ul>
    ${cursosKeys.map(curso => `<li>${curso}</li>`)}
 </ul>`

