---
title: Jake - JavaScript build tool task runner for NodeJS
date: 2017-03-21 14:17:50
---

Jake is the JavaScript build tool for NodeJS. Jake has been around since the very early days of NodeJS, and is very full featured and well tested.

## Installing

```
npm install -g jake
```

## Basic usage

```
jake [options ...] [env variables ...] target
```

## Options

```
-f *FILE*
--jakefile *FILE*    Use FILE as the Jakefile.

-C *DIRECTORY*
--directory *DIRECTORY*    Change to DIRECTORY before running tasks.

-J *JAKELIBDIR*
--jakelibdir *JAKELIBDIR*    Auto-import any .jake files in JAKELIBDIR. (default is 'jakelib')

-B
--always-make    Unconditionally make all targets

-t
--trace    Enable full backtrace

-T/ls
--tasks    Display the tasks with description, then exit.
```

## Tasks

Use `task` to define tasks. It has one required argument, the task-name, and three optional arguments:

```js
task(name, [prerequisites], [action], [opts]);
```

Use `desc` to add a string description of the task.

Here's an example:

```js
desc('This is the default task.');
task('default', function(params){
    console.log('This is the default task.');
});

desc('This task has prerequisites.');
task('hasPrereqs', ['foo', 'bar', 'baz'], function(params){
    console.log('Run some prereqs first.');
});
```

And here's an example of an asynchronous task:

```js
desc('This is an asynchronous task.');
task('asyncTask', {async: true}, function(){
    setTimeout(complete, 1000);
});
```

## File-tasks

Create a file-task by calling `file`.

```js
desc('This builds a minified JS file for production.');
file('foo-minified.js', ['bar', 'foo-bar.js', 'foo-baz.js'], function(){
    // Code to concat and minify goes here.
})
```
