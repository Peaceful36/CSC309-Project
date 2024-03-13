# Generated by Django 5.0.3 on 2024-03-12 04:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calendars', '0003_remove_calendar_meetings_remove_calendar_preferences_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='meeting',
            name='title',
            field=models.CharField(default='hello', max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='meeting',
            name='priority',
            field=models.CharField(blank=True, choices=[('None', 'None'), ('High Priority', 'High'), ('Medium Priority', 'Med'), ('Low Priority', 'Low')], default='None', max_length=50),
        ),
    ]
