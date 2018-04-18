const lib = require('../src/index');

describe('TESTS', () => {
  describe('Addresss Validation Tests', () => {
    test('should not be able to parse with an undefined address', (done) => {
      lib.parse(undefined, 32, (err, subnet) => {
        expect(err).toBeDefined();
        expect(subnet).toBeUndefined();

        done();
      });
    });

    test('should not be able to parse with a null address', (done) => {
      lib.parse(null, 32, (err, subnet) => {
        expect(err).toBeDefined();
        expect(subnet).toBeUndefined();

        done();
      });
    });

    test('should not be able to parse with an empty address', (done) => {
      lib.parse('', 32, (err, subnet) => {
        expect(err).toBeDefined();
        expect(subnet).toBeUndefined();

        done();
      });
    });

    test('should not be able to parse with an invalid address', (done) => {
      lib.parse('1', 32, (err, subnet) => {
        expect(err).toBeDefined();
        expect(subnet).toBeUndefined();

        done();
      });
    });
  });

  describe('Cidr Validation Tests', () => {
    test('should not be able to parse with an undefined cidr', (done) => {
      lib.parse('192.168.1.1', undefined, (err, subnet) => {
        expect(err).toBeDefined();
        expect(subnet).toBeUndefined();

        done();
      });
    });

    test('should not be able to parse with a null cidr', (done) => {
      lib.parse('192.168.1.1', null, (err, subnet) => {
        expect(err).toBeDefined();
        expect(subnet).toBeUndefined();

        done();
      });
    });

    test('should not be able to parse with a NaN cidr', (done) => {
      lib.parse('192.168.1.1', 'a', (err, subnet) => {
        expect(err).toBeDefined();
        expect(subnet).toBeUndefined();

        done();
      });
    });

    test('should not be able to parse with an invalid cidr', (done) => {
      lib.parse('192.168.1.1', 33, (err, subnet) => {
        expect(err).toBeDefined();
        expect(subnet).toBeUndefined();

        done();
      });
    });
  });

  describe('IPv4 Tests', function() {
    it('192.168.1.1/8', function(done) {
      lib.parse('192.168.1.1', 8, function(err, ipv4) {
        expect(err).toBeNull();
        expect(ipv4).toBeDefined();

        expect(ipv4.cidr).toBe(8);
        expect(ipv4.size).toBe(16777216);

        expect(ipv4.address.address).toBe('192.168.1.1');
        expect(ipv4.address.value).toBe(3232235777);
        expect(ipv4.address.binary).toBe('11000000101010000000000100000001');
        expect(ipv4.address.hexadecimal).toBe('C0A80101');

        expect(ipv4.netmask.address).toBe('255.0.0.0');
        expect(ipv4.netmask.value).toBe(4278190080);
        expect(ipv4.netmask.binary).toBe('11111111000000000000000000000000');
        expect(ipv4.netmask.hexadecimal).toBe('FF000000');

        expect(ipv4.first.address).toBe('192.0.0.0');
        expect(ipv4.first.value).toBe(3221225472);
        expect(ipv4.first.binary).toBe('11000000000000000000000000000000');
        expect(ipv4.first.hexadecimal).toBe('C0000000');

        expect(ipv4.last.address).toBe('192.255.255.255');
        expect(ipv4.last.value).toBe(3238002687);
        expect(ipv4.last.binary).toBe('11000000111111111111111111111111');
        expect(ipv4.last.hexadecimal).toBe('C0FFFFFF');

        done();
      });
    });

    it('192.168.1.1/16', function(done) {
      lib.parse('192.168.1.1', 16, function(err, ipv4) {
        expect(err).toBeNull();
        expect(ipv4).toBeDefined();

        expect(ipv4.cidr).toBe(16);
        expect(ipv4.size).toBe(65536);

        expect(ipv4.address.address).toBe('192.168.1.1');
        expect(ipv4.address.value).toBe(3232235777);
        expect(ipv4.address.binary).toBe('11000000101010000000000100000001');
        expect(ipv4.address.hexadecimal).toBe('C0A80101');

        expect(ipv4.netmask.address).toBe('255.255.0.0');
        expect(ipv4.netmask.value).toBe(4294901760);
        expect(ipv4.netmask.binary).toBe('11111111111111110000000000000000');
        expect(ipv4.netmask.hexadecimal).toBe('FFFF0000');

        expect(ipv4.first.address).toBe('192.168.0.0');
        expect(ipv4.first.value).toBe(3232235520);
        expect(ipv4.first.binary).toBe('11000000101010000000000000000000');
        expect(ipv4.first.hexadecimal).toBe('C0A80000');

        expect(ipv4.last.address).toBe('192.168.255.255');
        expect(ipv4.last.value).toBe(3232301055);
        expect(ipv4.last.binary).toBe('11000000101010001111111111111111');
        expect(ipv4.last.hexadecimal).toBe('C0A8FFFF');

        done();
      });
    });

    it('192.168.1.1/24', function(done) {
      lib.parse('192.168.1.1', 24, function(err, ipv4) {
        expect(err).toBeNull();
        expect(ipv4).toBeDefined();

        expect(ipv4.cidr).toBe(24);
        expect(ipv4.size).toBe(256);

        expect(ipv4.address.address).toBe('192.168.1.1');
        expect(ipv4.address.value).toBe(3232235777);
        expect(ipv4.address.binary).toBe('11000000101010000000000100000001');
        expect(ipv4.address.hexadecimal).toBe('C0A80101');

        expect(ipv4.netmask.address).toBe('255.255.255.0');
        expect(ipv4.netmask.value).toBe(4294967040);
        expect(ipv4.netmask.binary).toBe('11111111111111111111111100000000');
        expect(ipv4.netmask.hexadecimal).toBe('FFFFFF00');

        expect(ipv4.first.address).toBe('192.168.1.0');
        expect(ipv4.first.value).toBe(3232235776);
        expect(ipv4.first.binary).toBe('11000000101010000000000100000000');
        expect(ipv4.first.hexadecimal).toBe('C0A80100');

        expect(ipv4.last.address).toBe('192.168.1.255');
        expect(ipv4.last.value).toBe(3232236031);
        expect(ipv4.last.binary).toBe('11000000101010000000000111111111');
        expect(ipv4.last.hexadecimal).toBe('C0A801FF');

        done();
      });
    });

    it('192.168.1.1/32', function(done) {
      lib.parse('192.168.1.1', 32, function(err, ipv4) {
        expect(err).toBeNull();
        expect(ipv4).toBeDefined();

        expect(ipv4.cidr).toBe(32);
        expect(ipv4.size).toBe(1);

        expect(ipv4.address.address).toBe('192.168.1.1');
        expect(ipv4.address.value).toBe(3232235777);
        expect(ipv4.address.binary).toBe('11000000101010000000000100000001');
        expect(ipv4.address.hexadecimal).toBe('C0A80101');

        expect(ipv4.netmask.address).toBe('255.255.255.255');
        expect(ipv4.netmask.value).toBe(4294967295);
        expect(ipv4.netmask.binary).toBe('11111111111111111111111111111111');
        expect(ipv4.netmask.hexadecimal).toBe('FFFFFFFF');

        expect(ipv4.first.address).toBe('192.168.1.1');
        expect(ipv4.first.value).toBe(3232235777);
        expect(ipv4.first.binary).toBe('11000000101010000000000100000001');
        expect(ipv4.first.hexadecimal).toBe('C0A80101');

        expect(ipv4.last.address).toBe('192.168.1.1');
        expect(ipv4.last.value).toBe(3232235777);
        expect(ipv4.last.binary).toBe('11000000101010000000000100000001');
        expect(ipv4.last.hexadecimal).toBe('C0A80101');

        done();
      });
    });
  });
});
