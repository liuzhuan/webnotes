# Understanding CSS Grid Systems from the Ground Up

## What is a Grid System?

A grid system is a structure that allows for content to be stacked both vertically and horizontally in a consistent and easily manageable fashion. Additionally, grid system code is project-agnostic giving it a high degree of portability so that it may be adopted on new projects.

## The Primary Components

Grid systems include two key components: `rows` and `columns`. Rows are used to accommodate the columns.

## Resetting the Box Model

```css
.row,
.column {
	box-sizing: border-box;
}
```

## Clearing Floats

```css
.row:before,
.row:after {
	content: " ";
	display: table;
}

.row:after {
	clear: both;
}
```

## Defining Columns

```css
.column {
	position: relative;
	float: left;
}
```

## Creating Gutters

Gutters help to create separation between columns for greater legibility and aesthetics. Using percentage-based left margin for each column can achieve the gutters.

```css
.column + .column {
	margin-left: 1.6%;
}
```

`+` above is a [adjacent sibling selector][css1].

> The adjacent sibling selector selects all elements that are the adjacent siblings of a specified element. Sibling elements must have the same parent element, and "adjacent" means "immediately following".

When `margin` is specified in `%`, it's based the width of the containing element.

## Calculating Column Widths

We determine the maximum amount of columns per row is 12 as it boasts flexibility given that it is divisable by 1, 2, 3, 4, and 6. 

Next we need to determine the width of a single(1/12) column using the following formula:

```
scw = (100 - (m * (mc-1))) / mc
```

Where: 

* scw = single column width
* m = margin(1.6%)
* mc = maximum columns (12)

When we get a single column width of 6.866666667%, we can calculate the rest of the column widths:

```
cw = (scw * cs) + (m * (cs-1))
```

Where: 

* cw = column width
* scw = single column width (6.86666667%)
* cs = column span (1-12)
* m = margin (1.6%)

Applying this formula for each of the 12 columns results in the follwing CSS.

```css
.column-1 { width: 6.866666666666667%; }
.column-2 { width: 15.33333333333333%; }
.column-3 { width: 23.8%; }
.column-4 { width: 32.2666666667%; }
.column-5 { width: 40.7333333333%; }
.column-6 { width: 49.2%; }
.column-7 { width: 57.6666666667%; }
.column-8 { width: 66.1333333333%; }
.column-9 { width: 74.6%; }
.column-10 { width: 83.0666666667%; }
.column-11 { width: 91.5333333333%; }
.column-12 { width: 100%; }
```

## Optimizing for Mobile Devices

For devices with small viewports, the width of the columns need to be adjusted to allow the content they contain to still appear legible and visually appealing. `Media queries` help with this: 

```css
@media only screen and (max-width: 550px) {
    .column-1, 
    .column-2, 
    .column-3, 
    .column-4, 
    .column-5, 
    .column-6, 
    .column-7, 
    .column-8, 
    .column-9, 
    .column-10, 
    .column-11, 
    .column-12 {
        width: auto;
        float: none;
    }

    .column + .column {
        margin-left: 0;
    }
}
```

## Pulling it all together

```html
<div class="row">
	<div class="column column-4"></div>
	<div class="column column-4"></div>
	<div class="column column-4"></div>
</div>

<div class="row">
	<div class="column column-2"></div>
	<div class="column column-4"></div>
	<div class="column column-4"></div>
	<div class="column column-2"></div>
</div>
```

## References

* [Understanding CSS Grid Systems from the Ground Up](http://www.sitepoint.com/understanding-css-grid-systems/)
* [Adjacent Sibling Selector][css1]
* [CSS Margins](http://www.w3schools.com/css/css_margin.asp)

[css1]: http://www.w3schools.com/css/css_combinators.asp