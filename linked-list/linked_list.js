(function() {

  'use strict';

  function Node(data, next, back) {
    this.data = data;
    this.next = next || this;
    this.back = back || this;
  }

  var LinkedList = function(){
    this.head = null;
  };

  LinkedList.prototype.push = function(data) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      var back = this.head;
      var next = this.head;
      var node = new Node(data, back, next);
      this.head.back.next = node;
      this.head.back = node;
    }
  };

  LinkedList.prototype.pop = function() {
    if (this.head === null) { return undefined; }

    this.head = this.head.back;

    var data = this.head.data;
    var next = this.head.next;
    var back = this.head.back;
    if (next === this.head) {
      this.head = null;
    } else {
      next.back = back;
      back.next = next;
      this.head = next;
    }
    return data;
  };

  LinkedList.prototype.shift = function() {
    if (this.head === null) { return undefined; }

    var data = this.head.data;
    var next = this.head.next;
    var back = this.head.back;
    if (next === this.head) {
      this.head = null;
    } else {
      next.back = back;
      back.next = next;
      this.head = next;
    }
    return data;
  };


  LinkedList.prototype.unshift = function(data) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      var back = this.head;
      var next = this.head;
      var node = new Node(data, back, next);
      this.head.back.next = node;
      this.head.back = node;
      this.head = this.head.back;
    }
  };

  LinkedList.prototype.count = function() {
    if (this.head === null) { return 0; }
    if (this.head === this.head.next) { return 1; }
    var start = this.head.back;

    var i = 2;
    while (this.head.next !== start) {
      i++;
      this.head = this.head.next;
    }
    return i;
  };

  LinkedList.prototype.delete = function(match) {
    if (this.head.data === match) {
      var next = this.head.next;
      var back = this.head.back;
      this.head = back;
      this.pop();
    } else {
      var back = this.head.back;
      this.head = this.head.next;
      this.head.back.next = this.head;
      return this.delete(match);
    }
  };

  module.exports = LinkedList;
})();


