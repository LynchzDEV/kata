import { describe, it, expect } from 'vitest'
import { isPalindrome, reverseWords, capitalizeWords, countVowels } from './string-utils'

describe('String Utils', () => {
  describe('isPalindrome', () => {
    it('should return true for single character', () => {
      expect(isPalindrome('a')).toBe(true)
    })

    it('should return true for empty string', () => {
      expect(isPalindrome('')).toBe(true)
    })

    it('should return true for palindromes', () => {
      expect(isPalindrome('racecar')).toBe(true)
      expect(isPalindrome('madam')).toBe(true)
      expect(isPalindrome('level')).toBe(true)
    })

    it('should return false for non-palindromes', () => {
      expect(isPalindrome('hello')).toBe(false)
      expect(isPalindrome('world')).toBe(false)
    })

    it('should ignore case and spaces', () => {
      expect(isPalindrome('A man a plan a canal Panama')).toBe(true)
      expect(isPalindrome('Race a Car')).toBe(false)
    })

    it('should handle special characters', () => {
      expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true)
    })
  })

  describe('reverseWords', () => {
    it('should reverse single word', () => {
      expect(reverseWords('hello')).toBe('olleh')
    })

    it('should reverse multiple words', () => {
      expect(reverseWords('hello world')).toBe('olleh dlrow')
    })

    it('should handle extra spaces', () => {
      expect(reverseWords('  hello   world  ')).toBe('  olleh   dlrow  ')
    })

    it('should handle empty string', () => {
      expect(reverseWords('')).toBe('')
    })

    it('should handle string with only spaces', () => {
      expect(reverseWords('   ')).toBe('   ')
    })
  })

  describe('capitalizeWords', () => {
    it('should capitalize single word', () => {
      expect(capitalizeWords('hello')).toBe('Hello')
    })

    it('should capitalize multiple words', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World')
    })

    it('should handle mixed case', () => {
      expect(capitalizeWords('hELLo WoRLd')).toBe('Hello World')
    })

    it('should preserve extra spaces', () => {
      expect(capitalizeWords('  hello   world  ')).toBe('  Hello   World  ')
    })

    it('should handle empty string', () => {
      expect(capitalizeWords('')).toBe('')
    })

    it('should handle single letters', () => {
      expect(capitalizeWords('a b c')).toBe('A B C')
    })
  })

  describe('countVowels', () => {
    it('should count vowels in lowercase', () => {
      expect(countVowels('hello')).toBe(2)
      expect(countVowels('world')).toBe(1)
    })

    it('should count vowels in uppercase', () => {
      expect(countVowels('HELLO')).toBe(2)
      expect(countVowels('AEIOU')).toBe(5)
    })

    it('should count vowels in mixed case', () => {
      expect(countVowels('Hello World')).toBe(3)
    })

    it('should return 0 for no vowels', () => {
      expect(countVowels('bcdfg')).toBe(0)
      expect(countVowels('xyz')).toBe(0)
    })

    it('should handle empty string', () => {
      expect(countVowels('')).toBe(0)
    })

    it('should handle strings with numbers and symbols', () => {
      expect(countVowels('h3ll0!')).toBe(0)
      expect(countVowels('hello123!')).toBe(2)
    })
  })
})