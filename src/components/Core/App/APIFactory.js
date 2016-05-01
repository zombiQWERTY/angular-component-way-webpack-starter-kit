import angular      from 'angular';

import propByString from '../../../vendor/PropByString';

import APIStore     from './API';

const Factory = (Config) => { 'ngInject';

  const API = angular.copy(APIStore);

  const protocol = (ssl = Config.API.ssl) => {
    return ssl ? 'https' : 'http';
  };

  const domain = (defaultDomain = Config.API.domain) => {
    return defaultDomain;
  };

  const apiVersion = (version = Config.API.version) => {
    return version ? `v${version}/` : '';
  };

  const getInfo = (route) => {
    let getRoute;

    try {
      getRoute = propByString(API, route);
    } catch(e) { throw `Route is not exist: ${route} \n ${e}`; }

    return getRoute;
  };

  const getRoute = (route, version, defaultDomain, ssl) => {
    const getProtocol = protocol(ssl);
    const getDomain   = domain(defaultDomain);
    const getVersion  = apiVersion(version);

    if (route === 'protocol') { return getProtocol; }
    if (route === 'domain')   { return getDomain;   }
    if (route === 'version')  { return getVersion;  }

    return `${getProtocol}://${getDomain}/${getVersion}${getInfo(route).route}`;
  };

  const getMethod = (route) => {
    return getInfo(route).method;
  };

  return {
    getRoute,
    getMethod,
    getInfo
  };
};

export default angular.module('app.API', []).factory('API', Factory).name;
