const fs = require('fs');
const {cat, ShellString} = require('shelljs');
const path = require('path');

module.exports = function (stats, archiveDirectory) {
  // todo capture non-default options passed to webpack-stats-graph and show in index.html
  const indexFile = path.join(archiveDirectory, 'index.json');
  const index = fs.existsSync(indexFile) ? JSON.parse(cat(indexFile)) : [];
  // todo how about not push new item if hash of last build matches this one?
  // note: careful with what you add here, how it serializes with JSON.stringify versus the last object you add which is in-memory for the subsequent index.html generation below, i.e. date serialization to string.
  index.push({
    hash: stats.hash,
    time: new Date().toISOString(),
  });
  ShellString(JSON.stringify(index)).to(indexFile);

  const indexHtml = `
<html>
<body>
  <table>
    <thead>
    <tr>
        <th>compilation hash</th>
        <th>graph time</th>
    </tr>
    </thead>
    <tbody>`

    +

    index.map(g =>
      `
    <tr>
       <td><a href="${g.hash}/interactive.html">${g.hash}</a></td>
       <td>${new Date(g.time)}</td>
    </tr>
     `).join('\n')

    +

    `
    </tbody>
  </table>
</body>
</html>
`;

  const indexHtmlFile = path.join(archiveDirectory, 'index.html');
  ShellString(indexHtml).to(indexHtmlFile);

};


