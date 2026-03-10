"""
Container With Most Water

You are given an integer array heights where heights[i] represents the height of the ithbar.

You may choose any two bars to form a container. Return the maximum amount of water a container can store.
"""

class Solution:
    def maxArea(self, heights: List[int]) -> int:
        lp = 0
        rp = len(heights) - 1
        max_area = 0

        while lp < rp:
            area = min(heights[lp], heights[rp]) * (rp - lp)
            if area > max_area:
                max_area = area
            if heights[lp] <= heights[rp]:
                lp += 1
            else:
                rp -= 1
        return max_area