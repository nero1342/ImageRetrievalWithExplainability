# Generated by Django 3.2.5 on 2022-08-17 11:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lsc', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ImageCropped',
            fields=[
                ('image_name', models.CharField(max_length=256, primary_key=True, serialize=False)),
                ('milvus_id', models.IntegerField(db_index=True)),
                ('lo_x', models.IntegerField()),
                ('lo_y', models.IntegerField()),
                ('hi_x', models.IntegerField()),
                ('hi_y', models.IntegerField()),
            ],
        ),
        migrations.AddConstraint(
            model_name='imagecropped',
            constraint=models.UniqueConstraint(fields=('image_name', 'lo_x', 'lo_y', 'hi_x', 'hi_y'), name='unique_image_name_crop_combination'),
        ),
    ]