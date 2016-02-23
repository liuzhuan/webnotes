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



## References

* [GEXF File Format](https://gephi.org/gexf/format/)
* [Gephi at Github](https://github.com/gephi/gephi)
* [GEXF 1.2draft Primer](https://gephi.org/gexf/1.2draft/gexf-12draft-primer.pdf)