/* @flow */
const {describe, it} = global;
import expect from 'expect';
import {
  encodeContent,
  encodeURL,
  escapeTitle,
} from '../utilities';

describe('utilities', () => {
  describe('encodeContent', () => {
    it('should escape the * character', () => {
      var result = encodeContent('Test * String ** Testing*');
      expect(result).toEqual('Test \\* String \\*\\* Testing\\*');
    });

    it('should escape the _ character', () => {
      var result = encodeContent('Test _ String __ Testing_');
      expect(result).toEqual('Test \\_ String \\_\\_ Testing\\_');
    });

    it('should escape the ` character', () => {
      var result = encodeContent('Test ` String `` Testing`');
      expect(result).toEqual('Test \\` String \\`\\` Testing\\`');
    });

    it('should escape *, _, and ` characters', () => {
      var result = encodeContent('Test ` String ** Testing_');
      expect(result).toEqual('Test \\` String \\*\\* Testing\\_');
    });
  });

  describe('encodeURL', () => {
    it('should escape the ) character', () => {
      var result = encodeURL('https://google.com/hello)');
      expect(result).toEqual('https://google.com/hello%29');
    });
  });

  describe('escapeTitle', () => {
    it('should escape the " character', () => {
      var result = escapeTitle('Test "Hello" Test');
      expect(result).toEqual('Test \\"Hello\\" Test');
    });
  });
});
