Dealem.ma
=========

## Setting up the development environment

For this project I work with compass tools for compiling
Setting up the environment is straight forward. You have to do this
only once, so you are able to compile to the styles the next time.

### Install required applications

Git - For version control - [More instructions on installing](http://git-scm.com/book/en/Getting-Started-Installing-Git)

    Linux:
      yum install git-core
      apt-get install git

    Mac:
      ( http://code.google.com/p/git-osx-installer )
      sudo port install git-core +svn +doc +bash_completion +gitweb

    Windows:
      ( http://msysgit.github.com/ )

Node.js - For dev server, building, etc. - [More instructions on installing](http://howtonode.org/how-to-install-nodejs)

    Linux:
      sudo apt-get install g++ curl libssl-dev apache2-utils
      git clone git://github.com/ry/node.git
      cd node
      ./configure
      make
      sudo make install

    Mac:
      ( install Xcode )
      git clone git://github.com/ry/node.git
      cd node
      ./configure
      make
      sudo make install

    Windows:
      ( see http://howtonode.org/how-to-install-nodejs (Windows))
      ( Windows installer http://nodejs.org/download/)

NPM - Package manager for Node.js - [Info about NPM](http://howtonode.org/introduction-to-npm)

    Linux + Mac:
      curl http://npmjs.org/install.sh | sh

    Windows:
      ( Comes with the Windows installer http://nodejs.org/download/)

Grunt.js - Building project, development server - [Getting started](http://gruntjs.com/getting-started)

    [sudo] npm install -g grunt-cli

Bower - Script manager for the client - [Website](http://bower.io/)

    [sudo] npm install -g bower

Ruby - Used for Compass - [Download Ruby](https://www.ruby-lang.org/en/downloads/)

    Linux:
      sudo apt-get install ruby1.9.1

    Mac:
      ( Already installed on the system )
      brew install ruby

    Windows:
      ( http://rubyinstaller.org/ )

RubyGems - Package manager for Ruby - [RubyGems basic](http://guides.rubygems.org/rubygems-basics/)

    Linux + Mac + Windows:
      ( Download latest version http://production.cf.rubygems.org/rubygems/rubygems-2.1.7.zip )
      ( extract to folder )
      ( cd into folder )
      ruby setup.rb

Compass Gem - SASS CSS preprocessor - [Compass Style](http://compass-style.org/)

    Linux + Mac + Windows:
      gem install compass

### Keep the environment up to date

The NPM modules and Bower scripts are not under version control. This means you 
have run the following two commands for one time, after you installed every
required application.

    cd path/Dealem.ma
    npm install
    bower install

To avoid 'missing script' kinda messages keep this in mind:

 * if the file `package.json` changes, do `npm install`
 * if the file `bower.json` changes, do `bower install`

## Working with the development environment
This project was originally build with [Yeoman](http://yeoman.io/) and has a
development server and a build process out of the box.

### Starting the development server

    grunt serve

The following command will concat all scripts and styles, compiles languages
and compress images.

    grunt build

Produced files will be saved to `./dist`. All files in this folder can be used
as standalone project without the need of every development files.

## Setting up Heroku Deployment
http://www.sitepoint.com/deploying-yeomanangular-app-heroku/


## App Demo
http://dealemma.herokuapp.com/