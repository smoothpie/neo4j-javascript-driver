'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _baseHostNameResolver = require('./base-host-name-resolver');

var _baseHostNameResolver2 = _interopRequireDefault(_baseHostNameResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfiguredHostNameResolver = function (_BaseHostNameResolver) {
  (0, _inherits3.default)(ConfiguredHostNameResolver, _BaseHostNameResolver);

  function ConfiguredHostNameResolver(resolverFunction) {
    (0, _classCallCheck3.default)(this, ConfiguredHostNameResolver);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConfiguredHostNameResolver.__proto__ || (0, _getPrototypeOf2.default)(ConfiguredHostNameResolver)).call(this));

    _this._resolverFunction = resolverFunction;
    return _this;
  }

  (0, _createClass3.default)(ConfiguredHostNameResolver, [{
    key: 'resolve',
    value: function resolve(seedRouter) {
      var _this2 = this;

      return new _promise2.default(function (resolve) {
        return resolve(_this2._resolverFunction(seedRouter));
      }).then(function (resolved) {
        if (!Array.isArray(resolved)) {
          throw new TypeError('Configured resolver function should either return an array of addresses or a Promise resolved with an array of addresses.' + ('Each address is \'<host>:<port>\'. Got: ' + resolved));
        }
        return resolved;
      });
    }
  }]);
  return ConfiguredHostNameResolver;
}(_baseHostNameResolver2.default); /**
                                    * Copyright (c) 2002-2019 "Neo4j,"
                                    * Neo4j Sweden AB [http://neo4j.com]
                                    *
                                    * This file is part of Neo4j.
                                    *
                                    * Licensed under the Apache License, Version 2.0 (the "License");
                                    * you may not use this file except in compliance with the License.
                                    * You may obtain a copy of the License at
                                    *
                                    *     http://www.apache.org/licenses/LICENSE-2.0
                                    *
                                    * Unless required by applicable law or agreed to in writing, software
                                    * distributed under the License is distributed on an "AS IS" BASIS,
                                    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                    * See the License for the specific language governing permissions and
                                    * limitations under the License.
                                    */

exports.default = ConfiguredHostNameResolver;