create database if not exists portfolio character set utf8 collate utf8_unicode_ci;
use portfolio;

grant all privileges on portfolio.* to 'portfolio_user'@'localhost' identified by 'portfolio';
