let banco = typeof window.banco !== "undefined" ? window.banco : [];

// 🔀 Función para mezclar
function mezclar(array){
    return array.sort(() => Math.random() - 0.5);
}

// ⚙️ CONFIGURACIÓN (AQUÍ CONTROLAS TODO)
const CONFIG = {
    cantidad: 60  // 👈 SOLO ESTO CAMBIAS
};

// 🎯 Selección de preguntas
let preguntas = mezclar([...banco]).slice(0, CONFIG.cantidad);

// 🔥 Reordenar opciones sin perder la correcta
preguntas.forEach(p=>{
    let correctaOriginal = p.correcta;

    let ops = p.opciones.map((op,i)=>({op,i}));
    ops = mezclar(ops);

    p.opciones = ops.map(o=>o.op);

    p.correcta = ops.findIndex(o=>o.i === correctaOriginal);
});

let actual = 0;
let correctas = 0;
let respondida = false;

// 📌 Cargar pregunta
function cargar(){

    if(preguntas.length === 0){
        alert("❌ No hay preguntas cargadas");
        return;
    }

    respondida = false;

    let p = preguntas[actual];

    document.getElementById("pregunta").innerText = p.pregunta;
    document.getElementById("contador").innerText = `Pregunta ${actual+1} de ${preguntas.length}`;

    // 🔥 Barra corregida
    document.getElementById("barra").style.width = ((actual + 1)/preguntas.length)*100 + "%";

    let opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = "";

    p.opciones.forEach((op,i)=>{
        opcionesDiv.innerHTML += `<button onclick="responder(this,${i})">${op}</button>`;
    });
}

// ✅ Responder
function responder(btn,i){
    if(respondida) return;
    respondida = true;

    let p = preguntas[actual];
    let botones = document.querySelectorAll("#opciones button");

    botones.forEach((b,index)=>{
        if(index === p.correcta) b.classList.add("correct");
        else if(index === i) b.classList.add("incorrect");
    });

    if(i === p.correcta) correctas++;
}

// ➡️ Siguiente pregunta
function siguiente(){
    actual++;

    if(actual < preguntas.length){
        cargar();
    }else{
        finalizar();
    }
}

// 💾 Guardar local (opcional)
function guardarResultadoLocal(resultado){
    let lista = JSON.parse(localStorage.getItem("resultados")) || [];
    lista.push(resultado);
    localStorage.setItem("resultados", JSON.stringify(lista));
}

// 🏁 Finalizar
function finalizar(){
    let puntaje = Math.round((correctas / preguntas.length) * 100);

    let resultado = {
        nombre: localStorage.getItem("nombre"),
        grupo: localStorage.getItem("grupo"),
        puntaje: puntaje,
        fecha: new Date().toLocaleString()
    };

    guardarResultadoLocal(resultado);

    if(puntaje >= 90){
        alert("✅ Aprobado, resultado guardado");
    }else{
        alert("❌ Reprobado, intenta nuevamente");
    }

    window.location.replace("index.html");
}

// 🚀 Inicio
window.onload = cargar;