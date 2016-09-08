const net = require('net');
const expect = require('chai').expect;

describe('Test RPN calculator', () => {



    it('Should reply 5', (done) => {

        let client = net.connect({
                port: 12345
            })
            .on('data', (data) => {
                expect(data.toString()).to.equal('5\n');
                done();
            })
            .write("3 2 +");
    });

    it('Should reply 6', function(done) {
        let client = net.connect({
                port: 12345
            })
            .on('data', (data) => {
                expect(data.toString()).to.equal('6\n');
                done();
            })
            .write("3 2 *");
    });

    it('Should reply 7', function(done) {
        let client = net.connect({
                port: 12345
            })
            .on('data', (data) => {
                expect(data.toString()).to.equal('7\n');
                done();
            })
            .write("14 2 /");
    });

    it('Should reply 6', function(done) {
        let client = net.connect({
                port: 12345
            })
            .on('data', (data) => {
                expect(data.toString()).to.equal('6\n');
                done();
            })
            .write("8 2 -");
    });

    it('Should reply -3', function(done) {
        let client = net.connect({
                port: 12345
            })
            .on('data', (data) => {
                expect(data.toString()).to.equal('-3\n');
                done();
            })
            .write("-1 2 -");
    });

    it('Should reply error #1', function(done) {
        let client = net.connect({
                port: 12345
            })
            .on('data', (data) => {
                expect(data.toString()).to.equal('Invalid expression: 3 2 a\n');
                done();
            })
            .write("3 2 a");
    });

    it('Should reply error #2', function(done) {
        let client = net.connect({
                port: 12345
            })
            .on('data', (data) => {
                expect(data.toString()).to.equal('Invalid expression: 3 2 `\n');
                done();
            })
            .write("3 2 `");
    });
});
