<?php

$greeting = 'Hello, ';
$greeting .=  'World!';

$first = A;
$last = K;

$initials = "$first $last";

$person = [
    'name' => 'Alejandro',
    'user-type' => 'admin',
    'favorite_number' => 42 * 10
];

$person['name'] = 'Alejandro Kalani';
$person['personality type'] = 'INFJ';
$person['initials'] = $initials;


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
];
$washington_cities = [
    ['rank' => 1, 'name' => 'seattle', 'population' => 733919],
    ['rank' => 2, 'name' => 'spokane', 'population' => 229701],
    ['rank' => 3, 'name' => 'tacoma', 'population' => 219205],
    ['rank' => 4, 'name' => 'vancouver', 'population' => 188,331],
    ['rank' => 5, 'name' => 'bellevue', 'population' => 149,365],
    ['rank' => 6, 'name' => 'kent', 'population' => 134,890],
    ['rank' => 7, 'name' => 'everett', 'population' => 110,438],
    ['rank' => 8, 'name' => 'renton', 'population' =>  105,313],
    ['rank' => 9, 'name' => 'spokane valley', 'population' => 102,178],
    ['rank' => 10, 'name' => 'federal way', 'population' => 99,792],
];

$logged_in = true;
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
    <h1><?= $greeting ?></h1>
    <h2>My name is <?php echo $person['name']; ?> & my favorite number is <?php echo $person['favorite_number'] / 10; ?> !</h2>
    <h3>My Shopping list:</h3>
    <ul>
        <li><?php echo $shopping_list[0]; ?></li>
        <li><?php echo $shopping_list[1]; ?></li>
        <li><?php echo $shopping_list[2]; ?></li>
    </ul>

    <h3>My Favorite City in Washington</h3>
    <ul>
        <li><?php echo $washington_cities[0]['name']; ?></li>
        <li><?= $washington_cities[1]['name'] ?></li>
    </ul>
</body>
</html>