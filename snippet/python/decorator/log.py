def log(func):
	def wrapper(*args, **kw):
		print("begin call")
		func(*args, **kw)
		print("end call")
	return wrapper

@log
def f(*args):
	print('f is calling')

f(1, 2)