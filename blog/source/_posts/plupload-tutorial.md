---
title: Plupload Tutorial
date: 2017-03-21
---

# Plupload Tutorial

* [Plupload: Multi-runtime File-Uploader](http://www.plupload.com/)
* [Plupload Documentation](http://www.plupload.com/docs/)
* [Plupload docs v2](http://www.plupload.com/docs/v2/Getting-Started)

At its core Plupload is visually flat and you can customize it however you like.

## Backstory

Plupload started in a time when uploading a file in a responsive and customizable manner was a real pain. Internally, browsers only had the `input[type="file"]` element.

## Structure

Currently, Pluplad may be considered as consisting of three parts: low-level pollyfills, Plupload API and Widgets (UI and Queue). 

## mOxie

[mOxie](https://github.com/moxiecode/moxie) is combined name for XHR2 and File API pollyfills that extracted from Plupload in order to make it more flexible and give it opportunity to further growth.

The best way to start is to clone the mOxie repository, with all it's submodules:

```
git clone --recursive https://github.com/moxiecode/moxie.git
```

Building environment is based on Node.js, mainly because it is cool and easy, but even more importantly, because it is powered by JavaScript (we love JavaScript).

Change your working directory and run `npm install`.

### Compile JavaScript

Basic JavaScript compiler can be invoked with: `jake mkjs`.

