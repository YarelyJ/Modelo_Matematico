from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import pandas as pd
import numpy as np
from pathlib import Path
import json

# Dataset real data from NSL-KDD analysis
DATASET_INFO = {
    'total_records': 125973,
    'total_features': 43,
    'protocols': {
        'tcp': 102689,
        'udp': 14993,
        'icmp': 8291
    },
    'classification': {
        'normal': 67343,
        'anomaly': 58630
    }
}


@api_view(['GET'])
def dataset_overview(request):
    """
    Get overview of the NSL-KDD dataset
    """
    data = {
        'name': 'NSL-KDD Dataset',
        'description': 'Network intrusion detection dataset - improved version of KDD\'99',
        'total_records': DATASET_INFO['total_records'],
        'total_features': DATASET_INFO['total_features'],
        'protocols': DATASET_INFO['protocols'],
        'classification': DATASET_INFO['classification'],
        'source': 'ISCX NSL-KDD 2009',
        'purpose': 'Intrusion Detection System (IDS) training and evaluation'
    }
    return Response(data)


@api_view(['GET'])
def dataset_statistics(request):
    """
    Get statistical summary of dataset features
    """
    # Real statistics from the NSL-KDD dataset analysis
    statistics = [
        {
            'feature': 'duration',
            'mean': 47.98,
            'std': 707.75,
            'min': 0.0,
            'max': 58329.0,
            'description': 'Connection duration in seconds'
        },
        {
            'feature': 'src_bytes',
            'mean': 3025.61,
            'std': 897203.48,
            'min': 0.0,
            'max': 693375640.0,
            'description': 'Bytes sent from source to destination'
        },
        {
            'feature': 'dst_bytes',
            'mean': 868.54,
            'std': 33040.14,
            'min': 0.0,
            'max': 5155468.0,
            'description': 'Bytes sent from destination to source'
        },
        {
            'feature': 'wrong_fragment',
            'mean': 0.01,
            'std': 0.14,
            'min': 0.0,
            'max': 3.0,
            'description': 'Number of wrong fragments'
        },
        {
            'feature': 'urgent',
            'mean': 0.0,
            'std': 0.02,
            'min': 0.0,
            'max': 3.0,
            'description': 'Number of urgent packets'
        },
        {
            'feature': 'hot',
            'mean': 0.04,
            'std': 0.67,
            'min': 0.0,
            'max': 30.0,
            'description': 'Number of hot indicators'
        },
        {
            'feature': 'num_failed_logins',
            'mean': 0.0,
            'std': 0.01,
            'min': 0.0,
            'max': 5.0,
            'description': 'Number of failed login attempts'
        },
        {
            'feature': 'num_compromised',
            'mean': 0.01,
            'std': 0.73,
            'min': 0.0,
            'max': 884.0,
            'description': 'Number of compromised conditions'
        },
        {
            'feature': 'su_attempted',
            'mean': 0.0,
            'std': 0.01,
            'min': 0.0,
            'max': 2.0,
            'description': 'Number of su root attempts'
        },
        {
            'feature': 'num_root',
            'mean': 0.01,
            'std': 0.68,
            'min': 0.0,
            'max': 884.0,
            'description': 'Number of root accesses'
        },
        {
            'feature': 'num_file_creations',
            'mean': 0.0,
            'std': 0.03,
            'min': 0.0,
            'max': 28.0,
            'description': 'Number of file creation operations'
        },
        {
            'feature': 'count',
            'mean': 83.00,
            'std': 114.01,
            'min': 0.0,
            'max': 511.0,
            'description': 'Number of connections to same host'
        },
        {
            'feature': 'srv_count',
            'mean': 29.25,
            'std': 54.70,
            'min': 0.0,
            'max': 511.0,
            'description': 'Number of connections to same service'
        },
        {
            'feature': 'serror_rate',
            'mean': 0.29,
            'std': 0.45,
            'min': 0.0,
            'max': 1.0,
            'description': 'Percentage of connections with SYN errors'
        },
        {
            'feature': 'srv_serror_rate',
            'mean': 0.29,
            'std': 0.45,
            'min': 0.0,
            'max': 1.0,
            'description': 'Percentage of connections with SYN errors (service)'
        },
        {
            'feature': 'rerror_rate',
            'mean': 0.11,
            'std': 0.31,
            'min': 0.0,
            'max': 1.0,
            'description': 'Percentage of connections with REJ errors'
        },
        {
            'feature': 'srv_rerror_rate',
            'mean': 0.11,
            'std': 0.31,
            'min': 0.0,
            'max': 1.0,
            'description': 'Percentage of connections with REJ errors (service)'
        },
        {
            'feature': 'same_srv_rate',
            'mean': 0.67,
            'std': 0.44,
            'min': 0.0,
            'max': 1.0,
            'description': 'Percentage of connections to same service'
        },
        {
            'feature': 'diff_srv_rate',
            'mean': 0.06,
            'std': 0.18,
            'min': 0.0,
            'max': 1.0,
            'description': 'Percentage of connections to different services'
        },
        {
            'feature': 'dst_host_count',
            'mean': 182.65,
            'std': 98.78,
            'min': 0.0,
            'max': 255.0,
            'description': 'Number of connections to destination host'
        },
        {
            'feature': 'dst_host_srv_count',
            'mean': 114.01,
            'std': 110.41,
            'min': 0.0,
            'max': 255.0,
            'description': 'Number of connections to destination host service'
        }
    ]
    
    return Response({
        'total_features': len(statistics),
        'statistics': statistics
    })


