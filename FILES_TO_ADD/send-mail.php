<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Проверяем, была ли отправлена форма
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Зчитуємо JSON дані з тіла запиту
    $data = json_decode(file_get_contents('php://input'), true); 

    // Задаем переменные для данных из формы
    $name = !empty($data['name']) ? "<b>Ім'я: </b>". $data['name'] ."<br>" : '';
    $tel = !empty($data['tel']) ? "<b>Телефон: </b>". $data['tel'] ."<br>" : '';
    $email = !empty($data['email']) ? "<b>Пошта: </b>". $data['email'] ."<br>" : '';
    $message = !empty($data['message']) ? "<b>Повідомлення:</b> ". $data['message'] ."<br>" : '';
    $formData = !empty($data['formData']) ? "<b>Назва форми:</b> ". $data['formData'] ."<br>" : '';

    // Создаем новый объект PHPMailer
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('uk', 'PHPMailer/language/');
    $mail->IsHTML(true);

    // Настройки SMTP
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'spotium360@gmail.com';
    $mail->Password = 'poqxxvgvvvtpoalh';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    // От кого письмо 
    $mail->setFrom('spotium360@gmail.com', 'Spotium 360');

    // Кому письмо
    $mail->addAddress('spotium360@gmail.com', 'Spotium 360');
    $mail->addAddress('info@spotium360.com', 'Spotium 360 - UH.ua');

    // Тема письма
    $mail->Subject = 'Заявка з сайту Spotium 360';

    // Тело письма
    $mail->Body = 
    '<strong><h1>'.$formData.'</h1></strong>'. 
    '<p><strong><h3>Чудово, хтось залишив заявку на вашому сайті</h3></strong></p>'. 
    '<p>'.$name.' </p>'. 
    '<p>'.$tel.'</p>'. 
    '<p>'.$email.'</p>'. 
    '<p>'.$message.'</p>'
    ;

    // Отправляем письмо
    if ($mail->send()) {
        echo 'Ваше повідомлення надіслане!';
    } else {
        echo 'Виникла помилка, сбробуй ще раз :) : ' . $mail->ErrorInfo;
    }
}
?>
