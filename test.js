'use strict';

/**
 * Dependencies
 */
var index = require('./index');
var should = require('should');

/**
 * Validation
 */
describe('VALIDATION', function () {

  describe('should not be able to parse with an invalid or empty address', function () {

    it('undefined value', function (done) {
      index.parse(undefined, undefined, function (err, ipv4) {
        should.exist(err);
        should.not.exist(ipv4);

        done();
      });
    });

    it('null value', function (done) {
      index.parse(null, undefined, function (err, ipv4) {
        should.exist(err);
        should.not.exist(ipv4);

        done();
      });
    });

    it('empty address', function (done) {
      index.parse('', undefined, function (err, ipv4) {
        should.exist(err);
        should.not.exist(ipv4);

        done();
      });
    });

    it('address with spaces', function (done) {
      index.parse(' ', undefined, function (err, ipv4) {
        should.exist(err);
        should.not.exist(ipv4);

        done();
      });
    });

    it('invalid address', function (done) {
      index.parse('0.0.0.256', undefined, function (err, ipv4) {
        should.exist(err);
        should.not.exist(ipv4);

        done();
      });
    });

  });

  describe('should not be able to parse with an invalid cidr', function () {

    it('undefined value', function (done) {
      index.parse('0.0.0.0', undefined, function (err, ipv4) {
        should.exist(err);
        should.not.exist(ipv4);

        done();
      });
    });

    it('null value', function (done) {
      index.parse('0.0.0.0', null, function (err, ipv4) {
        should.exist(err);
        should.not.exist(ipv4);

        done();
      });
    });

    it('string value', function (done) {
      index.parse('0.0.0.0', '0', function (err, ipv4) {
        should.exist(err);
        should.not.exist(ipv4);

        done();
      });
    });

    it('invalid cidr', function (done) {
      index.parse('0.0.0.0', 33, function (err, ipv4) {
        should.exist(err);
        should.not.exist(ipv4);

        done();
      });
    });

  });

});

// IPv4
describe('IPv4', function () {

  describe('should be able to parse with a valid address and cidr', function () {

    it('192.168.1.1/8', function (done) {
      index.parse('192.168.1.1', 8, function (err, ipv4) {
        should.not.exist(err);
        should.exist(ipv4);

        ipv4.cidr.should.equal(8);
        ipv4.size.should.equal(16777216);

        ipv4.address.address.should.equal('192.168.1.1');
        ipv4.address.value.should.equal(3232235777);
        ipv4.address.binary.should.equal('11000000101010000000000100000001');
        ipv4.address.hexadecimal.should.equal('C0A80101');

        ipv4.netmask.address.should.equal('255.0.0.0');
        ipv4.netmask.value.should.equal(4278190080);
        ipv4.netmask.binary.should.equal('11111111000000000000000000000000');
        ipv4.netmask.hexadecimal.should.equal('FF000000');

        ipv4.first.address.should.equal('192.0.0.0');
        ipv4.first.value.should.equal(3221225472);
        ipv4.first.binary.should.equal('11000000000000000000000000000000');
        ipv4.first.hexadecimal.should.equal('C0000000');

        ipv4.last.address.should.equal('192.255.255.255');
        ipv4.last.value.should.equal(3238002687);
        ipv4.last.binary.should.equal('11000000111111111111111111111111');
        ipv4.last.hexadecimal.should.equal('C0FFFFFF');

        done();
      });
    });

    it('192.168.1.1/16', function (done) {
      index.parse('192.168.1.1', 16, function (err, ipv4) {
        should.not.exist(err);
        should.exist(ipv4);

        ipv4.cidr.should.equal(16);
        ipv4.size.should.equal(65536);

        ipv4.address.address.should.equal('192.168.1.1');
        ipv4.address.value.should.equal(3232235777);
        ipv4.address.binary.should.equal('11000000101010000000000100000001');
        ipv4.address.hexadecimal.should.equal('C0A80101');

        ipv4.netmask.address.should.equal('255.255.0.0');
        ipv4.netmask.value.should.equal(4294901760);
        ipv4.netmask.binary.should.equal('11111111111111110000000000000000');
        ipv4.netmask.hexadecimal.should.equal('FFFF0000');

        ipv4.first.address.should.equal('192.168.0.0');
        ipv4.first.value.should.equal(3232235520);
        ipv4.first.binary.should.equal('11000000101010000000000000000000');
        ipv4.first.hexadecimal.should.equal('C0A80000');

        ipv4.last.address.should.equal('192.168.255.255');
        ipv4.last.value.should.equal(3232301055);
        ipv4.last.binary.should.equal('11000000101010001111111111111111');
        ipv4.last.hexadecimal.should.equal('C0A8FFFF');

        done();
      });
    });

    it('192.168.1.1/24', function (done) {
      index.parse('192.168.1.0', 24, function (err, ipv4) {
        should.not.exist(err);
        should.exist(ipv4);

        ipv4.cidr.should.equal(24);
        ipv4.size.should.equal(256);

        ipv4.address.address.should.equal('192.168.1.0');
        ipv4.address.value.should.equal(3232235776);
        ipv4.address.binary.should.equal('11000000101010000000000100000000');
        ipv4.address.hexadecimal.should.equal('C0A80100');

        ipv4.netmask.address.should.equal('255.255.255.0');
        ipv4.netmask.value.should.equal(4294967040);
        ipv4.netmask.binary.should.equal('11111111111111111111111100000000');
        ipv4.netmask.hexadecimal.should.equal('FFFFFF00');

        ipv4.first.address.should.equal('192.168.1.0');
        ipv4.first.value.should.equal(3232235776);
        ipv4.first.binary.should.equal('11000000101010000000000100000000');
        ipv4.first.hexadecimal.should.equal('C0A80100');

        ipv4.last.address.should.equal('192.168.1.255');
        ipv4.last.value.should.equal(3232236031);
        ipv4.last.binary.should.equal('11000000101010000000000111111111');
        ipv4.last.hexadecimal.should.equal('C0A801FF');

        done();
      });
    });

    it('192.168.1.1/32', function (done) {
      index.parse('192.168.1.1', 32, function (err, ipv4) {
        should.not.exist(err);
        should.exist(ipv4);

        ipv4.cidr.should.equal(32);
        ipv4.size.should.equal(1);

        ipv4.address.address.should.equal('192.168.1.1');
        ipv4.address.value.should.equal(3232235777);
        ipv4.address.binary.should.equal('11000000101010000000000100000001');
        ipv4.address.hexadecimal.should.equal('C0A80101');

        ipv4.netmask.address.should.equal('255.255.255.255');
        ipv4.netmask.value.should.equal(4294967295);
        ipv4.netmask.binary.should.equal('11111111111111111111111111111111');
        ipv4.netmask.hexadecimal.should.equal('FFFFFFFF');

        ipv4.first.address.should.equal('192.168.1.1');
        ipv4.first.value.should.equal(3232235777);
        ipv4.first.binary.should.equal('11000000101010000000000100000001');
        ipv4.first.hexadecimal.should.equal('C0A80101');

        ipv4.last.address.should.equal('192.168.1.1');
        ipv4.last.value.should.equal(3232235777);
        ipv4.last.binary.should.equal('11000000101010000000000100000001');
        ipv4.last.hexadecimal.should.equal('C0A80101');

        done();
      });
    });

  });
});
