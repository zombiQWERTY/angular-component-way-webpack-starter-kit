import angular from 'angular';

const Factory = ($config, API_STORE, propByString) => { 'ngInject';
  const setUrl = {
    protocol: (ssl           = $config.API.ssl)     => ssl ? 'https' : 'http',
    domain:   (defaultDomain = $config.API.domain)  => defaultDomain,
    version:  (version       = $config.API.version) => version ? `v${version}/` : ''
  };

  const getInfo = (route) => {
    let getRoute;

    try {
      getRoute = propByString(API_STORE, route);
    } catch(e) { throw `Route is not exist: ${route} \n ${e}`; }

    return getRoute;
  };

  const getMethod = route => getInfo(route).method;
  const getRoute = (route, version, defaultDomain, ssl) => {
    const getUrl = {
      protocol: setUrl.protocol(ssl),
      domain:   setUrl.domain(defaultDomain),
      version:  setUrl.version(version)
    };

    if (route === 'protocol') { return getUrl.protocol; }
    if (route === 'domain')   { return getUrl.domain;   }
    if (route === 'version')  { return getUrl.version;  }

    return `${getUrl.protocol}://${getUrl.domain}/${getUrl.version}${getInfo(route).route}`;
  };


  return {
    getRoute,
    getMethod,
    getInfo
  };
};

export default angular.module('app.API', []).factory('API', Factory).name;
