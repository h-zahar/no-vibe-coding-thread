"""
Three Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

The output should not contain any duplicate triplets. You may return the output and the triplets in any order.
"""

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []

        nums.sort()

        for i in range(len(nums)):
            a = nums[i]
            if a > 0:
                break

            if a != nums[i - 1] or i == 0:
                lp = i + 1
                rp = len(nums) - 1
                while lp < rp:
                    sum_num = a + nums[lp] + nums[rp]
                    if sum_num < 0:
                        lp += 1
                    elif sum_num > 0:
                        rp -= 1
                    elif sum_num == 0:
                        res.append([a, nums[lp], nums[rp]])
                        lp + 1
                        rp -= 1
                        while nums[lp] == nums[lp - 1] and lp < rp:
                            lp += 1
        return res