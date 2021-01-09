<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    


<?php

$curl = curl_init();

curl_setopt_array($curl, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_URL => 'https://www.google.com/recaptcha/api/siteverify',
    CURLOPT_POSTFIELDS => [
        'secret' => '6Ldl9iYaAAAAANQMEiVd99Rz8zSROU8ezhtRkFu_',
        'response' => $_POST['g-recaptcha-response'],
        'remoteip' => $_SERVER['REMOTE_ADDR']
    ]
]);

$response = json_decode(curl_exec($curl));
curl_close($curl);

if($response->success):
    echo "Pode tratar o formulário: ".$_POST['nome'];
else:
    echo '<script>alert("Não pode tratar o formuláro");
        window.history.back();
    </script>';
endif;
?>
</body>
</html>