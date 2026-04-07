import { StyleSheet } from 'react-native';

export function styles() {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            padding: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: 'normal',
            color: '#333',
            marginBottom: 40,
            textAlign: 'center',
        },
        inputContainer: {
            width: '100%',
            marginBottom: 15,
        },
        label: {
            fontSize: 16,
            color: '#666',
            marginBottom: 5,
        },
        input: {
            width: '100%',
            height: 45,
            backgroundColor: '#f8f8f8',
            borderRadius: 5,
            paddingHorizontal: 12,
            fontSize: 16,
            borderWidth: 1,
            borderColor: '#e0e0e0',
        },
        button: {
            width: '100%',
            height: 45,
            backgroundColor: '#007AFF',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'normal',
        },
        resultContainer: {
            width: '100%',
            marginTop: 25,
            alignItems: 'center',
            padding: 15,
            backgroundColor: '#f0f0f0',
            borderRadius: 5,
        },
        resultLabel: {
            fontSize: 16,
            color: '#666',
            marginBottom: 8,
        },
        resultText: {
            fontSize: 24,
            color: '#333',
            textAlign: 'center',
            fontWeight: '500',
        },
        classificacaoContainer: {
            width: '100%',
            marginTop: 15,
            alignItems: 'center',
            padding: 15,
            backgroundColor: '#e8f5e8',
            borderRadius: 5,
        },
        classificacaoText: {
            fontSize: 18,
            color: '#2d5a2d',
            textAlign: 'center',
            fontWeight: '500',
        },
    });
}

export default styles;
