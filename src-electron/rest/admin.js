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

const dbApi = require('../db/db-api.js')
const restApi = require('../../src-shared/rest-api.js')

/**
 * This module provides the REST API to the admin functions.
 *
 * @module REST API: admin functions
 */

/**
 * API: /post/sql
 * Request JSON:
 * <pre>
 *   {
 *     sql: SQL Query
 *   }
 * </pre>
 *
 * Response JSON:
 * <pre>
 *   {
 *     result: Array of rows.
 *   }
 * </pre>
 *
 * @export
 * @param {*} db
 * @param {*} app
 */
function registerAdminApi(db, app) {
  app.post(restApi.uri.sql, (request, response) => {
    var sql = request.body.sql
    if (sql) {
      var replyObject = { replyId: restApi.replyId.sqlResult }
      dbApi
        .dbAll(db, sql, [])
        .then((rows) => {
          replyObject.result = rows
          response.json(replyObject)
        })
        .catch((err) => {
          replyObject.result = [`ERROR: ${err.name}, ${err.message}`]
          response.json(replyObject)
        })
    }
  })
}
exports.registerAdminApi = registerAdminApi
