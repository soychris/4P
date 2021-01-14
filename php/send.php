<?php

require("PHPMailer/PHPMailer-master/src/PHPMailer.php");
require("PHPMailer/PHPMailer-master/src/SMTP.php");
require("PHPMailer/PHPMailer-master/src/Exception.php");


$tipopersona = htmlentities ($_POST['tipopersona']);
$nombre = htmlentities ($_POST['nombre']);
$apellidos = htmlentities ($_POST['apellidos']);
$estado = htmlentities ($_POST['estados']);
$telefono = htmlentities ($_POST['telefono']);
$email = htmlentities ($_POST['email']);


if (isset ($_POST['motivo'])){
    $motivo = htmlentities ($_POST['motivo']);
}

if (isset ($_POST['comentarios'])){

    $mensaje = htmlentities ($_POST['comentarios']);

}
//$archivo = 'cvEber.pdf';

$correogenerico = "christian.rj@live.com";
if($nombre == "" || $apellidos == "" ||  $telefono == "" || $email == ""):
    
    echo '<div class = "alert alert-danger">Todos lo campos son requeridos</div>';

else:

    if ($motivo == "Cotizar"){
        $submotivo = htmlentities ($_POST['submotivo']);
        echo'<script type="text/javascript">
           alert("Mensaje enviado,¡Gracias por visitarnos! Te contactaremos pronto.. ");
        </script>'; 
        switch($submotivo){

            case "particular":

                $email_user = "sistemas.cdmx@gmail.com";
                $email_password = "watchD0g.";
                $the_subject = $motivo;
                $address_to = $correogenerico;
                $phone_user = $telefono;
                $message_user = $mensaje;
                $from_name = $nombre . " ".$apellidos;
                $phpmailer = new PHPMailer\PHPMailer\PHPMailer();
                // ---------- datos de la cuenta de Gmail -------------------------------
                $phpmailer->Username = $email_user;
                $phpmailer->Password = $email_password; 
                //-----------------------------------------------------------------------
                //$phpmailer->SMTPDebug = 1;
                $phpmailer->SMTPSecure = 'ssl';
                $phpmailer->Host = "smtp.gmail.com"; // GMail
                $phpmailer->Port = 465;
                $phpmailer->IsSMTP(); // use SMTP
                $phpmailer->SMTPAuth = true;
                $phpmailer->setFrom($phpmailer->Username,$from_name);
                $phpmailer->AddAddress($address_to); // recipients email
                $phpmailer->Subject = $the_subject;
                $phpmailer->Body .="<h3 style='color:#1c4387;'>Tipo de cliente:</h3>";
                $phpmailer->Body .= $tipopersona;
                $phpmailer->Body .="<h3 style='color:#1c4387;'>Mensaje del cliente:</h3>";
                $phpmailer->Body .= $message_user;
                $phpmailer->Body .="<h3 style='color:#1c4387;'>Datos de contacto del cliente:</h3>";
                $phpmailer->Body .= "<p style = 'color:#666769;'>E-mail Cliente: $email</p>" ."<p style = 'color:#666769;'>Tel. Cliente: $telefono</p>";
                $phpmailer->Body .= "<p>Fecha y Hora: ".date("d-m-Y h:i:s")."</p>";
                $phpmailer->IsHTML(true);
                $phpmailer->Send();

                break;
            case "empresarial":
                $email_user = "contacto@4p.com.mx";
                $email_password = "Contacto00";
                $the_subject = $motivo;
                $address_to = $correogenerico;
                $phone_user = $telefono;
                $message_user = $mensaje;
                $from_name = $nombre . " ".$apellidos;
                $phpmailer = new PHPMailer\PHPMailer\PHPMailer();
                // ---------- datos de la cuenta de Gmail -------------------------------
                $phpmailer->Username = $email_user;
                $phpmailer->Password = $email_password; 
                //-----------------------------------------------------------------------
                //$phpmailer->SMTPDebug = 1;
                $phpmailer->SMTPSecure = 'ssl';
                $phpmailer->Host = "smtp.gmail.com"; // GMail
                $phpmailer->Port = 465;
                $phpmailer->IsSMTP(); // use SMTP
                $phpmailer->SMTPAuth = true;
                $phpmailer->setFrom($phpmailer->Username,$from_name);
                $phpmailer->AddAddress($address_to); // recipients email
                $phpmailer->Subject = $the_subject;
                $phpmailer->Body .="<h3 style='color:#3498db;'>Mensaje del cliente:</h3>";
                $phpmailer->Body .= $message_user;
                $phpmailer->Body .="<h3 style='color:#3498db;'>Datos de contacto del cliente:</h3>";
                $phpmailer->Body .= $email . "<br>". $telefono;
                $phpmailer->Body .= "<p>Fecha y Hora: ".date("d-m-Y h:i:s")."</p>";
                $phpmailer->IsHTML(true);
                $phpmailer->Send();

                break;
                
            case "asistencias":
                $email_user = "contacto@4p.com.mx";
                $email_password = "Contacto00";
                $the_subject = $motivo;
                $address_to = $correogenerico;
                $phone_user = $telefono;
                $message_user = $mensaje;
                $from_name = $nombre . " ".$apellidos;
                $phpmailer = new PHPMailer\PHPMailer\PHPMailer();
                // ---------- datos de la cuenta de Gmail -------------------------------
                $phpmailer->Username = $email_user;
                $phpmailer->Password = $email_password; 
                //-----------------------------------------------------------------------
                //$phpmailer->SMTPDebug = 1;
                $phpmailer->SMTPSecure = 'ssl';
                $phpmailer->Host = "smtp.gmail.com"; // GMail
                $phpmailer->Port = 465;
                $phpmailer->IsSMTP(); // use SMTP
                $phpmailer->SMTPAuth = true;
                $phpmailer->setFrom($phpmailer->Username,$from_name);
                $phpmailer->AddAddress($address_to); // recipients email
                $phpmailer->Subject = $the_subject;
                $phpmailer->Body .="<h3 style='color:#3498db;'>Mensaje del cliente:</h3>";
                $phpmailer->Body .= $message_user;
                $phpmailer->Body .="<h3 style='color:#3498db;'>Datos de contacto del cliente:</h3>";
                $phpmailer->Body .= $email . "<br>". $telefono;
                $phpmailer->Body .= "<p>Fecha y Hora: ".date("d-m-Y h:i:s")."</p>";
                $phpmailer->IsHTML(true);
                $phpmailer->Send();

                break;
                
                case "programas":
                    $email_user = "contacto@4p.com.mx";
                    $email_password = "Contacto00";
                    $the_subject = $motivo;
                    $address_to = $correogenerico;
                    $phone_user = $telefono;
                    $message_user = $mensaje;
                    $from_name = $nombre . " ".$apellidos;
                    $phpmailer = new PHPMailer\PHPMailer\PHPMailer();
                    // ---------- datos de la cuenta de Gmail -------------------------------
                    $phpmailer->Username = $email_user;
                    $phpmailer->Password = $email_password; 
                    //-----------------------------------------------------------------------
                    //$phpmailer->SMTPDebug = 1;
                    $phpmailer->SMTPSecure = 'ssl';
                    $phpmailer->Host = "smtp.gmail.com"; // GMail
                    $phpmailer->Port = 465;
                    $phpmailer->IsSMTP(); // use SMTP
                    $phpmailer->SMTPAuth = true;
                    $phpmailer->setFrom($phpmailer->Username,$from_name);
                    $phpmailer->AddAddress($address_to); // recipients email
                    $phpmailer->Subject = $the_subject;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Mensaje del cliente:</h3>";
                    $phpmailer->Body .= $message_user;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Datos de contacto del cliente:</h3>";
                    $phpmailer->Body .= $email . "<br>". $telefono;
                    $phpmailer->Body .= "<p>Fecha y Hora: ".date("d-m-Y h:i:s")."</p>";
                    $phpmailer->IsHTML(true);
                    $phpmailer->Send();

                    break;
                
                
                
        }

    }

    if($motivo == "Soy cliente"){
        $submotivo = htmlentities ($_POST['submotivo']);
        echo'<script type="text/javascript">
        alert("Mensaje enviado, ¡Gracias por visitarnos! Te contactaremos pronto. ");
        </script>'; 
        switch($submotivo){
                
            case "irl":
                    $email_user = "contacto@4p.com.mx";
                    $email_password = "Contacto00";
                    $the_subject = $motivo;
                    $address_to = $correogenerico;
                    $phone_user = $telefono;
                    $message_user = $mensaje;
                    $from_name = $nombre . " ".$apellidos;
                    $phpmailer = new PHPMailer\PHPMailer\PHPMailer();
                    // ---------- datos de la cuenta de Gmail -------------------------------
                    $phpmailer->Username = $email_user;
                    $phpmailer->Password = $email_password; 
                    //-----------------------------------------------------------------------
                    //$phpmailer->SMTPDebug = 1;
                    $phpmailer->SMTPSecure = 'ssl';
                    $phpmailer->Host = "smtp.gmail.com"; // GMail
                    $phpmailer->Port = 465;
                    $phpmailer->IsSMTP(); // use SMTP
                    $phpmailer->SMTPAuth = true;
                    $phpmailer->setFrom($phpmailer->Username,$from_name);
                    $phpmailer->AddAddress($address_to); // recipients email
                    $phpmailer->Subject = $the_subject;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Mensaje del cliente:</h3>";
                    $phpmailer->Body .= $message_user;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Datos de contacto del cliente:</h3>";
                    $phpmailer->Body .= $email . "<br>". $telefono;
                    $phpmailer->Body .= "<p>Fecha y Hora: ".date("d-m-Y h:i:s")."</p>";
                    $phpmailer->IsHTML(true);
                    $phpmailer->Send();

                    break;
            case "blu":
                $email_user = "contacto@4p.com.mx";
                    $email_password = "Contacto00";
                    $the_subject = $motivo;
                    $address_to = $correogenerico;
                    $phone_user = $telefono;
                    $message_user = $mensaje;
                    $from_name = $nombre . " ".$apellidos;
                    $phpmailer = new PHPMailer\PHPMailer\PHPMailer();
                    // ---------- datos de la cuenta de Gmail -------------------------------
                    $phpmailer->Username = $email_user;
                    $phpmailer->Password = $email_password; 
                    //-----------------------------------------------------------------------
                    //$phpmailer->SMTPDebug = 1;
                    $phpmailer->SMTPSecure = 'ssl';
                    $phpmailer->Host = "smtp.gmail.com"; // GMail
                    $phpmailer->Port = 465;
                    $phpmailer->IsSMTP(); // use SMTP
                    $phpmailer->SMTPAuth = true;
                    $phpmailer->setFrom($phpmailer->Username,$from_name);
                    $phpmailer->AddAddress($address_to); // recipients email
                    $phpmailer->Subject = $the_subject;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Mensaje del cliente:</h3>";
                    $phpmailer->Body .= $message_user;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Datos de contacto del cliente:</h3>";
                    $phpmailer->Body .= $email . "<br>". $telefono;
                    $phpmailer->Body .= "<p>Fecha y Hora: ".date("d-m-Y h:i:s")."</p>";
                    $phpmailer->IsHTML(true);
                    $phpmailer->Send();

                    break;
            case "integra":
                $email_user = "contacto@4p.com.mx";
                    $email_password = "Contacto00";
                    $the_subject = $motivo;
                    $address_to = $correogenerico;
                    $phone_user = $telefono;
                    $message_user = $mensaje;
                    $from_name = $nombre . " ".$apellidos;
                    $phpmailer = new PHPMailer\PHPMailer\PHPMailer();
                    // ---------- datos de la cuenta de Gmail -------------------------------
                    $phpmailer->Username = $email_user;
                    $phpmailer->Password = $email_password; 
                    //-----------------------------------------------------------------------
                    //$phpmailer->SMTPDebug = 1;
                    $phpmailer->SMTPSecure = 'ssl';
                    $phpmailer->Host = "smtp.gmail.com"; // GMail
                    $phpmailer->Port = 465;
                    $phpmailer->IsSMTP(); // use SMTP
                    $phpmailer->SMTPAuth = true;
                    $phpmailer->setFrom($phpmailer->Username,$from_name);
                    $phpmailer->AddAddress($address_to); // recipients email
                    $phpmailer->Subject = $the_subject;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Mensaje del cliente:</h3>";
                    $phpmailer->Body .= $message_user;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Datos de contacto del cliente:</h3>";
                    $phpmailer->Body .= $email . "<br>". $telefono;
                    $phpmailer->Body .= "<p>Fecha y Hora: ".date("d-m-Y h:i:s")."</p>";
                    $phpmailer->IsHTML(true);
                    $phpmailer->Send();

                    break;
            case "ss":
                $email_user = "contacto@4p.com.mx";
                    $email_password = "Contacto00";
                    $the_subject = $motivo;
                    $address_to = $correogenerico;
                    $phone_user = $telefono;
                    $message_user = $mensaje;
                    $from_name = $nombre . " ".$apellidos;
                    $phpmailer = new PHPMailer\PHPMailer\PHPMailer();
                    // ---------- datos de la cuenta de Gmail -------------------------------
                    $phpmailer->Username = $email_user;
                    $phpmailer->Password = $email_password; 
                    //-----------------------------------------------------------------------
                    //$phpmailer->SMTPDebug = 1;
                    $phpmailer->SMTPSecure = 'ssl';
                    $phpmailer->Host = "smtp.gmail.com"; // GMail
                    $phpmailer->Port = 465;
                    $phpmailer->IsSMTP(); // use SMTP
                    $phpmailer->SMTPAuth = true;
                    $phpmailer->setFrom($phpmailer->Username,$from_name);
                    $phpmailer->AddAddress($address_to); // recipients email
                    $phpmailer->Subject = $the_subject;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Mensaje del cliente:</h3>";
                    $phpmailer->Body .= $message_user;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Datos de contacto del cliente:</h3>";
                    $phpmailer->Body .= $email . "<br>". $telefono;
                    $phpmailer->Body .= "<p>Fecha y Hora: ".date("d-m-Y h:i:s")."</p>";
                    $phpmailer->IsHTML(true);
                    $phpmailer->Send();

                    break;
                
        }

    }
    if($motivo == "Quiero trabajar"){
        
        
        $filename = 'curriculum.pdf';  
        $dir_subida = '/wamp64/www/4p/php/';
            
        try{
            //$fichero_subido = $dir_subida . basename($_FILES['cv']['name']);
            $curriculums = move_uploaded_file($_FILES['cv']['tmp_name'], $dir_subida. $filename );

            $curriculums = 'curriculum.pdf';
        }catch(Exception $e){
            
        }
        echo'<script type="text/javascript">
        alert("Mensaje enviado, Recursos Humanos te contactará. ");
        </script>';  
        
        $email_user = "contacto@4p.com.mx";
                    $email_password = "Contacto00";
                    $the_subject = $motivo;
                    $address_to = $correogenerico;
                    $phone_user = $telefono;
                    $message_user = $mensaje;
                    $from_name = $nombre . " ".$apellidos;
                    $phpmailer = new PHPMailer\PHPMailer\PHPMailer();
                    // ---------- datos de la cuenta de Gmail -------------------------------
                    $phpmailer->Username = $email_user;
                    $phpmailer->Password = $email_password; 
                    //-----------------------------------------------------------------------
                    //$phpmailer->SMTPDebug = 1;
                    $phpmailer->SMTPSecure = 'ssl';
                    $phpmailer->Host = "smtp.gmail.com"; // GMail
                    $phpmailer->Port = 465;
                    $phpmailer->IsSMTP(); // use SMTP
                    $phpmailer->SMTPAuth = true;
                    $phpmailer->setFrom($phpmailer->Username,$from_name);
                    $phpmailer->AddAddress($address_to); // recipients email
                    $phpmailer->AddAttachment('curriculum.pdf','curriculum.pdf','base64','application/pdf');
                    $phpmailer->Subject = $the_subject;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Mensaje del cliente:</h3>";
                    $phpmailer->Body .= $message_user;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Datos de contacto del cliente:</h3>";
                    $phpmailer->Body .= $email . "<br>". $telefono;
                    $phpmailer->Body .= "<p>Fecha y Hora: ".date("d-m-Y h:i:s")."</p>";
                    $phpmailer->IsHTML(true);
                    $phpmailer->Send();
        
       

    }

    if($motivo == "Comentarios y sugerencias"){
        echo'<script type="text/javascript">
        alert("Mensaje enviado, un ejecutivo te contactará. ");
        </script>';       
        $email_user = "sistemas.cdmx@gmail.com";
                    $email_password = "watchD0g.";
                    $the_subject = $motivo;
                    $address_to = $correogenerico;
                    $phone_user = $telefono;
                    $message_user = $mensaje;
                    $from_name = $nombre . " ".$apellidos;
                    $phpmailer = new PHPMailer\PHPMailer\PHPMailer();
                    // ---------- datos de la cuenta de Gmail -------------------------------
                    $phpmailer->Username = $email_user;
                    $phpmailer->Password = $email_password; 
                    //-----------------------------------------------------------------------
                    //$phpmailer->SMTPDebug = 1;
                    $phpmailer->SMTPSecure = 'ssl';
                    $phpmailer->Host = "smtp.gmail.com"; // GMail
                    $phpmailer->Port = 465;
                    $phpmailer->IsSMTP(); // use SMTP
                    $phpmailer->SMTPAuth = true;
                    $phpmailer->setFrom($phpmailer->Username,$from_name);
                    $phpmailer->AddAddress($address_to); // recipients email
                    $phpmailer->Subject = $the_subject;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Mensaje del cliente:</h3>";
                    $phpmailer->Body .= $message_user;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Datos de contacto del cliente:</h3>";
                    $phpmailer->Body .= $email . "<br>". $telefono;
                    $phpmailer->Body .= "<p>Fecha y Hora: ".date("d-m-Y h:i:s")."</p>";
                    $phpmailer->IsHTML(true);
                    $phpmailer->Send();
    }

    if($motivo == "Prensa y comunicacion"){
        echo'<script type="text/javascript">
        alert("Mensaje enviado, un ejecutivo te contactará. ");
        </script>';       
        $email_user = "sistemas.cdmx@gmail.com";
                    $email_password = "watchD0g.";
                    $the_subject = $motivo;
                    $address_to = $correogenerico;
                    $phone_user = $telefono;
                    $message_user = $mensaje;
                    $from_name = $nombre . " ".$apellidos;
                    $phpmailer = new PHPMailer\PHPMailer\PHPMailer();
                    // ---------- datos de la cuenta de Gmail -------------------------------
                    $phpmailer->Username = $email_user;
                    $phpmailer->Password = $email_password; 
                    //-----------------------------------------------------------------------
                    //$phpmailer->SMTPDebug = 1;
                    $phpmailer->SMTPSecure = 'ssl';
                    $phpmailer->Host = "smtp.gmail.com"; // GMail
                    $phpmailer->Port = 465;
                    $phpmailer->IsSMTP(); // use SMTP
                    $phpmailer->SMTPAuth = true;
                    $phpmailer->setFrom($phpmailer->Username,$from_name);
                    $phpmailer->AddAddress($address_to); // recipients email
                    $phpmailer->Subject = $the_subject;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Mensaje del cliente:</h3>";
                    $phpmailer->Body .= $message_user;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Datos de contacto del cliente:</h3>";
                    $phpmailer->Body .= $email . "<br>". $telefono;
                    $phpmailer->Body .= "<p>Fecha y Hora: ".date("d-m-Y h:i:s")."</p>";
                    $phpmailer->IsHTML(true);
                    $phpmailer->Send();
    }

    if($motivo == "Proveedores"){
        echo'<script type="text/javascript">
        alert("Mensaje enviado, un ejecutivo te contactará. ");
        </script>';        
        $email_user = "sistemas.cdmx@gmail.com";
                    $email_password = "watchD0g.";
                    $the_subject = $motivo;
                    $address_to = $correogenerico;
                    $phone_user = $telefono;
                    $message_user = $mensaje;
                    $from_name = $nombre . " ".$apellidos;
                    $phpmailer = new PHPMailer\PHPMailer\PHPMailer();
                    // ---------- datos de la cuenta de Gmail -------------------------------
                    $phpmailer->Username = $email_user;
                    $phpmailer->Password = $email_password; 
                    //-----------------------------------------------------------------------
                    //$phpmailer->SMTPDebug = 1;
                    $phpmailer->SMTPSecure = 'ssl';
                    $phpmailer->Host = "smtp.gmail.com"; // GMail
                    $phpmailer->Port = 465;
                    $phpmailer->IsSMTP(); // use SMTP
                    $phpmailer->SMTPAuth = true;
                    $phpmailer->setFrom($phpmailer->Username,$from_name);
                    $phpmailer->AddAddress($address_to); // recipients email
                    $phpmailer->Subject = $the_subject;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Mensaje del cliente:</h3>";
                    $phpmailer->Body .= $message_user;
                    $phpmailer->Body .="<h3 style='color:#3498db;'>Datos de contacto del cliente:</h3>";
                    $phpmailer->Body .= $email . "<br>". $telefono;
                    $phpmailer->Body .= "<p>Fecha y Hora: ".date("d-m-Y h:i:s")."</p>";
                    $phpmailer->IsHTML(true);
                    $phpmailer->Send();
    }
endif;


?>