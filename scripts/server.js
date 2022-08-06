const {
  PORT = 8080,
} = process.env;

const [
  _node_path,
  _file_path,
  _hyphen,
  targetDirName,
] = process.argv;

(() => {
  if(!targetDirName) {
    console.error('対象のディレクトリが指定されていません.');
    return false;
  }

  const {
    createServer,
  } = require('../server/index.js');

  const app = createServer(targetDirName);

  app.listen(
    PORT,
    () => {
      const serverURL = `http://localhost:${PORT}/`;
      console.log(
        `Web サーバの起動が完了しました.\n\`${serverURL}\` からアクセスできます.\n\nCtrl キーを押しながら C を押すとサーバを終了できます.`
      );

      const open = require('open');
      open(serverURL);
    }
  );
})();

