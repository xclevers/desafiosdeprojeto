function principal(filme){
     switch (filme){
        case 'morbius':
            document.getElementById("titulo").innerHTML = 'Morbius'
            document.getElementById("descricao").innerHTML = 'Durante um experimento para encontrar a cura de uma rara doença sanguínea, o Dr. Michael Morbius acidentalmente se transforma num sanguinário vampiro.'
            document.getElementsByClassName("filme-principal")[0].style.backgroundImage = "url(../img/capa_morbius.jpg)";
            break
        case 'kardashians':
            document.getElementById("titulo").innerHTML = 'The Kardashians'
            document.getElementById("descricao").innerHTML = 'A família que você conhece e adora está de volta com uma nova série, dando acesso total às suas vidas. Kris, Kourtney, Kim, Khloé, Kendall e Kylie trazem as câmeras de volta para revelar a verdade por trás das manchetes.'
            document.getElementsByClassName("filme-principal")[0].setAttribute("style", "background-image: linear-gradient(to left, transparent 0%, black 80%), url(../img/capa_morbius.jpg)");
            break
        case 'exorcism':
            document.getElementById("titulo").innerHTML = 'Exorcismo Sagrado'
            document.getElementById("descricao").innerHTML = 'Ao ser possuído durante um ritual de exorcismo, o padre Peter Williams acabou cometendo um terrível sacrilégio. Dezoito anos depois, as consequências de seu pecado voltam para assombrá-lo e acabam desencadeando uma batalha ainda maior entre o bem e o mal.'
            break
        case 'palhaco':
            document.getElementById("titulo").innerHTML = 'Palhaço Assasino'
            document.getElementById("descricao").innerHTML = 'Ele circulava entre os poderosos, mas se aproveitava dos vulneráveis. Por trás da aparência alegre, havia toda a podridão de um sádico serial killer.'
            break
        case 'passion':
            document.getElementById("titulo").innerHTML = 'Passion de Galvilanes'
            document.getElementById("descricao").innerHTML = 'Três irmãos buscam vingança pela morte trágica de uma pessoa amada, mas acabam emocionalmente envolvidos com as filhas daqueles que julgam ser os responsáveis pelo caso.'
            break
        case 'sonic':
            document.getElementById("titulo").innerHTML = 'Sonic 2'
            document.getElementById("descricao").innerHTML = 'Depois de se estabelecer em Green Hills, Sonic está pronto para mais liberdade e deixar sua marca como um herói, e Tom e Maddie concordam em deixá-lo em casa enquanto vão de férias. '
            break
        case 'silverton':
            document.getElementById("titulo").innerHTML = 'Silverton: Cerco Fechado'
            document.getElementById("descricao").innerHTML = 'Após o fracasso de uma missão de sabotagem, um trio de rebeldes contra o apartheid acaba em uma situação com reféns em um banco. Baseado em uma história real.'
            break
        case 'twd':
            document.getElementById("titulo").innerHTML = 'The Walking Dead'
            document.getElementById("descricao").innerHTML = 'Nos Estados Unidos pós-apocalíptico, um pequeno grupo de sobreviventes segue viajando à procura de uma nova casa longe dos mortos-vivos. O desespero por segurança e suprimentos os coloca constantemente à beira da sanidade.'
            break
        case 'halo':
            document.getElementById("titulo").innerHTML = 'Halo'
            document.getElementById("descricao").innerHTML = 'Uma épica batalha acontece no durante o século XXVI entre a raça humana e uma espécie alienígena conhecida como Covenant.'
            break
        case 'batman':
            document.getElementById("titulo").innerHTML = 'Batman'
            document.getElementById("descricao").innerHTML = 'Após dois anos espreitando as ruas como Batman e aterrorizando o mundo do crime, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City.'
            break
        case 'magia':
            document.getElementById("titulo").innerHTML = 'O Som da Magia'
            document.getElementById("descricao").innerHTML = 'Um mágico misterioso que mora em um parque de diversões abandonado ensina sua arte para uma adolescente que enfrenta dificuldades na vida.'
            break
    }


}