python -m venv venv
pip install django djangorestframework django-cors-headers djangorestframework-simplejwt djoser pyjwt django-environ python-dotenv markdown django-filter 

django-admin startproject auth_system .
python manage.py startapp accounts

python manage.py makemigrations
python manage.py migrate

# testing proposal
python manage.py createsuperuser
-> admin@example.com -> pass1234