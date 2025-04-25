<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    // Definir os detalhes do e-mail
    $to = "contacto@pedrolourenco.pt";  // O e-mail que receberá a mensagem
    $subject = "Novo contato de: " . $nome; // Assunto do e-mail
    $body = "Você recebeu uma nova mensagem de seu site:\n\n";
    $body .= "Nome: $nome\n";
    $body .= "Email: $email\n";
    $body .= "Mensagem: $mensagem\n";

    // Cabeçalhos do e-mail
    $headers = "From: $email" . "\r\n" . 
               "Reply-To: $email" . "\r\n" . 
               "Content-Type: text/plain; charset=UTF-8";

    // Enviar o e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Houve um erro ao enviar a mensagem.";
    }
}
?>
