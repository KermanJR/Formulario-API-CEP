    
const value = document.querySelector('#cep');
const city = document.querySelector('#city');
const rua = document.querySelector('#rua');
const bairro = document.querySelector('#bairro');
const btn = document.querySelector('#btn');
const copyBtn = document.querySelector('.item-container-2 .copy');

function buscaCep(event){
    const cep = document.querySelector('#cep').value;
    const teste = fetch('https://brasilapi.com.br/api/cep/v1/' + cep);
    teste.then((response)=>{
        if(response.status != 404){
            teste.then((response)=>{
                return response.json();
            }).then((response)=>{
                city.value = response.city;
                estado.value = response.state;
                rua.value = response.street;
                bairro.value = response.neighborhood;
            });
        }else{
            console.log('Cep nao encontrado!');
        }
    })
}

function copyToClipboard(){
    var text1 = document.querySelector('.item-container-2 #city');
    var textoCopiado = navigator.clipboard.writeText(text1.value);
    alert("Texto copiado: " + text1.value);

}

copyBtn.addEventListener('click', copyToClipboard);
btn.addEventListener('click', buscaCep);