'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fantastic ' + chalk.red('generator-myproject') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'projectname',
      message: 'Tell me the name of your project'
    },{
      type: 'confirm',
      name: 'includeNormalize',
      message: 'Would you like to include Normalize',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someAnswer;

      done();
    }.bind(this));
  },

  writing: function () {
    var props = this.props;
    this.fs.copyTpl(
      this.templatePath('_bower.json'),
      this.destinationPath('bower.json'),
      props
    );
  },

  install: function () {
    this.installDependencies();
  }
});
