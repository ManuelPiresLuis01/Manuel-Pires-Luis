<?php
if (isset($_POST['btnEnviar'])) {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];
    $assunto = "email do meu portifolio";
    $meuEmail1 = "mpl31052001@gmail.com";
    $meuEmail2 = "mnls31052001@gmail.com";
    $meuEmail3 = "manuelpiresluis@gmail.com";

    header('location: ../../index.html');
}
?>