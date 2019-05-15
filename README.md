# Getting Started

Any commands are given as if you are starting from the project root directory

## Dependencies

These dependencies need to be installed outside of the application.  Everything else is self
contained.

### Node and NPM

 * [Node](http://nodejs.org) (Install includes npm)
 * [npm](http://npmjs.org)

### Java

[http://www.java.com/en/download/index.jsp](http://www.java.com/en/download/index.jsp)

### Yeoman

[http://yeoman.io/](http://yeoman.io/)

    npm install -g yo

### Grunt

[http://gruntjs.com/](http://gruntjs.com/)

    npm install -g grunt-cli

### Express/Angular Generator

[https://github.com/Grievoushead/generator-express-angular](https://github.com/Grievoushead/generator-express-angular)

    npm install generator-express-angular

### Git

 * [Install](http://git-scm.com/book/en/Getting-Started-Installing-Git)
 * [Set Up SSH Keys](https://confluence.atlassian.com/display/BITBUCKET/Set+up+SSH+for+Git)

Once you have git installed you can checkout the code base.

    git clone git@bitbucket.org:jlewark/hawaii.git

## Elastic Search

To start elastic search: (double check that it isn't running already or you will spin up two nodes...)

    cd elasticsearch
    bin/elasticsearch

You can check the status of elastic search by looking at the head plugin 

   http://localhost:9200/_plugin/head

Performace metrics can be seen at:

   http://localhost:9200/_plugin/bigdesk

## Web Server

To start the web app:

    node app.js

To go to the web app:

    http://localhost:5000

