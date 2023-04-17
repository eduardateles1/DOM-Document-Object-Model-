// @ts-nocheck
function createLabel(text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}
function createInput(id, value, name, type ='text', placeholder=''){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder

}
const addTechBtn = document.getElementById('addTech')
const forms = document.getElementById('cadastroDev')
const developers = [];
let inputRows = 0;

addTechBtn.addEventListener('click', function(){
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'inputRow' + rowIndex
    newRow.className='InputRow'

    const techNameLabel = createLabel('Nome: ', 'techName -' + rowIndex)
    const techNameInput = createInput('techName -' + rowIndex, null, 'techName')
    
    const expLabel =  createLabel =('Experiência: ')
    id1 = 'expRadio' + rowIndex + '.1'
    const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, radio)
    const expLabel1 = createLabel('0-2 anos', id1)

    id2 = 'expRadio' + rowIndex + '.2'
    const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, radio)
    const expLabel2 = createLabel('3-4 anos', id2)

    id3 = 'expRadio' + rowIndex + '.3'
    const expRadio3 = createInput(id1, '5+ anos', 'techExp-' + rowIndex, radio)
    const expLabel3 = createLabel('5+ anos', id3)

    const removeRowBtn =document.createElement('button')
    removeRowBtn.type ='button'
    removeRowBtn.innerText='Remover'
    removeRowBtn.addEventListener('click', function(){
        stackInputs.removeChild(newRow)
    })

    newRow.append(
        techNameLabel, techNameInput, expLabel, ExpRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
    )
    stackInputs.appendChild(newRow)
})

forms.addEventListener('submit', function (ev) {
    ev.preventDefault()
    const fullNameInput = document.getElementById('fullname')
    const inputRows = document.querySelectorAll('.inputRow')
    
    let technologies =[]
    inputRows.forEach(function (row){
        const techName = document.querySelector('#' + row.id + 'input[name ="techName"]'.value)
        const techExp = document.querySelector('#' + row.id + 'input[type ="radio"]:checked'.value)
        technologies.push({name: techName, exp: techExp})
    })
    const newDev = { fullname: fullNameInput.value, technologies: technologies}
    developers.push
    alert('Dev cadastrado com sucesso!')

    fullname.value='';
    inputRows.forEach(function (row){
        row.remove
    })
    console.log(developers)

})
