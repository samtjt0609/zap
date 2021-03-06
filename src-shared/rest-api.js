/**
 *
 *    Copyright (c) 2020 Silicon Labs
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

const replyId = {
  zclEndpointTypeResponse: 'zcl-endpointType-response',
  zclEndpointResponse: 'zcl-endpoint-response',
  zclEndpointTypeClusterSelectionResponse:
    'zcl-endpointType-cluster-selection-response',
  singleAttributeState: 'singleAttributeState',
  singleCommandState: 'singleCommandState',
  sqlResult: 'sql-result',
  initialState: 'initial-state',
}

const action = {
  update: 'u',
  create: 'c',
  delete: 'd',
}

const uri = {
  saveSessionKeyValue: '/save',
  sql: '/sql',
  generate: '/generate',
  endpoint: '/endpoint',
  endpointType: '/endpointType',
  initialState: '/initialState',
  option: '/option',
}

const uiMode = {
  ZIGBEE: `zigbee`,
  OLD: `old`,
}

const httpCode = {
  ok: 200,
  badRequest: 400,
  notFound: 404,
  isSuccess: (code) => {
    return code >= 200 && code < 300
  },
}

exports.replyId = replyId
exports.action = action
exports.uri = uri
exports.httpCode = httpCode
exports.uiMode = uiMode
