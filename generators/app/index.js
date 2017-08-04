'use strict'

// require dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
	// configurations will be loaded here
	//Ask for user input
	prompting() {
	  var done = this.async();
	  this.prompt({
	    type: 'input',
	    name: 'name',
	    message: 'Your project name',
	    //Defaults to the project's folder name if the input is skipped
	    default: this.appname
	  }, function(answers) {
	    this.props = answers
	    this.log(answers.name);
	    done();
	  }.bind(this));
	},

	// writing logic here
	writing() {

		this.generatorPkg = require('../package.json');

		this.appConfig = {
			generatorInfo: this.generatorPkg,
			appName: this.appName
		};

	  	//Copy the configuration files
		this.fs.copy(this.templatePath(), this.destinationPath(), { globOptions: { dot: true, ignore: ['**/package.json','**/index.html','**/webpack.config.js']}});

		//then overwrite template files
		this.fs.copyTpl(this.templatePath('src/index.html'), this.destinationPath('src/index.html'), this.appConfig);

      this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'), {
                name: this.props.name
            }
      );

      this.fs.copyTpl(this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js'), this.appConfig);
	},
	  
	//Install Dependencies
	install() {
		this.npmInstall();
	}

});
