---
layout: speakers
title: Ingvar Stepanyan
portrait: /assets/images/ingvar-stepanyan.jpg
twitter: RReverser
---

## Bio

Ingvar is Web Developer, speaker and reverse engineer.

He loves writing JavaScript, hates writing UI and is passionate about D2D programming (tools by developers created for other developers).

He believes in JavaScript as full-featured cross-platform language that can be used not just for usual UI stuff but for absolutely any tasks from desktop/mobile server-less applications to media processing and augmented reality.

#### Talk: AST - the only "true" tool for code building

From Makefiles to JavaScript-based Grunt, from Grunt to Gulp, from Gulp to Broccoli... Lots of plugins available for every build system that allow you to lint, modify, bundle, concatenate, minify and do a lot of other operations on JavaScript, but still - how do you debug it in production? Earlier you would have to build and provide minified and development versions of your website or library and switch between them to check if everything works well for bundled file. Nowadays, you probably tried to use SourceMap-enabled plugins so you could link real built file to real development sources, but as complexity of build pipeline grew, you gave up at the moment when figured out that gulp-concat doesn't support source maps or grunt-umd can't take source maps from previous step and so they screw entire idea of debugging real sources on production. Did you know that this problem is actually not real but only limitation of existing build systems? Do you want to know how to enable debugging of real sources through entire build pipeline (whatever it contains) and, as a bonus, speed up builds of your website or library? Then this talk is for you.
