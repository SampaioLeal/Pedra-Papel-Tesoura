<?php
if (isset($login)) {
    if ($login->errors) {
        foreach ($login->errors as $error) {
            echo $error;
        }
    }
    if ($login->messages) {
        foreach ($login->messages as $message) {
            echo $message;
        }
    }
}
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <title>Login Example - Semantic</title>
  <link rel="stylesheet" type="text/css" href="css/semantic.css">
  <style type="text/css">
    body {
      background-color: #DADADA;
    }
    body > .grid {
      height: 100%;
    }
    .image {
      margin-top: -100px;
    }
    .column {
      max-width: 450px;
    }
  </style>
</head>
<body>

<div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui teal image header">
      <img src="assets/images/logo.png" class="image">
      <div class="content">
        Log-in to your account
      </div>
    </h2>
    <form method="post" action="index.php" name="loginform" class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <input id="login_input_username" type="text" name="user_name" required placeholder="Your username">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <input id="login_input_password" type="password" name="user_password" autocomplete="off" required placeholder="Password">
          </div>
        </div>
        <button type="submit"  name="login" class="ui fluid large teal button" >Login</div>
      </div>

    </form>

  </div>
</div>

<script src="js/jquery.min.js"></script>
</body>

</html>
