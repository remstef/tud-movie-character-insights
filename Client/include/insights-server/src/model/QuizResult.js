/**
 * Insights Server
 * feeds frontend for movie character insights app
 *
 * OpenAPI spec version: 0.9.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (false) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Answer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient.js'), require('./Answer.js'));
  } else {
    // Browser globals (root is window)
    if (!root.InsightsServer) {
      root.InsightsServer = {};
    }
    root.InsightsServer.QuizResult = factory(root.InsightsServer.ApiClient, root.InsightsServer.Answer);
  }
}(this, function(ApiClient, Answer) {
  'use strict';




  /**
   * The QuizResult model module.
   * @module model/QuizResult
   * @version 0.9.0
   */

  /**
   * Constructs a new <code>QuizResult</code>.
   * object which contains all information about the result of a quiz
   * @alias module:model/QuizResult
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>QuizResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuizResult} obj Optional instance to populate.
   * @return {module:model/QuizResult} The populated <code>QuizResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('questions')) {
        obj['questions'] = ApiClient.convertToType(data['questions'], [Answer]);
      }
      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
      }
      if (data.hasOwnProperty('end')) {
        obj['end'] = ApiClient.convertToType(data['end'], 'String');
      }
      if (data.hasOwnProperty('creationTime')) {
        obj['creationTime'] = ApiClient.convertToType(data['creationTime'], 'String');
      }
    }
    return obj;
  }

  /**
   * an array of questions
   * @member {Array.<module:model/Answer>} questions
   */
  exports.prototype['questions'] = undefined;
  /**
   * ip of the user
   * @member {String} ip
   */
  exports.prototype['ip'] = undefined;
  /**
   * timestamp of the end of the quiz
   * @member {String} end
   */
  exports.prototype['end'] = undefined;
  /**
   * server timestamp
   * @member {String} creationTime
   */
  exports.prototype['creationTime'] = undefined;



  return exports;
}));


