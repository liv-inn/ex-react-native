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
            marginBottom: 30,
            textAlign: 'center',
        },
        imageContainer: {
            marginBottom: 10,
            alignItems: 'center',
        },
        image: {
            width: 300,
            height: 300,
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
            fontSize: 18,
            color: '#333',
            textAlign: 'center',
            fontWeight: '500',
        },
        clearButton: {
            backgroundColor: '#888',
            paddingHorizontal: 15,
            paddingVertical: 8,
            borderRadius: 3,
        },
        clearButtonText: {
            color: '#fff',
            fontSize: 14,
        },
    });
}

export default styles;