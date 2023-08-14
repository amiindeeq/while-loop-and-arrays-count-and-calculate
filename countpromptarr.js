<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var count=prompt("how many times do you want")
        var names = []
        for(var x=0; x<=count;x++){
            names.push(prompt("Enter your name"))
        }
        document.write(names)
    </script>
</body>
</html>