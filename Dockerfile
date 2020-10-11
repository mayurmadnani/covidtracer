FROM sebp/lighttpd:1.4.54-r0

COPY *.html /var/www/localhost/htdocs/
COPY css/ /var/www/localhost/htdocs/css/
COPY js/ /var/www/localhost/htdocs/js/
COPY utils/ /var/www/localhost/htdocs/utils/

EXPOSE 80

CMD ["start.sh"]
