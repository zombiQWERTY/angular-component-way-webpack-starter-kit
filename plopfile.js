const isEmpty = require('lodash/isEmpty');

module.exports = (plop) => {
  plop.addPrompt('directory', require('inquirer-directory'));

  const isNotEmptyFor = (name) => {
    return (value) => {
      if (isEmpty(value)) { return name + ' is required'; }
      return true;
    };
  };

  plop.setGenerator('page', {
    description: 'Create a new page component',
    prompts: [
      {
        type:    'input',
        name:    'path',
        message: 'What is your route for this page?',
        validate: isNotEmptyFor('path')
      },
      {
        type:    'input',
        name:    'name',
        message: 'What is your page name?',
        validate: isNotEmptyFor('name')
      },
      {
        type:    'input',
        name:    'componentName',
        message: 'What is your component name for this page?',
        validate: isNotEmptyFor('componentName')
      }
    ],

    actions: [
      {
        type: 'add',
        path: './src/components/{{ name }}/{{ name }}Component.js',
        templateFile: './plopTemplates/page/component.js'
      },
      {
        type: 'add',
        path: './src/components/{{ name }}/{{ name }}Styles.scss',
        templateFile: './plopTemplates/page/styles.scss'
      },
      {
        type: 'add',
        path: './src/components/{{ name }}/{{ name }}View.jade',
        templateFile: './plopTemplates/page/view.jade'
      },
      {
        type: 'add',
        path: './src/components/{{ name }}/tests/{{ name }}Component.e2e.js',
        templateFile: './plopTemplates/page/tests/e2e.js'
      },
      {
        type: 'add',
        path: './src/components/{{ name }}/tests/{{ name }}Component.spec.js',
        templateFile: './plopTemplates/page/tests/spec.js'
      }
    ]
  });

  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type:    'input',
        name:    'folder',
        message: 'What is your component folder name? May be empty'
      },
      {
        type:    'input',
        name:    'name',
        message: 'What is your component file name?',
        validate: isNotEmptyFor('name')
      },
      {
        type:    'input',
        name:    'component',
        message: 'What is your component name?',
        validate: isNotEmptyFor('component')
      }
    ],

    actions: [
      {
        type: 'add',
        path: './src/shared/{{ folder }}/{{ name }}/{{ name }}Component.js',
        templateFile: './plopTemplates/component/component.js'
      },
      {
        type: 'add',
        path: './src/shared/{{ folder }}/{{ name }}/{{ name }}Styles.scss',
        templateFile: './plopTemplates/component/styles.scss'
      },
      {
        type: 'add',
        path: './src/shared/{{ folder }}/{{ name }}/{{ name }}View.jade',
        templateFile: './plopTemplates/component/view.jade'
      },
      {
        type: 'add',
        path: './src/shared/{{ folder }}/{{ name }}/tests/{{ name }}Component.e2e.js',
        templateFile: './plopTemplates/component/tests/e2e.js'
      },
      {
        type: 'add',
        path: './src/shared/{{ folder }}/{{ name }}/tests/{{ name }}Component.spec.js',
        templateFile: './plopTemplates/component/tests/spec.js'
      }
    ]
  });

  plop.setGenerator('factory', {
    description: 'Create a new factory',
    prompts: [
      {
        type:    'input',
        name:    'modulename',
        message: 'What is your module name for factory?',
        validate: isNotEmptyFor('modulename')
      },
      {
        type:    'input',
        name:    'name',
        message: 'What is your factory name?',
        validate: isNotEmptyFor('name')
      },
      {
        type:    'directory',
        name:    'path',
        message: 'What is your path?',
        validate: isNotEmptyFor('path'),
        basePath: plop.getPlopfilePath()
      }
    ],

    actions: [
      {
        type: 'add',
        path: '{{ path }}/{{ name }}Factory.js',
        templateFile: './plopTemplates/providers/factory.js'
      }
    ]
  });

  plop.setGenerator('provider', {
    description: 'Create a new provider',
    prompts: [
      {
        type:    'input',
        name:    'modulename',
        message: 'What is your module name for provider?',
        validate: isNotEmptyFor('modulename')
      },
      {
        type:    'input',
        name:    'name',
        message: 'What is your provider name?',
        validate: isNotEmptyFor('name')
      },
      {
        type:    'directory',
        name:    'path',
        message: 'What is your path?',
        validate: isNotEmptyFor('path'),
        basePath: plop.getPlopfilePath()
      }
    ],

    actions: [
      {
        type: 'add',
        path: '{{ path }}/{{ name }}Provider.js',
        templateFile: './plopTemplates/providers/provider.js'
      }
    ]
  });

  plop.setGenerator('service', {
    description: 'Create a new service',
    prompts: [
      {
        type:    'input',
        name:    'modulename',
        message: 'What is your module name for service?',
        validate: isNotEmptyFor('modulename')
      },
      {
        type:    'input',
        name:    'name',
        message: 'What is your service name?',
        validate: isNotEmptyFor('name')
      },
      {
        type:    'directory',
        name:    'path',
        message: 'What is your path?',
        validate: isNotEmptyFor('path'),
        basePath: plop.getPlopfilePath()
      }
    ],

    actions: [
      {
        type: 'add',
        path: '{{ path }}/{{ name }}Service.js',
        templateFile: './plopTemplates/providers/service.js'
      }
    ]
  });

  plop.setGenerator('directive', {
    description: 'Create a new directive',
    prompts: [
      {
        type:    'input',
        name:    'modulename',
        message: 'What is your module name for directive?',
        validate: isNotEmptyFor('modulename')
      },
      {
        type:    'input',
        name:    'name',
        message: 'What is your directive name?',
        validate: isNotEmptyFor('name')
      },
      {
        type:    'directory',
        name:    'path',
        message: 'What is your path?',
        validate: isNotEmptyFor('path'),
        basePath: plop.getPlopfilePath()
      }
    ],

    actions: [
      {
        type: 'add',
        path: '{{ path }}/{{ name }}Directive.js',
        templateFile: './plopTemplates/providers/directive.js'
      }
    ]
  });

  plop.setGenerator('filter', {
    description: 'Create a new filter',
    prompts: [
      {
        type:    'input',
        name:    'modulename',
        message: 'What is your module name for filter?',
        validate: isNotEmptyFor('modulename')
      },
      {
        type:    'input',
        name:    'name',
        message: 'What is your filter name?',
        validate: isNotEmptyFor('name')
      },
      {
        type:    'directory',
        name:    'path',
        message: 'What is your path?',
        validate: isNotEmptyFor('path'),
        basePath: plop.getPlopfilePath()
      }
    ],

    actions: [
      {
        type: 'add',
        path: '{{ path }}/{{ name }}Filter.js',
        templateFile: './plopTemplates/providers/filter.js'
      }
    ]
  });
};
