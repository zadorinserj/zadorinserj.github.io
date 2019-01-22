"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

window.Unsplash = window.Unsplash || {};
/**
 * Объект для упрощеной работы с api
 * @param {string} url ссылка на нужный сервис
 * @param {object} data данные
 * @param {object} options опции запроса
 * @constructor
 */

function Api(url, data, options) {
  this.requestOptions = {
    init: _objectSpread({
      method: 'GET',
      headers: new Headers({
        'accept': '*/*',
        'content-type': 'application/json; charset=utf-8'
      }),
      credentials: 'include'
    }, options),
    url: url
  };
  this.data = data || {};
}
/**
 * Преобразует объект данных в ссылку
 * @param data объект данных
 * @return {string} строка данных
 */


Api.prototype.queryParams = function (data) {
  return Object.keys(data).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
  }).join('&');
};
/**
 * Подготавливает параметры для отправки запроса
 */


Api.prototype.prepareData = function () {
  if (this.requestOptions.init.method === 'GET') {
    delete this.requestOptions.init.body;
    var url = this.requestOptions.url;

    if (Object.keys(this.data).length === 0) {
      this.requestOptions.requestUrl = url;
      return;
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + this.queryParams(this.data);
    this.requestOptions.requestUrl = url;
  } else {
    this.requestOptions.init.body = JSON.stringify(this.data);
    this.requestOptions.requestUrl = this.requestOptions.url;
  }
};
/**
 * Задаем отправляемые данные
 * @param data данные
 */


Api.prototype.setData = function (data) {
  this.data = data;
};
/**
 * Задаем опции для запроса
 * @param options опции
 */


Api.prototype.setOptions = function (options) {
  if (options.url) {
    this.requestOptions.url = options.url;
    delete options.url;
  }

  this.requestOptions.init = _objectSpread({}, this.requestOptions.init, options);
};
/**
 * Отправляем запрос
 * @return {Promise<Response>} Ответ от сервера
 */


Api.prototype.fetch = function () {
  this.prepareData();
  return fetch(this.requestOptions.requestUrl, this.requestOptions.init).then(function (response) {
    if (response.status !== 200) {
      throw new Error('Упс. Что-то пошло не так.');
    }

    return response.json();
  });
};

window.Unsplash.api = Api;
