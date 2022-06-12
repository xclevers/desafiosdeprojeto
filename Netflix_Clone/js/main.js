function principal(filme){
    var movie = "";
    var descricao = "";
    var locale = ""
     switch (filme){
        case 'morbius':
            movie = 'Morbius'
            descricao = 'Durante um experimento para encontrar a cura de uma rara doença sanguínea, o Dr. Michael Morbius acidentalmente se transforma num sanguinário vampiro.'
            locale = "linear-gradient(to left, transparent 0%, black 80%), url(../img/capa_morbius.jpg)";
            break
        case 'kardashians':
            movie = 'The Kardashians'
            descricao = 'A família que você conhece e adora está de volta com uma nova série, dando acesso total às suas vidas. Kris, Kourtney, Kim, Khloé, Kendall e Kylie trazem as câmeras de volta para revelar a verdade por trás das manchetes.'
            locale = "linear-gradient(to left, transparent 0%, black 80%), url(../img/capa_the_kardashians.jpg)";
            break
        case 'exorcism':
            movie = 'Exorcismo Sagrado';
            descricao = 'Ao ser possuído durante um ritual de exorcismo, o padre Peter Williams acabou cometendo um terrível sacrilégio. Dezoito anos depois, as consequências de seu pecado voltam para assombrá-lo e acabam desencadeando uma batalha ainda maior entre o bem e o mal.';
            locale = "linear-gradient(to left, transparent 0%, black 80%), url(../img/capa_the_exorcism_of_god.jpg)"
            break
        case 'palhaco':
            movie = 'Doutor Estranho'
            descricao = 'Após sua carreira ser destruída, um brilhante, porém arrogante, cirurgião ganha uma nova chance em sua vida quando um feiticeiro o treina para se tornar o Mago Supremo.'
            locale = "linear-gradient(to left, transparent 0%, black 80%), url(../img/capa_doutor_estranho.jpg)"
            break
        case 'passion':
            movie = 'Passion de Galvilanes'
            descricao = 'Três irmãos buscam vingança pela morte trágica de uma pessoa amada, mas acabam emocionalmente envolvidos com as filhas daqueles que julgam ser os responsáveis pelo caso.'
            locale = "linear-gradient(to left, transparent 0%, black 80%), url(../img/capa_passion_de_galvilanes.jpg)"
            break
        case 'sonic':
            movie = 'Sonic 2'
            descricao = 'Depois de se estabelecer em Green Hills, Sonic está pronto para mais liberdade e deixar sua marca como um herói, e Tom e Maddie concordam em deixá-lo em casa enquanto vão de férias. '
            locale = "linear-gradient(to left, transparent 0%, black 80%), url(../img/capa_sonic.jpg)"
            break
        case 'silverton':
            movie = 'Silverton: Cerco Fechado'
            descricao = 'Após o fracasso de uma missão de sabotagem, um trio de rebeldes contra o apartheid acaba em uma situação com reféns em um banco. Baseado em uma história real.'
            locale = "linear-gradient(to left, transparent 0%, black 80%), url(../img/capa_silverton.jpg)"
            break
        case 'twd':
            movie = 'The Walking Dead'
            descricao = 'Nos Estados Unidos pós-apocalíptico, um pequeno grupo de sobreviventes segue viajando à procura de uma nova casa longe dos mortos-vivos. O desespero por segurança e suprimentos os coloca constantemente à beira da sanidade.'
            locale = "linear-gradient(to left, transparent 0%, black 80%), url(../img/capa_twd.jpg)"
            break
        case 'halo':
            movie = 'Halo'
            descricao = 'Uma épica batalha acontece no durante o século XXVI entre a raça humana e uma espécie alienígena conhecida como Covenant.'
            locale = "linear-gradient(to left, transparent 0%, black 80%), url(../img/capa_halo.jpg)"
            break
        case 'batman':
            movie = 'Batman'
            descricao = 'Após dois anos espreitando as ruas como Batman e aterrorizando o mundo do crime, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City.'
            locale = "linear-gradient(to left, transparent 0%, black 80%), url(../img/capa_batman.jpg)"
            break
        case 'magia':
            movie = 'O Som da Magia'
            descricao = 'Um mágico misterioso que mora em um parque de diversões abandonado ensina sua arte para uma adolescente que enfrenta dificuldades na vida.'
            locale = "linear-gradient(to left, transparent 0%, black 80%), url(../img/capa_o_som_da_magia.jpg)";
            break
        default:
            movie = 'Morbius'
            descricao = 'Durante um experimento para encontrar a cura de uma rara doença sanguínea, o Dr. Michael Morbius acidentalmente se transforma num sanguinário vampiro.'
            locale = "linear-gradient(to left, transparent 0%, black 80%), url(../img/capa_morbius.jpg)";
    }

    document.getElementById("titulo").innerHTML = movie;
    document.getElementById("descricao").innerHTML = descricao;
    document.getElementById("filme-principal").style.backgroundImage = locale;


}