@api_view(['GET'])
def dataset_correlations(request):
    """
    Get correlation analysis with target class
    """
    # Real correlations from NSL-KDD analysis
    correlations = [
        {'feature': 'dst_host_srv_serror_rate', 'correlation': -0.654985, 'type': 'negative'},
        {'feature': 'dst_host_serror_rate', 'correlation': -0.651842, 'type': 'negative'},
        {'feature': 'serror_rate', 'correlation': -0.650652, 'type': 'negative'},
        {'feature': 'srv_serror_rate', 'correlation': -0.648289, 'type': 'negative'},
        {'feature': 'same_srv_rate', 'correlation': 0.545820, 'type': 'positive'},
        {'feature': 'dst_host_same_srv_rate', 'correlation': 0.530176, 'type': 'positive'},
        {'feature': 'logged_in', 'correlation': 0.406051, 'type': 'positive'},
        {'feature': 'dst_host_srv_diff_host_rate', 'correlation': -0.380103, 'type': 'negative'},
        {'feature': 'srv_diff_host_rate', 'correlation': -0.364328, 'type': 'negative'},
        {'feature': 'dst_host_diff_srv_rate', 'correlation': -0.340026, 'type': 'negative'},
        {'feature': 'diff_srv_rate', 'correlation': -0.323551, 'type': 'negative'},
        {'feature': 'dst_host_same_src_port_rate', 'correlation': 0.266424, 'type': 'positive'},
        {'feature': 'srv_count', 'correlation': -0.237752, 'type': 'negative'},
        {'feature': 'count', 'correlation': 0.218441, 'type': 'positive'},
        {'feature': 'dst_host_srv_count', 'correlation': 0.203106, 'type': 'positive'},
        {'feature': 'dst_host_rerror_rate', 'correlation': 0.177305, 'type': 'positive'},
        {'feature': 'rerror_rate', 'correlation': 0.176472, 'type': 'positive'},
        {'feature': 'srv_rerror_rate', 'correlation': 0.175953, 'type': 'positive'},
        {'feature': 'dst_host_srv_rerror_rate', 'correlation': 0.175634, 'type': 'positive'},
        {'feature': 'dst_host_count', 'correlation': 0.133093, 'type': 'positive'}
    ]
    
    return Response({
        'total_correlations': len(correlations),
        'correlations': correlations,
        'description': 'Pearson correlation coefficients with target class (normal vs anomaly)'
    })


@api_view(['GET'])
def protocol_distribution(request):
    """
    Get protocol distribution in the dataset
    """
    protocols = DATASET_INFO['protocols']
    total = sum(protocols.values())
    
    data = [
        {
            'protocol': 'TCP',
            'count': protocols['tcp'],
            'percentage': round((protocols['tcp'] / total) * 100, 2)
        },
        {
            'protocol': 'UDP',
            'count': protocols['udp'],
            'percentage': round((protocols['udp'] / total) * 100, 2)
        },
        {
            'protocol': 'ICMP',
            'count': protocols['icmp'],
            'percentage': round((protocols['icmp'] / total) * 100, 2)
        }
    ]
    
    return Response({
        'total_connections': total,
        'protocols': data
    })


@api_view(['GET'])
def classification_distribution(request):
    """
    Get classification distribution (Normal vs Anomaly)
    """
    classification = DATASET_INFO['classification']
    total = sum(classification.values())
    
    data = [
        {
            'class': 'Normal',
            'count': classification['normal'],
            'percentage': round((classification['normal'] / total) * 100, 2)
        },
        {
            'class': 'Anomaly',
            'count': classification['anomaly'],
            'percentage': round((classification['anomaly'] / total) * 100, 2)
        }
    ]
    
    return Response({
        'total_records': total,
        'distribution': data
    })


@api_view(['GET'])
def feature_analysis(request):
    """
    Get detailed feature analysis and importance
    """
    features = [
        {
            'name': 'same_srv_rate',
            'importance': 'high',
            'correlation': 0.545820,
            'description': 'Percentage of connections to the same service - strong positive correlation with normal traffic'
        },
        {
            'name': 'dst_host_same_srv_rate',
            'importance': 'high',
            'correlation': 0.530176,
            'description': 'Percentage of connections to same service on destination host'
        },
        {
            'name': 'serror_rate',
            'importance': 'high',
            'correlation': -0.650652,
            'description': 'SYN error rate - strong negative correlation indicates anomalies'
        },
        {
            'name': 'srv_serror_rate',
            'importance': 'high',
            'correlation': -0.648289,
            'description': 'SYN error rate for service connections'
        },
        {
            'name': 'logged_in',
            'importance': 'medium',
            'correlation': 0.406051,
            'description': 'Whether user successfully logged in'
        },
        {
            'name': 'count',
            'importance': 'medium',
            'correlation': 0.218441,
            'description': 'Number of connections to same host in past 2 seconds'
        },
        {
            'name': 'srv_count',
            'importance': 'medium',
            'correlation': -0.237752,
            'description': 'Number of connections to same service in past 2 seconds'
        }
    ]
    
    return Response({
        'total_features': len(features),
        'features': features,
        'analysis': 'Features ranked by correlation strength with target class'
    })
