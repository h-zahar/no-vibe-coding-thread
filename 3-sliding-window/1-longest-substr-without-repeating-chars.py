"""
Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.
"""

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        lp = 0
        char_set = set()
        res = 0

        for rp in range(len(s)):
            while s[rp] in char_set:
                char_set.remove(s[lp])
                lp += 1
            char_set.add(s[rp])
            res = max(res, rp - lp + 1)

        return res

