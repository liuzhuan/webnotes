# Multiple PHP Versions

by Andy Miller, 10/05/2016

## Troubleshooting tips

If you get a message that the browser can't connect to the server, first check to ensure the server is up.

```sh
ps -aef | grep httpd
```

Apache is controlled via the `apachectl` command so some useful commands to use are:

```sh
sudo apachectl start
sudo apachectl stop
sudo apachectl -k restart
```

> The `-k` will **force a restart immediately** rather than asking politely to restart when apache is good and ready

## Apache Configuration

`sudo vim /etc/apache2/httpd.conf`, Change `DocumentRoot`

```
DocumentRoot /Users/your_user/Sites

<Directory /Users/your_user/Sites>
```

## Reference
- [macOS 10.12 Sierra Apache Setup: Multiple PHP Versions](https://getgrav.org/blog/macos-sierra-apache-multiple-php-versions)