function HandlerTimeout(timeoutMS, fn) {
    this._timeoutMS = timeoutMS;
    this._fn = fn;
}

HandlerTimeout.prototype.run = function (callback) {
    this._fn();

    setTimeout(callback, this._timeoutMS);
};

module.exports = HandlerTimeout;