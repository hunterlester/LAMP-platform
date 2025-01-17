# Screen Duration

computed from primary feature: cortex.primary.screen_active
computed from raw feature: cortex.raw.screen_state

#### Description

Screen duration is the sum of the time spent with the screen on. 

#### Optional or required kwargs

- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.
- `resolution: number`: (units: ms) the resolution over which to compute features.

#### Data

- `timestamp: number`: (units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value: number`: (units: ms) the screen duration.

#### Example

```markdown
cortex.secondary.screen_duration.screen_duration(id="U1234567890", start=0, end=cortex.now(), resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 0,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607072400000, 'value': 63720178},
           {'timestamp': 1607331600000, 'value': None},
                 .
                 .
                 .
           {'timestamp': 1609232400000, 'value': 86218716}
          ]
}
```
