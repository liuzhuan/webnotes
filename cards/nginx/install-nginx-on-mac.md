# Installing nginx in Mac OS X Mountain Lion With Homebrew

by Kornelije Sajler, 2012-10-10

## Install with brew

```sh
$ brew install nginx
```

After install run:

```sh
$ sudo nginx
```

## Testing

Test it by going to URL:

```sh
http://localhost:8080
```

## Configuration

The default place of `nginx.conf` on Mac after installing with `brew` is:

```
/usr/local/etc/nginx/nginx.conf
```

### Changing the default port

The nginx default port is 8080, we shall change it to 80. First stop the nginx server if it is running by:

```sh
$ sudo nginx -s stop
```

Then open `nginx.conf` with:

```sh
$ vim /usr/local/etc/nginx/nginx.conf
```

and change the:

```
server {
	listen 8080;
	server_name localhost;

	# access_log logs/host.access.log main;

	location / {
		root html;
		index index.html index.htm
	}
}
```

to 

```
server {
	listen 80;
	server_name localhost;

	# access_log logs/host.access.log main;

	location / {
		root html;
		index index.html index.htm
	}
}
```

Save configuration and start nginx by

```sh
$ sudo nginx
```

### Changing the path of default web location

The nginx html folder (brew install only) is by the default in:

```
/usr/local/Cellar/nginx/1.2.3/html
```

If we change the default path configuration to `Users/xajler/www`:

```
server {
	listen		80;
	server_name	localhost;

	# access_log	logs/host.access.log main;

	location / {
		root	/Users/xajler/www;
		index	index.html index.htm;
	}
}
```

After change stop and start nginx server and nginx is now serving pages from your custom folder!

## Reference
- [Installing Ngnix in Mac OS X Mountain Lion With Homebrew](http://learnaholic.me/2012/10/10/installing-nginx-in-mac-os-x-mountain-lion/)
