const btn = document.querySelector('button')
const title = document.querySelector('h1')
let clickNumber = 0;

btn.addEventListener('click', () => 
    {
    console.log('click en el boton')
    clickNumber++
    btn.textContent = `BOTON ${clickNumber}`
    title.style.color = 'grey'
    }
)

const input = document.querySelector('input')
input.addEventListener('keydown', (e) => {
    document.querySelector('#code').textContent = e.key.charCodeAt()
    document.querySelector('#string').textContent = e.code

})


const lista = document.querySelectorAll('.lista > li')

for(let i = 0; i < lista.length; i++){
    lista[i].addEventListener('click', () => {
        this.style.color = 'red'
        this.style.background = 'black'
    })
}

