var radiologia = [
    {
        hora : '11:00',
        especialista : 'Ignacio Schulz',
        paciente : 'Francisca Rojas',
        rut : '9878782-1',
        prevision : 'FONASA',
    },
    {
        hora : '11:30',
        especialista : 'federico Subercaseaux',
        paciente : 'Pamela Estrada',
        rut : '15345241-3',
        prevision : 'ISAPRE',
    },
    {
        hora : '15:00',
        especialista : 'Fernando Wurthz',
        paciente : 'Armando Luna',
        rut : '16445345-9',
        prevision : 'ISAPRE',
    },
    {
        hora : '15:30',
        especialista : 'Ana Maria Godoy',
        paciente : 'Manuel Godoy',
        rut : '17666419-0',
        prevision : 'FONASA',
    },
        {
        hora : '16:00',
        especialista : 'Patricia Suazo',
        paciente : 'Ramon Ulloa',
        rut : '14989389-k',
        prevision : 'FONASA',
    },
]

var traumatologia = [
    consulta1 = {
        hora : '8:00',
        especialista : 'MARIA PAZ ALTUZARRA',
        paciente : 'PAULA SANCHEZ',
        rut : '15554774-5',
        prevision : 'FONASA',
    },
    consulta2 = {
        hora : '10:00',
        especialista : 'Raul Araya',
        paciente : 'Angelica Navas',
        rut : '15444147-9',
        prevision : 'ISAPRE',
    },
    consulta3 = {
        hora : '10:30',
        especialista : 'Maria Arriagada',
        paciente : 'Ana Klapp',
        rut : '17879423-9',
        prevision : 'ISAPRE',
    },
    consulta4 = {
        hora : '11:00',
        especialista : 'Alejandro Badilla',
        paciente : 'Felipe Mardonez',
        rut : '1547423-6',
        prevision : 'ISAPRE',
    },
    consulta5 = {
        hora : '11:30',
        especialista : 'Cecilia Budnik',
        paciente : 'Diego Marre',
        rut : '16554741-k',
        prevision : 'FONASA',
    },
    consulta6 = {
        hora : '12:00',
        especialista : 'Arturo Gavagnaro',
        paciente : 'Cecilia Mendez',
        rut : '9747535-8',
        prevision : 'ISAPRE',
    },
    consulta7 = {
        hora : '12:30',
        especialista : 'Andres Kanacri',
        paciente : 'Marcial Suazo',
        rut : '11254785-5',
        prevision : 'Isapre',
    },
]

var dental = [{
    hora: "8:30",
    especialista: "Andrea Zuñiga",
    paciente: "Marcela Retamal",
    rut: "11123425-6",
    prevision: "ISAPRE",
    },
    {hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
    },
    {hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
    },
    {hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
    },
    {
    hora: "13:30",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
    },
    {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
    },
]
// Primer y ultimo paciente
var primeraAtencion1 = document.getElementById('tabla11')
var primeraAtencion2 = document.getElementById('tabla12')
var primeraAtencion3 = document.getElementById('tabla13')
primeraAtencion1.innerHTML = `Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision}|Última atención: ${radiologia[4].paciente} - ${radiologia[4].prevision}`
primeraAtencion2.innerHTML = `Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision}|Última atención: ${traumatologia[6].paciente} - ${traumatologia[6].prevision}`
primeraAtencion3.innerHTML = `Primera atención: ${dental[0].paciente} - ${dental[0].prevision}|Última atención: ${dental[5].paciente} - ${dental[5].prevision}`
// Tabla 1
var tabla1 = document.getElementById('tabla1')
var fila1 = ''
for (var i=0;i<radiologia.length;i++){

    fila1 += `<tr>
                <td>${radiologia[i].hora}</td>
                <td>${radiologia[i].especialista}</td>
                <td>${radiologia[i].paciente}</td>
                <td>${radiologia[i].rut}</td>
                <td>${radiologia[i].prevision}</td>
            </tr>`
}
var documentofinal1 = 
        `<table class="table">
            <tr  class="table-dark">
                <th>Hora</th>
                <th>Especialista</th>
                <th>Paciente</th>
                <th>RUT</th>
                <th>Prevision</th>
            </tr>
                ${fila1}
        </table>`
tabla1.innerHTML = documentofinal1
// Tabla2
var tabla2 = document.getElementById('tabla2')
var fila2 = ''
for (var i=0;i<traumatologia.length;i++){

    fila2 += `<tr>
                <td>${traumatologia[i].hora}</td>
                <td>${traumatologia[i].especialista}</td>
                <td>${traumatologia[i].paciente}</td>
                <td>${traumatologia[i].rut}</td>
                <td>${traumatologia[i].prevision}</td>
            </tr>`
}
var documentofinal2 = 
        `<table class="table">
            <tr  class="table-dark">
                <th>Hora</th>
                <th>Especialista</th>
                <th>Paciente</th>
                <th>RUT</th>
                <th>Prevision</th>
            </tr>
                ${fila2}
        </table>`
tabla2.innerHTML = documentofinal2
// Tabla 3
var tabla3 = document.getElementById('tabla3')
var fila3 = ''
for (var i=0;i<dental.length;i++){

    fila3 += `<tr>
                <td>${dental[i].hora}</td>
                <td>${dental[i].especialista}</td>
                <td>${dental[i].paciente}</td>
                <td>${dental[i].rut}</td>
                <td>${dental[i].prevision}</td>
            </tr>`
}
var documentofinal3 = 
    `<table class="table">
        <tr  class="table-dark">
            <th>Hora</th>
            <th>Especialista</th>
            <th>Paciente</th>
            <th>RUT</th>
            <th>Prevision</th>
        </tr>
                ${fila3}
    </table>`
tabla3.innerHTML = documentofinal3
