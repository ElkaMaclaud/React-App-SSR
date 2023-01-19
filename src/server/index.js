export const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width">
    <title>Reddit for me</title>
    <script src="/public/client.js" type="application/javascript"></script>
    <script>
    window.__token__ = '${token}'
    </script>
</head>
<body>
    <div id="react_root">${content}</div>
    <div id="modal_root"></div>
</body>
</html>
`;

//<meta name="viewport" content="width=device-width"> - Плохо работал ReactdevTool в браузере!!!!!!!!!!!!!!