# CodeSquad Homepage

[![Build Status](https://travis-ci.com/code-squad/homepage.svg?branch=master)](https://travis-ci.com/code-squad/homepage)

## http://codesquad.kr

----

# build

dev_00 -> beta -> master

# development and build guide

#### 1. on dev branch
modification -> commit -> build(gulp) -> commit (build)

#### 2. on beta branch
merge dev -> push

If a commit occurs on beta, have to rebase on dev branch.

#### 3. on master branch
merge beta -> push


#### 커밋 메세지 작성 : 소문자 `명령어. 수정내용`
```git commit -am "change. delete dot
```

----
# [Start Bootstrap](http://startbootstrap.com/) - [Agency](http://startbootstrap.com/template-overviews/agency/)

[Agency](http://startbootstrap.com/template-overviews/agency/) is a one page agency portfolio theme for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/). This theme features several content sections, a responsive portfolio grid with hover effects, full page portfolio item modals, a responsive timeline, and a working PHP contact form.

## Getting Started

Several options are available to get started quickly:
* [Download the latest release on Start Bootstrap](http://startbootstrap.com/template-overviews/agency/)
* Clone the repo: `git clone https://github.com/BlackrockDigital/startbootstrap-agency.git`
* Fork the repo

## Developing Using Source Files

To use the source files, you will need to have npm installed globally along with Gulp.js. To start:
* Run `npm install` in the root directory
* Run `gulp dev` and edit the files as needed

If you need to update the plugins included with this template, simply run the following tasks:
* First run `npm update` to update the dependencies
* Then run `gulp copy` to copy the new versions to their proper destinations

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/BlackrockDigital/startbootstrap-agency/issues) here on GitHub or leave a comment on the [template overview page at Start Bootstrap](http://startbootstrap.com/template-overviews/agency/).

## Creator

Start Bootstrap was created by and is maintained by **[David Miller](http://davidmiller.io/)**, Owner of [Blackrock Digital](http://blackrockdigital.io/).

* https://twitter.com/davidmillerskt
* https://github.com/davidtmiller

Start Bootstrap is based on the [Bootstrap](http://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

## Copyright and License

Copyright 2013-2016 Blackrock Digital LLC. Code released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-agency/blob/gh-pages/LICENSE) license.
