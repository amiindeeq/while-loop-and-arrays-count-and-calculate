<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var numbers=[100,200,500,600,800]
        var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    document.write("The sum of the numbers is: " + sum);
    </script>
</body>
</html>