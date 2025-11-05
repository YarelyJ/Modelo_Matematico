from django.urls import path
from . import views

urlpatterns = [
    path('dataset/overview/', views.dataset_overview, name='dataset-overview'),
    path('dataset/statistics/', views.dataset_statistics, name='dataset-statistics'),
    path('dataset/correlations/', views.dataset_correlations, name='dataset-correlations'),
    path('dataset/protocols/', views.protocol_distribution, name='protocol-distribution'),
    path('dataset/classification/', views.classification_distribution, name='classification-distribution'),
    path('dataset/features/', views.feature_analysis, name='feature-analysis'),
]
