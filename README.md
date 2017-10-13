# webpack-stats-graph
Generate a graph to visualize modules and bundles from webpack via stats.json

### Usage

#### build your stats.json file:
```
webpack --json > stats.json
```

#### install graphviz:

Manually download and install: www.graphviz.org/Download.php

macOS  
```bash
brew install graphviz
```
http://brewformulas.org/Graphviz
  
Windows
```ps1
choco install graphviz
# add graphviz's bin diretory to your path
``` 
https://chocolatey.org/packages/Graphviz

#### build the graph:
```bash
npm install -g webpack-stats-graph
webpack-stats-graph stats.json
```

#### open graph

Open the `.graph/graph.svg` if you want the interactive version, run a web server and open .graph/interactive.html:
```bash
npx http-server -o .graph
```


