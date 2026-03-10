"""
Contains Duplicate

Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
"""

class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        hash_map = {}
        for num in nums:
            if hash_map.get(num, None) is None:
                hash_map[num] = 1
            else:
                return True
        return False