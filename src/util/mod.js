/**
 * Modulo function for JavaScript, needed since the % operator is remainder and
 * gives non-modulo results for negative numbers.
 *
 * @param {number} end The number.
 * @param {number} step The divisor.
 * @returns {number} Returns the modulo.
 */
export default function mod(x, n) {
  return ((x % n) + n) % n;
}

/*
  Examples:
    (x % 5):
                       5+         o         o
                        |       /         /
                        |     /         /
                        |   /         /
                        | /         /
    *---------*---------*---------*---------*
   -10      / -5      / 0         5        10
          /         /   |
        /         /     |
      /         /       |
    o         o       -5+

    mod(x, 5):
              o        5o         o         o
            /         / |       /         /
          /         /   |     /         /
        /         /     |   /         /
      /         /       | /         /
    *---------*---------*---------*---------*
   -10        -5        0         5        10

    (x % -5):
                       5+         o         o
                        |       /         /
                        |     /         /
                        |   /         /
                        | /         /
    *---------*---------*---------*---------*
   -10      / -5      / 0         5        10
          /         /   |
        /         /     |
      /         /       |
    o         o       -5+

    mod(x, -5):
    *---------*---------*---------*---------*
   -10      / -5      / 0       / 5       /10
          /         /   |     /         /
        /         /     |   /         /
      /         /       | /         /
    o         o       -5o         o
*/
