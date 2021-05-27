function valida (){
	var nome = document.getElementById('nome');
               


	if (nome.value==""){
		alert("campo nome não pode estar em branco.");
	}

else{
	alert(nome.value +", nenhum problema foi detectado.seu formulário pode ser enviado com sucesso.");

}
}