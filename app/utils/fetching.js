/* @flow */
'use strict';

import config from '../config';

const { protocol, host, port } = config;
const hostUrl = `${protocol}://${host}:${port}`;

export const fetchGraphQL = async (graphParams: { query: string, variables: ?Object }, authToken: ?string): Promise<Object> => {
  const serializedParams = prepareGraphQLParams(graphParams);
  const graphQLUrl = hostUrl + '/graphql';
  const res = await fetch(graphQLUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    },
    body: serializedParams,
  });
  const resJson = await res.json();
  const { data, errors } = resJson;
  const rtn = { data, error: getClientError(errors) }
  return rtn;
}

const prepareGraphQLParams = graphParams => {
  graphParams.query = graphParams.query.replace(/\s/g, '');
  return JSON.stringify(graphParams);
};

const getClientError = errors => {
  if (!errors) return;
  const error = errors[0].originalError;
  return error._error ? error : { _error: 'Server query error' }
}
