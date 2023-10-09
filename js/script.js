function calcCirculo(){
    var raioCirculo = document.getElementById("raio").value;

    raioCirculo = parseInt(raioCirculo);

    var area = (raioCirculo * raioCirculo) * Math.PI;

    document.getElementById("resultado").textContent = area.toFixed(2);
}

function calcTronco(){
    var baseMaior = document.getElementById("baseMaior").value;
    var baseMenor = document.getElementById("baseMenor").value;
    var areaLateral = document.getElementById("areaLateral").value;
    
    baseMaior = parseInt(baseMaior);
    baseMenor = parseInt(baseMenor);
    areaLateral = parseInt(areaLateral);

    var area = baseMaior + baseMenor + areaLateral;

    document.getElementById("resultado").textContent = area;
}

function calcRetangulo(){
    var ladoMaior = document.getElementById("ladoMaior").value;
    var ladoMenor = document.getElementById("ladoMenor").value;

    ladoMaior = parseInt(ladoMaior);
    ladoMenor = parseInt(ladoMenor);

    var result = ladoMaior * ladoMenor;

    document.getElementById("resultado").textContent = result;
}

function calcCoroa(){
    var raioExterno = document.getElementById("raioExterno").value;
    var raioInterno = document.getElementById("raioInterno").value;

    raioExterno = parseInt(raioExterno);
    raioInterno = parseInt(raioInterno);

    raioExterno = raioExterno * raioExterno;
    raioInterno = raioInterno * raioInterno;

    var area = (raioExterno - raioInterno) * Math.PI;

    document.getElementById("resultado").textContent = area.toFixed(2);
}

function calcTrapezoid(){
    var baseMaior = parseInt(document.getElementById("baseMaior").value);
    var baseMenor = parseInt(document.getElementById("baseMenor").value);
    var altura = parseInt(document.getElementById("alturaTrapezoid").value);

    var area = ((baseMaior + baseMenor) / 2) * altura;

    document.getElementById("resultado").textContent = area.toFixed(2);

}

function calcPoligon() {
    var choose = document.querySelector('input[name="choose"]:checked');
    var valorEscolhido = choose.value;
    var comprimentoLado = parseFloat(document.getElementById("comprimentoLado").value);

    var nLados, anguloInterno;
    
    if (valorEscolhido == "1") {
        nLados = 5;
    } else if (valorEscolhido == "2") {
        nLados = 6;
    } else if (valorEscolhido == "3") {
        nLados = 7;
    }

    anguloInterno = 360 / nLados;
    var apotema = (comprimentoLado / 2) * Math.tan(anguloInterno / 2);
    var areaTriangulo = (comprimentoLado * apotema) / 2;
    var areaTotal = areaTriangulo * nLados;

    document.getElementById("resultado").textContent = areaTotal.toFixed(2);
}

function calcQuadrado(){
    var lado = document.getElementById("ladoQuadrado").value;
    lado = parseInt(lado);

    var area = lado * lado;

    document.getElementById("resultado").textContent = area;
}

function calcSetorCircular(){
    var raioMaior = parseFloat(document.getElementById("raioMaior").value);
    var angulo = parseFloat(document.getElementById("angulo").value);
    var raioSetor = parseFloat(document.getElementById("raioSetor").value);
    
    var areaSetorCircular = (angulo/360) * Math.PI * raioSetor**2;
    


}