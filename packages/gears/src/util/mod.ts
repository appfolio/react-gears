/**
 * Modulo function for JavaScript, needed since the % operator is remainder and
 * gives non-modulo results for negative numbers.
 */
export default function mod(x: number, n: number): number {
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
