
function iniciarTime(iniciaJogo: boolean){
    let nome: string = 'Messi e amigos';
    let cidade: string = 'em São Paulo';
    if(iniciaJogo){
        cidade = 'em Uberlândia';
    }

    console.log(`${nome} vão jogar ${cidade}`);     
}

iniciarTime(true);

