<?php
$person = [
    'name' => 'Alejandro',
    'user-type' => 'admin',
    'favorite_number' => 3
];
$shopping_list = array(
    'bread',
    'cheese',
    'chips'
);
$skills = [
    'HTML' => 'defines meaning & structure of web content',
    'CSS' => 'how elements should be renedered, screen, speach, paper, etc',
    'JS' => 'JavaScript',
    'php' => 'hypertext preprocessor server side scripting ',
]
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <h2>My name is <?php echo $person['name']; ?> & my favorite number is <?php echo $person['favorite_number']; ?> !</h2>
    <h3><?php echo $shopping_list[1]; ?></h3>
</body>
</html>