const curso = {
    node: 80,
    angular: 70,
    react: 50,
    backbone: 80
}


const cursoChaves = Object.entries(curso);

cursoChaves.map(curso => console.log(`${curso[0]} ${curso[1]}`));