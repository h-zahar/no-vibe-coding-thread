"""
Valid Anagram

Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
"""

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        table_s, table_t = {}, {}
        for char in s:
            if table_s.get(char, None) is None:
                table_s[char] = 1
            else:
                table_s[char] += 1

        for char in t:
            if table_t.get(char, None) is None:
                table_t[char] = 1
            else:
                table_t[char] += 1

        if table_s == table_t:
            return True
        else:
            return False

