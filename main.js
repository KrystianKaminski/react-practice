// MODULES

// file 1 (file1.js)

export const name = 'Jeff'
export const nums = [1, 2, 3]
export default Person


// file 2 (file2.js)

import {
    name,
    nums
} from './file1'
import Person from './file1'