"""
Two Sum

Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.
"""

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = {}
        for i in range(len(nums)):
            remaining = target - nums[i]
            if hash_map.get(remaining, None) is not None:
                return [hash_map[remaining], i]
            if hash_map.get(nums[i], None) is None:
                hash_map[nums[i]] = i