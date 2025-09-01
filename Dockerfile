FROM httpd:2.4

# Copy website files to Apache's document root
COPY ./public-html/ /usr/local/apache2/htdocs/

# Create a custom Apache configuration
RUN echo 'ServerName localhost' >> /usr/local/apache2/conf/httpd.conf

# Enable necessary Apache modules
RUN sed -i 's/#LoadModule rewrite_module modules\/mod_rewrite.so/LoadModule rewrite_module modules\/mod_rewrite.so/' /usr/local/apache2/conf/httpd.conf

# Add .htaccess support and directory configuration
RUN echo '<Directory "/usr/local/apache2/htdocs">' >> /usr/local/apache2/conf/httpd.conf
RUN echo '    Options Indexes FollowSymLinks' >> /usr/local/apache2/conf/httpd.conf
RUN echo '    AllowOverride All' >> /usr/local/apache2/conf/httpd.conf
RUN echo '    Require all granted' >> /usr/local/apache2/conf/httpd.conf
RUN echo '</Directory>' >> /usr/local/apache2/conf/httpd.conf

# Expose port 80
EXPOSE 80
