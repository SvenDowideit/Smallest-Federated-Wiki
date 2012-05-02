// Generated by CoffeeScript 1.3.1
(function() {

  window.plugins.lists = {
    description: "Simple Bullet list editor",
    emit: function(div, item) {
      var line, _i, _len, _ref, _results;
      wiki.log('lists', item);
      _ref = item.text.split("\n");
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        line = _ref[_i];
        _results.push(div.append($('<li/>').text(line)));
      }
      return _results;
    },
    bind: function(div, item) {
      return div.dblclick(function() {
        return wiki.textEditor(div, item);
      });
    }
  };

}).call(this);
