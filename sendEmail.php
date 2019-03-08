<?php
header("Access-Control-Allow-Origin:*");

$userName = isset($_POST["username"]) ? trim($_POST["username"]) : "";
$email = isset($_POST["email"]) ? trim($_POST["email"]) : "";
$emailValue = isset($_POST["val"]) ? trim($_POST["val"]) : "";

if ($userName == "" || $email == "" || $emailValue == "") {
    die(json_encode(["code" => 4000, "msg" => "error empty"]));
}

$to = "johnny_ooago@outlook.com";
$subject = "ooago 客户邮箱";
$message = "姓名：" . $userName . "<br/>邮箱：" . $email . "<br/>内容：" . $emailValue;
$from = "$email";
$headers = "From: $from";
mail($to, $subject, $message, $headers);

echo json_encode(["code" => 0, "msg" => "email success"]);
