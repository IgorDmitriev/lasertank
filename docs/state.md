### State sample ###

`0` - `ground`
`T` - `Tank`
`F` - `Flag`
`S` - `Solid Block`
`M` - `Movable Block`
`W` - `Water`
`B` - `Bridge`

[S,S,S,S,S,S,S,S,S,S],
[S,T,0,0,0,0,0,0,0,S],
[S,0,0,0,0,0,0,0,0,S],
[S,0,0,0,0,0,0,0,0,S],
[S,0,0,0,0,0,0,0,0,S],
[S,0,M,M,0,0,0,0,0,S],
[S,0,M,0,0,0,0,0,0,S],
[S,0,0,0,0,0,0,0,0,S],
[S,0,0,W,W,W,W,0,F,S],
[S,S,S,S,S,S,S,S,S,S]

```
{
  level: [
    [S,S,S,S,S,S,S,S,S,S],
    [S,T,0,0,0,0,0,0,0,S],
    [S,0,0,0,0,0,0,0,0,S],
    [S,0,0,0,0,0,0,0,0,S],
    [S,0,0,0,0,0,0,0,0,S],
    [S,0,M,M,0,0,0,0,0,S],
    [S,0,M,0,0,0,0,0,0,S],
    [S,0,0,0,0,0,0,0,0,S],
    [S,0,0,W,W,W,W,0,F,S],
    [S,S,S,S,S,S,S,S,S,S]],
  laser: {
    x: 0
    y: 0
    dx: 1
    dy: 0
  }
  tank: {
    x: 1,
    y: 1
  }
  score: {
    moves: 0,
    shots: 0
  }
}
```
