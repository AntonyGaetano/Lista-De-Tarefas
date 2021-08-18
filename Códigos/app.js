
// Atribuições de variaveis 

const Valor_input = document.querySelector(".the-input-one");

const Botao = document.querySelector(".the-button-one");

const Lista = document.querySelector(".the-list");

const Add=(event)=>{
  event.preventDefault();

  const Div = document.createElement('div');
  Div.classList.add("the-div");

  const Li = document.createElement('li');
  Li.classList.add("the-list")
  Li.innerHTML = "Deus da minhavida";

  Div.appendChild(Li);

  const tarefaCompleta=document.createElement('button');
  tarefaCompleta.classList.add("completed-btn");
  tarefaCompleta.innerHTML='<i class="fas fa-check"></i>'
  Div.appendChild(tarefaCompleta);

  const excluirtarefa=document.createElement('button');
  excluirtarefa.classList.add("incompleted-btn");
  excluirtarefa.innerHTML='<i class="fas fa-trash"></i>'
  Div.appendChild(excluirtarefa);

  Lista.appendChild(Div)
}

//Eventos

Botao.addEventListener("click",Add);

//Funções

