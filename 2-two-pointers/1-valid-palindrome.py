"""
Valid Palindrome

Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).
"""

class Solution:
    def is_alphanum(self, char):
        return ord('A') <= ord(char) <= ord('Z') or ord('a') <= ord(char) <= ord('z') or ord('0') <= ord(char) <= ord('9')

    def isPalindrome(self, s: str) -> bool:
        lp = 0
        rp = len(s) - 1

        while lp < rp:
            while lp < rp and not self.is_alphanum(s[lp]):
                lp += 1
            while lp < rp and not self.is_alphanum(s[rp]):
                rp -= 1

            if s[lp].lower() != s[rp].lower():
                return False
            lp += 1
            rp -= 1
        return True