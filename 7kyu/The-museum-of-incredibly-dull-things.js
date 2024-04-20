// # The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// # However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// # Task
// # Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// # Don't change the order of the elements that are left.

function remove_smallest(numbers){
    const copy = numbers.slice()
    let smallestValue = numbers.indexOf(Math.min(...numbers))
    copy.splice(smallestValue, 1)
    console.log(copy)
}
   

remove_smallest([2,2,1,2,1])
