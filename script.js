var db = openDatabase("DATABASE1", "1.0", "Test DB", 2 * 1024 * 1024);

db.transaction(function (tx) {
  tx.executeSql("CREATE TABLE IF NOT EXISTS LOGS (id unique, log)");
  tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")');
  tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")');
});

db.transaction(function (tx) {
  tx.executeSql(
    "SELECT * FROM LOGS",
    [],
    function (tx, results) {
      var len = results.rows.length;
      for (var i = 0; i < len; i++) {
        console.log(results.rows.item(i).log);
      }
    },
    null
  );
});
