var LocalStore = [];
var ChaveStor = [];
// Atribuições de variaveis 

const Valor_input = document.querySelector(".the-input-one");

const Botao = document.querySelector(".the-button-one");

const Lista = document.querySelector(".the-list");


 //Funções

var cont = 0;
const Add=(event)=>{
  event.preventDefault();

  LocalStore.push(Valor_input.value);
  ChaveStor.push("nome"+[cont])
  localStorage.setItem(ChaveStor[cont],LocalStore[cont])
  cont++;

  const Div = document.createElement('div');
  Div.classList.add("the-div");

  const Li = document.createElement('li');
  Li.classList.add("the-list")
  Li.innerHTML = (Valor_input.value == "" ? alert("É preciso que informe uma tarefa para ser adicionada") : Valor_input.value);

  Div.appendChild(Li);

  // Aqui foi criado o botão de completado
  const tarefaCompleta=document.createElement('button');
  tarefaCompleta.classList.add("completed-btn");
  tarefaCompleta.innerHTML='<i class="fas fa-check"></i>'

  // Aqui foi criado o botão de excluir
  const excluirtarefa=document.createElement('button');
  excluirtarefa.classList.add("incompleted-btn");
  excluirtarefa.innerHTML='<i class="fas fa-trash"></i>'
 
  // Aqui foi a criação de uma outra div, para poder colocar os botões dentro dele
  const Div2 = document.createElement('div');
  Div2.classList.add("the-div2");

  // Aqui foi o adicionamento dos butões
  Div2.appendChild(tarefaCompleta);
  Div2.appendChild(excluirtarefa);

  Div.appendChild(Div2);

  Lista.appendChild(Div)

  Valor_input.value="";
  Valor_input.focus();
}

const deleteAndeCheck = (e) =>{

   const item = e.target;
   const Total = (item.parentElement).parentElement


   if(item.classList[0] === "incompleted-btn"){
    Total.classList.add('fall')
    Total.addEventListener("transitionend", ()=>{Total.remove()})

   }
   else if(item.classList[0] === "completed-btn"){
    Total.classList.toggle('completed')
   
   }
}

//Eventos

Botao.addEventListener("click",Add);
Lista.addEventListener("click",deleteAndeCheck);





