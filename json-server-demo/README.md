# Tutorials how to setting JSON-SERVER

cách tạo server Json : 1) Mở terminal -> npm install -g json-server

    2) Tạo folder JSON-SERVER -> tạo file db.json -> add API vào -> (mở terminal)json-server --watch db.json ( tạo API fake xịn để hook vào )

    3) Mở terminal 	-> npm init ( entry-point: main.js ,license : MIT ) -> git init -> touch .gitigore( lệnh chạy xong sẽ tự động tạo file .gitignore) -> npm i json-server -> npm i --save-dev nodemon

    4) Vào link https://www.toptal.com/developers/gitignore/api/node  -> paste hết code vào file .gitignore

    5) Vào link https://www.npmjs.com/  -> Kéo xuống tới Module  ->  chọn Custom routes example  -> copy ô code đầu tiên

    6) Tạo file main.js ( hoặc nếu khi chạy lệnh mà hiện lên thì thôi ) -> paste code vừa copy ở trên vào (main.js)

    7) Vào file package.json -> phần script : "dev": "nodemon main.js", "start": "node main.js"

    8) Chạy server Json : npm run dev
