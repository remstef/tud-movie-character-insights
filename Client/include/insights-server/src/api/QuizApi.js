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
    define(['ApiClient', 'model/Error', 'model/Question', 'model/QuizRequest', 'model/QuizResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient.js'), require('../model/Error.js'), require('../model/Question.js'), require('../model/QuizRequest.js'), require('../model/QuizResult.js'));
  } else {
    // Browser globals (root is window)
    if (!root.InsightsServer) {
      root.InsightsServer = {};
    }
    root.InsightsServer.QuizApi = factory(root.InsightsServer.ApiClient, root.InsightsServer.Error, root.InsightsServer.Question, root.InsightsServer.QuizRequest, root.InsightsServer.QuizResult);
  }
}(this, function(ApiClient, Error, Question, QuizRequest, QuizResult) {
  'use strict';

  /**
   * Quiz service.
   * @module api/QuizApi
   * @version 0.9.0
   */

  /**
   * Constructs a new QuizApi. 
   * @alias module:api/QuizApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getQuiz operation.
     * @callback module:api/QuizApi~getQuizCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Question} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Informations for a new quiz
     * Returns a new quiz for the specified movies and character
     * @param {module:model/QuizRequest} quizRequest The movies for which the quiz should be generated
     * @param {module:api/QuizApi~getQuizCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Question}
     */
    this.getQuiz = function(quizRequest, callback) {
      var postBody = quizRequest;

      // verify the required parameter 'quizRequest' is set
      if (quizRequest == undefined || quizRequest == null) {
        throw "Missing the required parameter 'quizRequest' when calling getQuiz";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Question;

      return this.apiClient.callApi(
        '/quiz/question', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postResults operation.
     * @callback module:api/QuizApi~postResultsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Result for a finished quiz
     * Contains the result for a finished quiz with all information about items
     * @param {module:model/QuizResult} quizResult The result as an object
     * @param {module:api/QuizApi~postResultsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
    this.postResults = function(quizResult, callback) {
      var postBody = quizResult;

      // verify the required parameter 'quizResult' is set
      if (quizResult == undefined || quizResult == null) {
        throw "Missing the required parameter 'quizResult' when calling postResults";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Error;

      return this.apiClient.callApi(
        '/quiz/result', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
