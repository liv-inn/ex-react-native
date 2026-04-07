import { StyleSheet } from 'react-native';

export function styles() {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ffffff',
            alignItems: 'center',
        },
        title: {
            fontSize: 24,
            fontWeight: 'normal',
            color: '#e53e3e',
            textAlign: 'center',
            marginBottom: 30,
            marginTop: 20,
        },
        scrollContainer: {
            width: '90%',
            maxWidth: 400,
            height: 420,
            backgroundColor: '#f4f4',
            borderRadius: 12,
            padding: 20,
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 4,
        },
        scrollView: {
            flex: 1,
        },
        scrollContent: {
            alignItems: 'center',
            paddingHorizontal: 10,
            gap: 15,
        },
        produtoCard: {
            width: 190,
            height: 280,
            backgroundColor: '#fff',
            borderRadius: 4,
            padding: 15,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2,
        },
        produtoImagem: {
            width: 120,
            height: 140,
            borderRadius: 6,
            backgroundColor: '#f0f0f0',
            marginBottom: 12,
            borderWidth: 1,
            borderColor: '#e0e0e0',
        },
        produtoTitulo: {
            fontSize: 14,
            fontWeight: '500',
            color: '#333',
            textAlign: 'center',
            marginBottom: 8,
            lineHeight: 18,
        },
        produtoPreco: {
            fontSize: 16,
            fontWeight: '600',
            color: '#aa22aa',
            marginBottom: 8,
        },
        produtoDescricao: {
            fontSize: 12,
            color: '#666',
            textAlign: 'center',
            lineHeight: 16,
            flex: 1,
        },
    });
}

export default styles;
