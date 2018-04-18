<?php

	$nombre = $_POST['nombre'];
	$apellido = $_POST['apellidos'];
	$email = $_POST['email'];
	$direccion = $_POST['direccion'];
	$comentario = $_POST['comentario'];

	$to = "info@rocnarf.com";
	$subject = "Dominal - Consultas desde la Web";
	$message = "<html>
				<head><title>Dominal - Consultas</title></head>
				<body>
					<section style='border: 1.4px solid #002e5b;'>
				      	<div style='height: 20em; padding: 0.5em;'>
				          	<h4 style='color: #002e5b; text-align: center;'>¡HOLA DOMINAL!</b></h4>
							<p style='color: #56585A;'>Nombre y Apellidos: ".$nombre." ".$apellido." </p><br>
							<p style='color: #56585A;'>Dirección: ".$direccion." </p><br>
							<p style='color: #56585A;'>Email: ".$email." </p><br>
							<p style='color: #56585A;'>Comentario: ".$comentario."</p><br>
						</div>
						<div  style='background-color: #06092C; padding: 1em;color: #fff; text-align: center;'>
				          <p>Este email es solo para tu informacón y no es necesario que lo respondas.<br> Si necesitas ayuda o tienes alguna sugerencia contáctate con nuestro servicio de atención al cliente.<br> Todos los derechos reservados.</p>
				      	</div>
				      	<div style='font-size: 12px; color: #000; padding-left: 2em; font-weight: bold;'>
				          <p>Un coordial saludo te desea. El Equipo de Dominal.</p>
				      	</div>
					</section>						
				</body>
				</html>";
	$headers = "MIME-Version: 1.0"."\r\n"; 
	$headers .= "Content-type: text/html; charset=utf-8"."\r\n";
	$headers .= "From: ".$email."\r\n" . "CC: ".$to;

	mail($to, $subject, $message, $headers);
	Header('Location: index.html');


?>