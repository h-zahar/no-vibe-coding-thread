"""
Group Anagrams

Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
"""

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hash_map = {}
        for st in strs:
            sorted_str = "".join(sorted(list(st)))
            if hash_map.get(sorted_str, None) is None:
                hash_map[sorted_str] = [st]
            else:
                hash_map[sorted_str].append(st)
        return list(hash_map.values())