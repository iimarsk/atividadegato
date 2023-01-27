//criar variáveis

var gato;
var gatoImg;
var chao;

//função que carrega imagens
function preload()
{
    //carregar imagens
    gatoImg = loadImage("gato.png");
}


//função que inicializa o arquivo
function setup()
{
    //cria tamanho do fundo da tela
    createCanvas(1325, 600);
    //criar sprites
    gato = createSprite(655,470,20,20);
    //adicionar imagem
    gato.addImage(gatoImg);
    //colocar tamanho
    gato.scale = 0.5;

    chao = createSprite(655,590,700,20);
                    // x, y, larg, altu
    // chao.visible = false;
}


//função que executa o programa até que seja
function draw()
{
    //colocar cor de fundo
    background("green");
    //condição para pular
    if(keyDown("space")){
        gato.velocityY = -6
    }

    gato.velocityY = gato.velocityY + 0.5;
    gato.collide(chao);

    chao.velocityX = -2;
    if(chao.x <0){
        chao.x = chao.width/4;
    }
    //exibirntexto de instrução
    //comando que desenha sprites
    drawSprites();
}
