# Grid Style Sheets Tutorial

## Usage

```html
<script src="https://s3-us-west-2.amazonaws.com/cdn.thegrid.io/gss/v2.0.0/v2.0.0/gss.min.js"></script>
<link rel="stylesheet/gss" type="text/gss" href="styles.gss">
<script>
	window.engine = new GSS(document);
</script>

<style type='text/gss'>
	/*your gss text*/
</style>
```

## Constraint CSS

[Greg Badros](http://www.badros.com/greg/) proposed `Constraint CSS(CCSS)` as a general solution for CSS layout. Back in '99 Badros
demonstrated `responsive layouts` with CCSS. For more than a decade, no one seemed to take notice outside of academia until Apple
implemented Cassowary & Greg's pioneering concepts in its new AutoLayout engine with the launch of OS X Lion.

> "We should contemplate how very, very far behind the web platform is in making it delightful to build the sorts of things that are
work-a-day in native environments." [Alex Russel](http://infrequently.org/2012/02/misdirection/)

### Constraints, the basics

Constraints express relationships between variables that may or may not hold. Any numeric property of an element can be constrained, not just
position & size.

The syntax for declaring a constraint is as follows:

```
p[line-height] >= 16;
```

`p` is the selector. `[]` is the property accessor syntax. `line-height` is the property for which a value will be calculated by GSS. `>=` defines an inequality constraint. `16` is the numerical value for the constraint in pixels (the default **unit of measurement** in GSS).

With constraint programming, equality constraints are two-way:

```
x == y;
x == 100;
y >= 10;

// x => 100, y => 100
```

x and y have a constraint to be equal, so x and y will be 100

## Strengths

It is possible to influence the solution by prioritizing the constraints with strengths.

Strengths are declared in the same fashion of CSS's `!important`:

```
#light[years] == 100 !weak;
#light[years] == 200 !medium;
#light[years] == 300 !strong;
```

There are 4 levels of built-in strength:

* !weak
* !medium (default)
* !strong
* !require

## Linear Arithmetic

Cassowary can only compute "Linear Arithmetic" constraints, for example +, -, *, /

## Selectors

## Rulesets

Rulesets allow multiple constraints to be defined over a single selector

```
.selector {
	width: == 100;
}
```

Rulesets can be nested:

```
section > article {
	.someclass {
		width: == 100;
	}
}

```

## TL;DR

## References

* [CSS polyfills from the future | GSS](http://gridstylesheets.org/)
* [gss/engine: GSS engine](https://github.com/gss/engine)
* [Constraint CSS | GSS](http://gridstylesheets.org/guides/ccss/)