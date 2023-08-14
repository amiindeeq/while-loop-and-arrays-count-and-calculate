<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Parretns While</h1>
    <script>
        var pattern = " ";
        var i = 1;
    
        while (i <= 20) {
          var j = 1;
          
          while (j <= i) {
            pattern += "* ";
            j++;
          }
          pattern += "<br>";
          i++;
        }
    
        document.write(pattern);
      </script>
</body>
</html>