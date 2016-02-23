# GEXF File Format

## What is it?

GEXF (Graph Exchange XML Format) is a language for describing **complex networks** structures, their associated data and dynamics. Started in 2007 at [Gephi](https://gephi.org/) project, the gexf specifications are mature enough to claim being both extensible and open, and suitable for real specific applications.

## Why create it?

* Strong pedestal but addition liberty.
* Network only: The goal is to represent a network's elements: `nodes`, `edges` and `data` associated to them.
* Hierarchy structure
* Dynamic ready
* Implementation aware
* Utility of XML

## Dummy example

This is a minimal file for a static graph containing 2 nodes and 1 edge between them:

[hello-world.gexf](http://gexf.net/data/hello-world.gexf)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<gexf xmlns="http://www.gexf.net/1.2draft" version="1.2">
	<meta lastmodifieddate="2009-03-20">
		<creator>Gexf.net</creator>
		<description>A hello world! file</description>
	</meta>

	<graph mode="static" defaultedgetype="directed">
		<nodes>
			<node id="0" label="Hello" />
			<node id="1" label="World" />
		</nodes>
		<edges>
			<edge id="0" source="0" target="1" />
		</edges>
	</graph>
</gexf>
```

The GEXF document consists of a `gexf` element and a variety of subelements: `graph`, `node`, `edge`.

The `meta` element contains additional information about the network. The `graph` element must be declared after the meta element.

## Network Topology

The network topology structure containing nodes and edges is called the `graph`. Graphs in GEXF are mixed, in other words, they can contain directed and undirected edges at the same time. If no direction is specified when an edge is declared, the default direction `defaultedgetype` is applied to the edge. 

The three possible values for `defaultedgetype` are `directed`, `undirected` and `mutual`. Default value is undirected.

The optional XML-attribute `mode` set the kind of network: `static` or `dynamic`.

The `edges` element must be declared after the `nodes` element.

### Declaring a Node

Nodes in the graph are declared by the `node` element. Each node has an identifier, which must be unique within the entire document. The identifier of a node is defined by the XML-attribute `id`, which is a string. Each node must have a XML-attribute `label`, which is a string.

```xml
<node id="0" label="Hello world" />
```

### Declaring an Edge

Each edge must define its two endpoints with the XML-Attributes `source` and `target`. The weight of the edge is set by the optional XML-attribute `weight` and is a float.

```xml
<edge id="0" source="0" target="1" type="directed" weight="2.4" />
```

## References

* [GEXF File Format](https://gephi.org/gexf/format/)
* [Gephi at Github](https://github.com/gephi/gephi)
* [GEXF 1.2draft Primer](https://gephi.org/gexf/1.2draft/gexf-12draft-primer.pdf)