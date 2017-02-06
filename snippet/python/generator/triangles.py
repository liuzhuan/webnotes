def triangles():
	a, b = [1], [1, 1]

	yield a
	yield b

	while True:
		c = []
		for m in range(1, len(b)):
			c.append(b[m-1] + b[m])
		a, b = b, [1] + c + [1]
		yield b

n = 0
for t in triangles():
	print(t)
	n = n + 1
	if n == 10:
		break