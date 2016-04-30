import angular from 'angular';

import API     from './API';

const Factory = (Config) => {
  'ngInject';

  const protocol = (ssl = Config.API.ssl) => {
    return ssl ? 'https' : 'http';
  };

  const domain = (defaultDomain = Config.API.domain) => {
    return defaultDomain;
  };

  const apiVersion = (version = Config.API.version) => {
    return `v${version}`;
  };

  const getRoute = (route, params, version, defaultDomain, ssl) => {
    const getProtocol = protocol(ssl);
    const getDomain   = domain(defaultDomain);
    const getVersion  = apiVersion(version);

    if (route === 'protocol') { return getProtocol; }
    if (route === 'domain')   { return getDomain;   }
    if (route === 'version')  { return getVersion;  }

    let getRoute;

    try {
      getRoute = API[route](params);
    } catch(e) {
      throw `Route is not defined: \n ${e}`;
    }

    return `${getProtocol}://${getDomain}/${getVersion}/${getRoute}`;
  };

  return {
    getRoute
  };
};

export default angular.module('app.API', []).factory('API', Factory).name;
