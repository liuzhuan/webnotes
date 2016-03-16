# Convert GIF Animation to Sprite Sheet

Gif have to be converted into sprite sheet so that we can control them by JS.

```
montage aa.gif -tile x1 -geometry +0+0  -alpha On -background "rgba(0, 0, 0, 0.0)" -quality 100 spritesheet.png
```

## Get the Number of Frames and Frame Rate of GIF Animations

```
identify -format "Frame %s: %Tcs\n" aa.gif
```

## Convert Combine Mode Gif to Sprite Sheet

To optimize the file size of gif file, the gif software like GIMP will generate the gif in combine mode. To make sprite sheet easy to use, we can convert gif from `combine mode` to `replace mode` by following command, then use the same command to convert the gif to sprite sheet:

```
convert -layers dispose combine_mode.gif replace_mode.gif
montage replace_mode.gif -tile x1 -geometry +0+0 -alpha On -background "rgba(0, 0, 0, 0.0)" -quality 100 replace_mode.png
```

## References

* [Convert GIF Animation to Sprite Sheet](http://jmsliu.com/622/convert-gif-animation-to-sprite-sheet-for-html5-games.html)