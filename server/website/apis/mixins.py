from django.db import models
from django.conf import settings
from django.contrib import admin


class SlugMixin(models.Model):
    slug = models.SlugField(default="", null=False)

    class Meta:
        abstract = True


class AuditMixin(models.Model):
    is_active = models.BooleanField(default=True, verbose_name="Active")
    created_on = models.DateTimeField(auto_now_add=True)
    changed_on = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='%(class)s_created',
    )
    changed_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='%(class)s_updated',
    )
    
    class Meta:
        abstract = True
        

class AdminMixin(admin.ModelAdmin):
    exclude = ["created_on", "changed_on", "created_by", "changed_by"]
    readonly_fields = ["created_on", "changed_on", "created_by", "changed_by"]
    date_hierarchy = 'created_on'
    empty_value_display = "- Unknown -"
    
    def save_model(self, request, obj, form, change):
        if not obj.pk:
            obj.created_by = request.user
        if change:
            obj.changed_by = request.user
        super().save_model(request, obj, form, change)
        
        
class RestrictedAdminMixin:
    def has_add_permission(self, request):
        return False
