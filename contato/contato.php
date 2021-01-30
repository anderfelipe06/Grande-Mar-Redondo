<?php

    include "conexao.inc";

    $nome=$_POST["nome"];
    $email=$_POST["email"];
    $comentario=$_POST["comentario"];

    $sql="INSERT INTO tb_contato (nome, email, comentario) VALUES('$nome','$email','$comentario')";
    $res=mysqli_query($con,$sql);
    $lin=mysqli_affected_rows($con);

    if ($lin == 1)
    {
        echo "<script>alert('Mensagem enviada!');</script>";
        echo "<script>setTimeout(\"location.href = 'contato.html';\",1500);</script>";

    }
    else
    {
        echo "<script>alert('Mensagem enviada!');</script>";
        echo "<script>setTimeout(\"location.href = 'contato.html';\",1500);</script>";
    }

    mysqli_close($con);



?>