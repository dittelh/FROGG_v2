<?php
/**
 * Koden er taget fra et tidligere projekt som Ditte har været med til https://github.com/Thom9521/todo-app/blob/master/server/Lists/SharedLists/SendMail.php
 * 26-05-2022
 *  */ 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$newsletterCheckbox = $_POST['newsletter-checkbox'];

$toEmail = "kontakt@frogg.dk";

// Subject for mail
$subject = "Kontaktform fra FROGG.dk";

// Message in mail
$mailMessage = "En bruger har udfyldt kontaktformen på FROGG.dk.<br><br>
            Fornavn: $name<br>
            Email: $email<br>
            Besked: $message<br>
            Nyhedsbrev: "
            . ($newsletterCheckbox === 'on' ? "Ja tak" : "Nej tak");

            exit($mailMessage);
// Prepare headers for mail
$headers =  "From: FROGG <kontakt@frogg.dk>\r\n";
$headers .= "Reply-To: FROGG <$email>\r\n";
$headers .= "Return-Path: FROGG <kontakt@frogg.dk>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Send mail
if (mail($toEmail, $subject, $mailMessage, $headers) ) {
    // Redirect back with success popup
    header('Location: om-frogg.html?success=1');
} else {
    // Redirect back with success popup
    header('Location: om-frogg.html?success=0');
}