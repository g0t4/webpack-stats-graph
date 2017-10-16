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
webpack-stats-graph # by default looks for stats.json in current directory
webpack-stats-graph --help
```

#### output:

By default output is written to a `statsgraph` folder in the current directory.

- `interactive.html` loads the graph.svg with [jquery.graphviz.svg](https://github.com/mountainstorm/jquery.graphviz.svg/) so you can interact with it, i.e. click a module to see why it is a part of the graph. The graph.svg is embedded with a data-uri to avoid the need for a local web server.
- `graph.svg` is a non-interactive version of the graph.
- `graph.dot` is the dot file, this can be helpful for troubleshooting if the svg fails to render.
