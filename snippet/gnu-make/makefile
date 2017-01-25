a.txt : b.txt c.txt
	@echo target is $@, first prerequisite is $<
	@echo all prerequisites are $^

src/a.txt : src/component/t.js src/component/m.js
	@echo $(@D) is directory
	@echo $(@F) is file
	@echo $(<D) is prerequisite directory
	@echo $(<F) is prerequisite file name
	cat src/component/* > src/a.txt

src/component/t.js src/component/m.js :
	mkdir -p src/component
	touch src/component/t.js
	touch src/component/m.js

result.txt : source.txt
	cp source.txt result.txt

source.txt :
	echo "This is the source" > source.txt

source: file1 file2 file3
	@echo $<

file1 : 
	echo "file1" > file1

file2 : 
	echo "file2" > file2

file3 : 
	echo "file3" > file3

clean:
	rm a.txt result.txt file1 file2 file3

var-lost:
	export foo=bar
	echo "foo=[$$foo]"

txt = Hello World
test :
	@echo $(txt)
	@echo $$HOME
	@echo $@

LIST = one two three
all:
	for i in $(LIST); do \
		echo $$i; \
	done

srcfiles := $(wildcard file*)
src : 
	@echo $(srcfiles) - srcfiles
